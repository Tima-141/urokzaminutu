import { Link } from 'react-router-dom';

export default function ExampleResult() {
  return (
    <section id="example" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            Пример результата
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900">
            Посмотрите, что получите
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Пример генерации для темы «Линейные уравнения» — 7 класс, средний уровень
          </p>
        </div>

        <div className="max-w-4xl mx-auto fade-up">
          <div className="bg-gradient-to-br from-slate-50 to-primary-50/30 rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 px-6 sm:px-8 py-5">
              <div className="flex flex-wrap items-center gap-3 text-white">
                <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-lg text-sm font-medium">7 класс</span>
                <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-lg text-sm font-medium">Средний уровень</span>
                <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-lg text-sm font-medium">60 минут</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-3">
                Линейные уравнения
              </h3>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Goal */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🎯</span>
                  <h4 className="font-bold text-primary-900">Цель урока</h4>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Научить ученика решать линейные уравнения вида ax + b = c, понимать принцип переноса слагаемых и проверять ответ подстановкой.
                </p>
              </div>

              {/* Explanation */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">💡</span>
                  <h4 className="font-bold text-primary-900">Объяснение простыми словами</h4>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Представь, что уравнение — это весы. Слева и справа от знака «равно» стоят чаши весов. Чтобы весы оставались в равновесии, нужно делать одинаковые действия с обеими сторонами.
                </p>
                <p className="text-slate-700 leading-relaxed mt-2">
                  Например, если к обеим чашам добавить одинаковый груз или убрать — весы останутся в равновесии. Точно так же и с уравнением: можно прибавлять, вычитать, умножать или делить обе части на одно и то же число.
                </p>
              </div>

              {/* Tasks */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">✏️</span>
                  <h4 className="font-bold text-primary-900">Практические задания</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                    <span className="w-7 h-7 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <div>
                      <p className="text-slate-800 font-medium">Решите уравнение: 3x + 7 = 22</p>
                      <p className="text-sm text-green-600 mt-1">Ответ: x = 5</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                    <span className="w-7 h-7 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <div>
                      <p className="text-slate-800 font-medium">Решите уравнение: 5x − 12 = 28</p>
                      <p className="text-sm text-green-600 mt-1">Ответ: x = 8</p>
                    </div>
                  </div>
                  <div className="text-sm text-slate-500 italic pl-10">
                    ...ещё 3 задания в полной версии
                  </div>
                </div>
              </div>

              {/* Plan preview */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">📋</span>
                  <h4 className="font-bold text-primary-900">План урока (фрагмент)</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-slate-400 font-mono w-16 shrink-0">0–5 мин</span>
                    <span className="text-slate-700">Приветствие, проверка домашнего задания</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-slate-400 font-mono w-16 shrink-0">5–20 мин</span>
                    <span className="text-slate-700">Объяснение новой темы с примерами</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-slate-400 font-mono w-16 shrink-0">20–45 мин</span>
                    <span className="text-slate-700">Практика: решение заданий вместе</span>
                  </div>
                  <div className="text-sm text-slate-500 italic pl-[76px]">...продолжение в полной версии</div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <Link
                  to="/generator"
                  className="inline-flex items-center px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-2xl hover:bg-green-700 transition-all duration-200 shadow-lg shadow-green-600/25 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Посмотреть полный пример
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
