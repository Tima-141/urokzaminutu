import { useState } from 'react';

const faqs = [
  {
    question: 'Это заменит репетитора?',
    answer:
      'Нет. Это инструмент, который помогает репетитору экономить время на подготовке. Вы по-прежнему проводите урок и работаете с учеником. Сервис берёт на себя рутину — составление заданий, планов и объяснений.',
  },
  {
    question: 'Подходит ли для подготовки к ОГЭ?',
    answer:
      'Да. Сервис умеет генерировать задания в формате ОГЭ и учитывает требования экзамена. Вы можете выбрать цель «Подготовка к ОГЭ» при генерации.',
  },
  {
    question: 'Можно ли редактировать материалы?',
    answer:
      'Да. Вы можете скопировать результат и изменить его под себя. Мы также планируем добавить онлайн-редактор в ближайших обновлениях.',
  },
  {
    question: 'Насколько точные задания?',
    answer:
      'AI создаёт задания на основе школьной программы. Мы рекомендуем проверять ответы перед уроком. Качество постоянно улучшается на основе обратной связи от преподавателей.',
  },
  {
    question: 'Будут ли другие предметы?',
    answer:
      'Да, мы планируем добавить русский язык, физику и английский в ближайшие месяцы. Подпишитесь на обновления, чтобы не пропустить.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900">
            Частые вопросы
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Ответы на самые популярные вопросы
          </p>
        </div>

        <div className="space-y-4 fade-up">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-primary-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer group"
              >
                <span className="text-base sm:text-lg font-semibold text-primary-900 pr-4 group-hover:text-primary-700 transition-colors">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openIndex === index ? 'bg-primary-100 rotate-180' : ''
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
