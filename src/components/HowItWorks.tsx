const steps = [
  {
    number: '01',
    icon: '📝',
    title: 'Заполните форму',
    description: 'Выберите класс, тему, уровень ученика и цель урока',
    color: 'from-primary-500 to-primary-600',
  },
  {
    number: '02',
    icon: '⚡',
    title: 'Нажмите «Сгенерировать»',
    description: 'AI создаст полный комплект материалов за 60 секунд',
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '03',
    icon: '🎓',
    title: 'Проведите урок',
    description: 'Используйте готовые материалы на уроке',
    color: 'from-green-500 to-green-600',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            Как это работает
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900">
            Три простых шага
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            От заполнения формы до готового урока — меньше минуты
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-primary-200 via-blue-200 to-green-200" />

          {steps.map((step, index) => (
            <div key={step.number} className={`fade-up fade-up-delay-${index + 1} text-center relative`}>
              <div className="relative inline-block mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg relative z-10`}>
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold text-primary-700 border-2 border-primary-100 z-20">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
