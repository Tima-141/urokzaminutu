// Vercel Serverless Function для безопасного вызова Dify API
// API-ключ хранится в переменных окружения на сервере

import type { VercelRequest, VercelResponse } from '@vercel/node';

const DIFY_API_KEY = process.env.DIFY_API_KEY;
const DIFY_API_URL = 'https://api.dify.ai/v1/completion-messages';

interface LessonParams {
  grade: string;
  topic: string;
  level: string;
  duration: string;
  goal: string;
}

function buildPrompt(params: LessonParams): string {
  const levelDescription = 
    params.level === 'Слабый' 
      ? 'Ученик слабый — нужны простые задания, подробные объяснения с аналогиями, много поддержки.'
      : params.level === 'Сильный'
      ? 'Ученик сильный — нужны сложные задания, олимпиадные задачи, задания с параметром и модулем.'
      : 'Ученик среднего уровня — стандартная сложность заданий.';

  const goalDescription: Record<string, string> = {
    'new': 'Объяснить новую тему',
    'practice': 'Отработать тему на практике',
    'test-prep': 'Подготовка к контрольной работе',
    'oge': 'Подготовка к ОГЭ (задания в формате экзамена)',
  };

  return `Ты — опытный репетитор по математике. Создай полный комплект материалов для урока.

ПАРАМЕТРЫ УРОКА:
- Класс: ${params.grade}
- Тема: ${params.topic}
- Уровень ученика: ${params.level}. ${levelDescription}
- Длительность: ${params.duration} минут
- Цель: ${goalDescription[params.goal] || params.goal}

ВАЖНО: Ответ должен быть СТРОГО в формате JSON без дополнительного текста. Структура:

{
  "goal": "Цель урока одним предложением",
  "explanation": "Объяснение темы простыми словами с аналогиями из жизни. 3-5 абзацев. Используй переносы строк \\n для разделения абзацев.",
  "plan": [
    {"time": "0-5 мин", "activity": "Описание активности"},
    {"time": "5-15 мин", "activity": "Описание активности"}
  ],
  "tasks": [
    {"number": 1, "text": "Текст задания", "answer": "Ответ", "difficulty": "Лёгкий"},
    {"number": 2, "text": "Текст задания", "answer": "Ответ", "difficulty": "Базовый"}
  ],
  "homework": [
    {"number": 1, "text": "Текст задания", "answer": "Ответ"}
  ],
  "test": [
    {"number": 1, "question": "Вопрос?", "options": ["а) вариант1", "б) вариант2", "в) вариант3", "г) вариант4"], "correct": "а"}
  ],
  "parentReport": "Текст отчёта для родителей о прогрессе ученика"
}

ТРЕБОВАНИЯ:
1. План урока: ${params.duration === '45' ? '5' : params.duration === '60' ? '6' : '8'} этапов, адаптированный под уровень ученика
2. Практические задания: 7 штук, сложность соответствует уровню ученика (difficulty: Лёгкий/Базовый/Средний/Сложный/Повышенный/Олимпиадный)
3. Домашнее задание: ${params.level === 'Слабый' ? '4' : params.level === 'Сильный' ? '5' : '4'} задания
4. Мини-тест: 12 вопросов с 4 вариантами ответов каждый
5. Отчёт для родителей: профессиональный, с emoji, описание что изучили, результаты, рекомендации
6. Все задания должны быть математически корректны с правильными ответами
7. Для сильного ученика включи задания с модулем, параметром, нестандартные задачи
8. Для слабого ученика — только простые задания с числами, без сложных преобразований

Верни ТОЛЬКО JSON, без markdown-разметки и дополнительного текста.`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check API key
  if (!DIFY_API_KEY) {
    console.error('DIFY_API_KEY is not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const params: LessonParams = req.body;

    // Validate input
    if (!params.topic || !params.grade || !params.level || !params.duration || !params.goal) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const prompt = buildPrompt(params);

    // Call Dify API
    const difyResponse = await fetch(DIFY_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${DIFY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: {},
        query: prompt,
        response_mode: 'blocking',
        user: 'teacher-' + Date.now(),
      }),
    });

    if (!difyResponse.ok) {
      const errorText = await difyResponse.text();
      console.error('Dify API Error:', difyResponse.status, errorText);
      return res.status(502).json({ error: 'AI service error', details: errorText });
    }

    const data = await difyResponse.json();
    
    // Extract answer from Dify
    let answerText = data.answer || data.text || '';
    
    // Remove markdown code blocks if present
    answerText = answerText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    // Parse JSON
    const parsed = JSON.parse(answerText);
    
    // Build response
    const result = {
      topic: params.topic,
      grade: params.grade,
      level: params.level,
      duration: params.duration,
      goal: parsed.goal || '',
      explanation: parsed.explanation || '',
      plan: parsed.plan || [],
      tasks: parsed.tasks || [],
      homework: parsed.homework || [],
      test: parsed.test || [],
      parentReport: parsed.parentReport || '',
    };

    return res.status(200).json(result);

  } catch (error) {
    console.error('Error generating lesson:', error);
    return res.status(500).json({ 
      error: 'Failed to generate lesson',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
