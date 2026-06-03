import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                У
              </div>
              <span className="text-xl font-bold text-white">
                УрокЗа<span className="text-primary-300">Минуту</span>
              </span>
            </Link>
            <p className="mt-4 text-white/60 leading-relaxed max-w-sm">
              AI-помощник для репетиторов по математике. Создавайте полные комплекты материалов для уроков за 60 секунд.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Сервис</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/generator" className="text-white/60 hover:text-white transition-colors text-sm">
                  Генератор уроков
                </Link>
              </li>
              <li>
                <a href="#pricing" className="text-white/60 hover:text-white transition-colors text-sm">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/60 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold text-white mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:bestmen801@gmail.com" className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  bestmen801@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          © 2025 УрокЗаМинуту. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
