const testimonials = [
  {
    name: 'Анна М.',
    role: 'Репетитор по математике',
    text: 'Раньше тратила час на подготовку к каждому уроку. Теперь — 5 минут. Материалы отличные, ученикам нравится.',
    avatar: 'А',
    color: 'bg-rose-100 text-rose-600',
    stars: 5,
  },
  {
    name: 'Дмитрий К.',
    role: 'Учитель математики',
    text: 'Использую для создания контрольных и домашних заданий. Экономит кучу времени. Рекомендую всем коллегам.',
    avatar: 'Д',
    color: 'bg-blue-100 text-blue-600',
    stars: 5,
  },
  {
    name: 'Елена В.',
    role: 'Репетитор ОГЭ',
    text: 'Генерирует задания прямо в формате ОГЭ. Очень удобно для подготовки учеников. Экономлю несколько часов в неделю.',
    avatar: 'Е',
    color: 'bg-green-100 text-green-600',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            Отзывы
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900">
            Что говорят преподаватели
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Более 500 репетиторов уже используют наш сервис
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className={`fade-up fade-up-delay-${index + 1} bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 hover:shadow-lg transition-all duration-300 relative`}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-4xl text-slate-100 font-serif leading-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6 relative z-10">
                «{item.text}»
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 ${item.color} rounded-full flex items-center justify-center font-bold text-lg`}>
                  {item.avatar}
                </div>
                <div>
                  <div className="font-semibold text-primary-900">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
