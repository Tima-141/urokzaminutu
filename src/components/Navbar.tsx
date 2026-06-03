import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToSection = (id: string) => {
    if (!isHome) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: 'Возможности', id: 'features' },
    { label: 'Как работает', id: 'how-it-works' },
    { label: 'Тарифы', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
              У
            </div>
            <span className="text-lg sm:text-xl font-bold text-primary-900">
              УрокЗа<span className="text-primary-600">Минуту</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {isHome
              ? navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))
              : navLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={`/#${link.id}`}
                    className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/generator"
              className="inline-flex items-center px-5 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              Попробовать бесплатно
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1 shadow-lg">
          {isHome
            ? navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))
            : navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={`/#${link.id}`}
                  className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
          <div className="pt-2">
            <Link
              to="/generator"
              className="block w-full text-center px-5 py-3 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 transition-colors"
            >
              Попробовать бесплатно
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
