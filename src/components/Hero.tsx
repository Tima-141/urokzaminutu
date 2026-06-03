import { Link } from 'react-router-dom';

export default function Hero() {
  const scrollToExample = () => {
    const el = document.getElementById('example');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-24 lg:pt-32 pb-16 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100/80 text-primary-700 text-sm font-medium rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              AI-помощник для репетиторов
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-900 leading-tight tracking-tight">
              Готовьте уроки по математике{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500">
                в 10 раз быстрее
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              AI-помощник для репетиторов 5–9 классов и ОГЭ. План урока, задания, домашка и тест —{' '}
              <span className="font-semibold text-primary-700">за 60 секунд.</span>
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/generator"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-2xl hover:bg-green-700 transition-all duration-200 shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/30 hover:-translate-y-0.5"
              >
                Попробовать бесплатно
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <button
                onClick={scrollToExample}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 text-lg font-semibold rounded-2xl border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 cursor-pointer"
              >
                <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Посмотреть пример
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Без регистрации
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Полностью бесплатно
              </div>
            </div>
          </div>

          {/* Right: App mockup */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/80 border border-slate-200/60 p-6 sm:p-8">
              {/* Mockup header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="flex-1 h-7 bg-slate-100 rounded-lg flex items-center px-3">
                  <span className="text-xs text-slate-400">urokzaminutu.ru/generator</span>
                </div>
              </div>

              {/* Mockup content */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-sm">📋</div>
                  <div>
                    <div className="text-sm font-semibold text-primary-900">Линейные уравнения</div>
                    <div className="text-xs text-slate-500">7 класс • Средний уровень</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-4">
                  <div className="text-xs font-semibold text-primary-700 mb-2">🎯 Цель урока</div>
                  <div className="text-sm text-slate-700">Научить решать линейные уравнения вида ax + b = c</div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="text-xs font-semibold text-slate-700 mb-2">💡 Объяснение</div>
                  <div className="text-sm text-slate-600">Представь, что уравнение — это весы. Чтобы весы остались в равновесии, нужно делать одно и то же с обеими сторонами...</div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="text-xs font-semibold text-slate-700 mb-2">✏️ Задание 1</div>
                  <div className="text-sm text-slate-600">Решите уравнение: 3x + 7 = 22</div>
                  <div className="text-xs text-green-600 mt-1 font-medium">Ответ: x = 5</div>
                </div>

                <div className="flex gap-2">
                  <div className="flex-1 h-2 bg-green-400 rounded-full" />
                  <div className="flex-1 h-2 bg-green-400 rounded-full" />
                  <div className="flex-1 h-2 bg-green-400 rounded-full" />
                  <div className="flex-1 h-2 bg-primary-400 rounded-full" />
                  <div className="flex-1 h-2 bg-slate-200 rounded-full" />
                </div>
                <div className="text-xs text-slate-500 text-center">Генерация завершена — 4 из 5 разделов</div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">⚡</div>
              <div>
                <div className="text-sm font-bold text-primary-900">60 сек</div>
                <div className="text-xs text-slate-500">Среднее время</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
