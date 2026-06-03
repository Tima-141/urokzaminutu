import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { generateLesson, type GeneratedLesson } from '../api/dify';
import { getMockResult } from '../data/mockResult';

export default function GeneratorPage() {
  const [grade, setGrade] = useState('7');
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('medium');
  const [duration, setDuration] = useState('60');
  const [goal, setGoal] = useState('new');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GeneratedLesson | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const levelLabels: Record<string, string> = {
    weak: 'Слабый',
    medium: 'Средний',
    strong: 'Сильный',
  };

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setIsLoading(true);
    setResult(null);
    setError(null);

    const params = {
      grade,
      topic: topic.trim(),
      level: levelLabels[level],
      duration,
      goal,
    };

    try {
      // Вызываем безопасный серверный API
      const aiResult = await generateLesson(params);
      setResult(aiResult);
    } catch (err) {
      console.error('AI generation failed, using mock data:', err);
      // Fallback на демо-данные если сервер недоступен
      setError('Используем демо-режим (сервер временно недоступен)');
      const mockResult = getMockResult(topic, grade, levelLabels[level], duration, goal);
      setResult(mockResult);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [result]);

  const handleCopy = () => {
    if (!result) return;
    const text = formatResultAsText(result);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  const handleNewLesson = () => {
    setTopic('');
    setResult(null);
    setError(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Лёгкий':
        return 'bg-green-100 text-green-700';
      case 'Базовый':
        return 'bg-blue-100 text-blue-700';
      case 'Средний':
        return 'bg-yellow-100 text-yellow-700';
      case 'Сложный':
        return 'bg-orange-100 text-orange-700';
      case 'Повышенный':
        return 'bg-red-100 text-red-700';
      case 'Олимпиадный':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md">
              У
            </div>
            <span className="text-lg font-bold text-primary-900">
              УрокЗа<span className="text-primary-600">Минуту</span>
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm text-slate-500 hover:text-primary-600 transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            На главную
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 lg:p-8 sticky top-24">
              <h2 className="text-xl font-bold text-primary-900 mb-1">Генератор урока</h2>
              <p className="text-sm text-slate-500 mb-6">Заполните параметры и нажмите кнопку</p>

              <div className="space-y-5">
                {/* Grade */}
                <div>
                  <label className="block text-sm font-semibold text-primary-900 mb-2">Класс</label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="5">5 класс</option>
                    <option value="6">6 класс</option>
                    <option value="7">7 класс</option>
                    <option value="8">8 класс</option>
                    <option value="9">9 класс</option>
                  </select>
                </div>

                {/* Topic */}
                <div>
                  <label className="block text-sm font-semibold text-primary-900 mb-2">Тема урока</label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Например: Квадратные уравнения"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-primary-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Level */}
                <div>
                  <label className="block text-sm font-semibold text-primary-900 mb-2">Уровень ученика</label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="weak">Слабый — простые задания, подробные объяснения</option>
                    <option value="medium">Средний — стандартная сложность</option>
                    <option value="strong">Сильный — сложные и олимпиадные задания</option>
                  </select>
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-semibold text-primary-900 mb-2">Длительность урока</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="45">45 минут</option>
                    <option value="60">60 минут</option>
                    <option value="90">90 минут</option>
                  </select>
                </div>

                {/* Goal */}
                <div>
                  <label className="block text-sm font-semibold text-primary-900 mb-2">Цель урока</label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="new">Объяснить новую тему</option>
                    <option value="practice">Отработать на практике</option>
                    <option value="test-prep">Подготовка к контрольной</option>
                    <option value="oge">Подготовка к ОГЭ</option>
                  </select>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  disabled={isLoading || !topic.trim()}
                  className="w-full py-4 bg-green-600 text-white text-lg font-bold rounded-xl hover:bg-green-700 transition-all duration-200 shadow-md shadow-green-600/20 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-md cursor-pointer"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      AI генерирует...
                    </span>
                  ) : (
                    '🤖 Сгенерировать урок'
                  )}
                </button>

                {/* Free badge */}
                <div className="text-center">
                  <span className="inline-flex items-center gap-1.5 text-sm text-green-600 font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Бесплатно и без ограничений
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-3" ref={resultRef}>
            {!result && !isLoading && (
              <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center text-4xl mb-6">
                  🤖
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  Здесь появится готовый материал к уроку
                </h3>
                <p className="text-slate-500 max-w-md">
                  Заполните форму слева и нажмите «Сгенерировать урок». AI подготовит полный комплект материалов.
                </p>
              </div>
            )}

            {isLoading && (
              <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 border-4 border-primary-200 rounded-full animate-spin border-t-primary-600" />
                  <div className="absolute inset-0 flex items-center justify-center text-2xl">🤖</div>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  AI генерирует урок...
                </h3>
                <p className="text-slate-500">
                  Создаём план, объяснение, задания и тесты. Обычно это занимает 10-30 секунд.
                </p>
                <div className="mt-6 flex gap-1.5 justify-center">
                  <div className="w-2.5 h-2.5 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                  <div className="w-2.5 h-2.5 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                  <div className="w-2.5 h-2.5 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                </div>
              </div>
            )}

            {result && !isLoading && (
              <div className="space-y-6">
                {/* Error notice */}
                {error && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center gap-3">
                    <span className="text-xl">⚠️</span>
                    <p className="text-amber-800 text-sm">{error}</p>
                  </div>
                )}

                {/* Header */}
                <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-6 lg:p-8 text-white shadow-lg">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-lg text-sm font-medium">
                      {result.grade} класс
                    </span>
                    <span className={`px-3 py-1 rounded-lg text-sm font-medium ${
                      result.level === 'Слабый' ? 'bg-green-400/30' :
                      result.level === 'Сильный' ? 'bg-purple-400/30' : 'bg-white/20'
                    }`}>
                      {result.level} уровень
                    </span>
                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-lg text-sm font-medium">
                      {result.duration} мин
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold">{result.topic}</h2>
                </div>

                {/* Goal */}
                <ResultCard icon="🎯" title="Цель урока">
                  <p className="text-slate-700 leading-relaxed">{result.goal}</p>
                </ResultCard>

                {/* Explanation */}
                <ResultCard icon="💡" title="Объяснение простыми словами">
                  <div className="text-slate-700 leading-relaxed whitespace-pre-line">{result.explanation}</div>
                </ResultCard>

                {/* Plan */}
                {result.plan && result.plan.length > 0 && (
                  <ResultCard icon="📋" title="План урока">
                    <div className="space-y-3">
                      {result.plan.map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <span className="text-sm text-primary-600 font-mono font-semibold w-20 shrink-0 bg-primary-50 px-2 py-1 rounded-lg text-center">
                            {item.time}
                          </span>
                          <span className="text-slate-700 pt-0.5">{item.activity}</span>
                        </div>
                      ))}
                    </div>
                  </ResultCard>
                )}

                {/* Tasks */}
                {result.tasks && result.tasks.length > 0 && (
                  <ResultCard icon="✏️" title={`Практические задания (${result.tasks.length} шт)`}>
                    <div className="space-y-3">
                      {result.tasks.map((task) => (
                        <div key={task.number} className="bg-slate-50 rounded-xl p-4">
                          <div className="flex items-start gap-3">
                            <span className="w-7 h-7 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
                              {task.number}
                            </span>
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-2 mb-1">
                                <p className="text-slate-800 font-medium">{task.text}</p>
                                {task.difficulty && (
                                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${getDifficultyColor(task.difficulty)}`}>
                                    {task.difficulty}
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-green-600 mt-1.5 font-medium">
                                ✓ Ответ: {task.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ResultCard>
                )}

                {/* Homework */}
                {result.homework && result.homework.length > 0 && (
                  <ResultCard icon="📝" title={`Домашнее задание (${result.homework.length} шт)`}>
                    <div className="space-y-3">
                      {result.homework.map((hw) => (
                        <div key={hw.number} className="bg-amber-50 rounded-xl p-4">
                          <div className="flex items-start gap-3">
                            <span className="w-7 h-7 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
                              {hw.number}
                            </span>
                            <div className="flex-1">
                              <p className="text-slate-800 font-medium">{hw.text}</p>
                              <p className="text-sm text-green-600 mt-1.5 font-medium">
                                ✓ Ответ: {hw.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ResultCard>
                )}

                {/* Test */}
                {result.test && result.test.length > 0 && (
                  <ResultCard icon="📊" title={`Мини-тест (${result.test.length} вопросов)`}>
                    <div className="space-y-4">
                      {result.test.map((q) => (
                        <div key={q.number} className="bg-slate-50 rounded-xl p-4">
                          <p className="text-slate-800 font-semibold mb-2">
                            {q.number}. {q.question}
                          </p>
                          <div className="space-y-1.5 ml-4">
                            {q.options.map((opt, i) => (
                              <p
                                key={i}
                                className={`text-sm ${
                                  opt.toLowerCase().startsWith(q.correct.toLowerCase())
                                    ? 'text-green-700 font-medium'
                                    : 'text-slate-600'
                                }`}
                              >
                                {opt}
                                {opt.toLowerCase().startsWith(q.correct.toLowerCase()) && ' ✓'}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ResultCard>
                )}

                {/* Parent Report */}
                {result.parentReport && (
                  <ResultCard icon="👨‍👩‍👦" title="Отчёт для родителей">
                    <div className="text-slate-700 leading-relaxed whitespace-pre-line bg-green-50 rounded-xl p-5 border border-green-100">
                      {result.parentReport}
                    </div>
                  </ResultCard>
                )}

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={handleCopy}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Скопировано!
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Скопировать всё
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleRegenerate}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary-700 font-semibold rounded-xl border-2 border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Сгенерировать заново
                  </button>
                  <button
                    onClick={handleNewLesson}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Новый урок
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 lg:p-8">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="text-xl">{icon}</span>
        <h3 className="text-lg font-bold text-primary-900">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function formatResultAsText(result: GeneratedLesson): string {
  let text = `ТЕМА: ${result.topic}\n`;
  text += `Класс: ${result.grade} | Уровень: ${result.level} | Длительность: ${result.duration} мин\n\n`;
  text += `🎯 ЦЕЛЬ УРОКА\n${result.goal}\n\n`;
  text += `💡 ОБЪЯСНЕНИЕ\n${result.explanation}\n\n`;
  
  if (result.plan && result.plan.length > 0) {
    text += `📋 ПЛАН УРОКА\n`;
    result.plan.forEach((p) => {
      text += `${p.time} — ${p.activity}\n`;
    });
    text += '\n';
  }
  
  if (result.tasks && result.tasks.length > 0) {
    text += `✏️ ПРАКТИЧЕСКИЕ ЗАДАНИЯ (${result.tasks.length} шт)\n`;
    result.tasks.forEach((t) => {
      text += `${t.number}. ${t.difficulty ? `[${t.difficulty}] ` : ''}${t.text}\n   Ответ: ${t.answer}\n`;
    });
    text += '\n';
  }
  
  if (result.homework && result.homework.length > 0) {
    text += `📝 ДОМАШНЕЕ ЗАДАНИЕ (${result.homework.length} шт)\n`;
    result.homework.forEach((h) => {
      text += `${h.number}. ${h.text}\n   Ответ: ${h.answer}\n`;
    });
    text += '\n';
  }
  
  if (result.test && result.test.length > 0) {
    text += `📊 МИНИ-ТЕСТ (${result.test.length} вопросов)\n`;
    result.test.forEach((q) => {
      text += `${q.number}. ${q.question}\n`;
      q.options.forEach((o) => {
        text += `   ${o}\n`;
      });
      text += `   Правильный ответ: ${q.correct}\n\n`;
    });
  }
  
  if (result.parentReport) {
    text += `👨‍👩‍👦 ОТЧЁТ ДЛЯ РОДИТЕЛЕЙ\n${result.parentReport}\n`;
  }
  
  return text;
}
