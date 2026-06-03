const audiences = [
  {
    icon: '👨‍🏫',
    title: 'Частные репетиторы',
    description: 'Экономьте 2–3 часа в день на подготовке к урокам. Больше времени для учеников, меньше — на рутину.',
    features: ['Готовые планы уроков', 'Задания с ответами', 'Отчёты для родителей'],
    gradient: 'from-primary-500 to-blue-500',
    bg: 'bg-primary-50',
  },
  {
    icon: '🏫',
    title: 'Школьные учителя',
    description: 'Создавайте разнообразные материалы для каждого класса. Разные уровни сложности для разных учеников.',
    features: ['Дифференцированные задания', 'Контрольные работы', 'Домашние задания'],
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
  },
  {
    icon: '📚',
    title: 'Подготовка к ОГЭ',
    description: 'Генерируйте задания в формате экзамена. Систематическая подготовка по всем темам.',
    features: ['Задания в формате ОГЭ', 'Тесты с вариантами', 'Пошаговые решения'],
    gradient: 'from-green-500 to-emerald-500',
    bg: 'bg-green-50',
  },
];

export default function ForWhom() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            Для кого
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900">
            Кому подойдёт сервис
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Для всех, кто преподаёт математику и хочет тратить меньше времени на подготовку
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((item, index) => (
            <div
              key={item.title}
              className={`fade-up fade-up-delay-${index + 1} group relative rounded-2xl border border-slate-200 bg-white p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />

              <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center text-3xl mb-5`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-5">
                {item.description}
              </p>
              <ul className="space-y-2">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
