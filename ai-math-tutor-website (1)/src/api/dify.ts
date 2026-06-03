// API Client для генерации уроков
// Вызывает серверный API, который безопасно хранит ключ

export interface LessonParams {
  grade: string;
  topic: string;
  level: string;
  duration: string;
  goal: string;
}

export interface GeneratedLesson {
  topic: string;
  grade: string;
  level: string;
  duration: string;
  goal: string;
  explanation: string;
  plan: { time: string; activity: string }[];
  tasks: { number: number; text: string; answer: string; difficulty: string }[];
  homework: { number: number; text: string; answer: string }[];
  test: { number: number; question: string; options: string[]; correct: string }[];
  parentReport: string;
}

export async function generateLesson(params: LessonParams): Promise<GeneratedLesson> {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `API Error: ${response.status}`);
  }

  return response.json();
}
