const features = [
  {
    icon: '📋',
    title: 'План урока',
    description: 'Подробный план по минутам, адаптированный под длительность урока',
    color: 'bg-blue-50 border-blue-100',
  },
  {
    icon: '💡',
    title: 'Объяснение темы',
    description: 'Простым языком с аналогиями из жизни и примерами',
    color: 'bg-amber-50 border-amber-100',
  },
  {
    icon: '✏️',
    title: 'Практические задания',
    description: '7 заданий с адаптацией под уровень ученика',
    color: 'bg-green-50 border-green-100',
  },
  {
    icon: '📝',
    title: 'Домашнее задание',
    description: 'Готовая домашка с ответами для проверки',
    color: 'bg-purple-50 border-purple-100',
  },
  {
    icon: '📊',
    title: 'Мини-тест',
    description: '12 вопросов с вариантами ответов для проверки знаний',
    color: 'bg-rose-50 border-rose-100',
  },
  {
    icon: '👨‍👩‍👦',
    title: 'Отчёт родителям',
    description: 'Профессиональный отчёт о прогрессе ученика',
    color: 'bg-cyan-50 border-cyan-100',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            Возможности
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900">
            Что умеет сервис
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Полный комплект материалов для урока — от плана до отчёта для родителей
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`fade-up fade-up-delay-${index < 3 ? index + 1 : index - 2} group relative p-6 lg:p-8 rounded-2xl border ${feature.color} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
