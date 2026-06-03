import { Link } from 'react-router-dom';

const features = [
  'Безлимитные генерации',
  'Все функции доступны',
  'Без регистрации',
  'План урока по минутам',
  'Объяснение темы',
  'Практические задания (7 шт)',
  'Домашнее задание',
  'Мини-тест (12 вопросов)',
  'Отчёт для родителей',
  'Копирование результата',
  'Адаптация под уровень ученика',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 text-sm font-medium rounded-full mb-4">
            🎉 Полностью бесплатно
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900">
            Бесплатно и без ограничений
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Все функции сервиса доступны бесплатно. Никаких скрытых платежей, подписок или лимитов.
          </p>
        </div>

        <div className="max-w-lg mx-auto fade-up">
          <div className="relative rounded-3xl border-2 border-green-200 shadow-xl shadow-green-100/50 bg-white overflow-hidden">
            {/* Badge */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-center py-3 text-sm font-bold">
              ✨ Всё включено — навсегда бесплатно
            </div>

            <div className="p-8 pt-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-4">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-900">Полный доступ</h3>
                <p className="text-slate-500 mt-1">Для всех преподавателей</p>
              </div>

              <div className="flex items-baseline justify-center mb-8">
                <span className="text-6xl font-extrabold text-green-600">0 ₽</span>
                <span className="text-slate-500 text-xl ml-2">навсегда</span>
              </div>

              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-700">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/generator"
                className="block w-full text-center px-8 py-4 bg-green-600 text-white text-lg font-bold rounded-2xl hover:bg-green-700 transition-all duration-200 shadow-lg shadow-green-600/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                Начать бесплатно
                <svg className="inline-block ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <p className="text-center text-sm text-slate-400 mt-4">
                Без регистрации • Без привязки карты
              </p>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="text-2xl mb-1">♾️</div>
              <div className="text-sm font-semibold text-primary-900">Безлимит</div>
              <div className="text-xs text-slate-500">генераций</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="text-2xl mb-1">🔓</div>
              <div className="text-sm font-semibold text-primary-900">Без регистрации</div>
              <div className="text-xs text-slate-500">начните сразу</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-4">
              <div className="text-2xl mb-1">💚</div>
              <div className="text-sm font-semibold text-primary-900">Навсегда</div>
              <div className="text-xs text-slate-500">бесплатно</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
