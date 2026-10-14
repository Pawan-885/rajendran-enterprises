import { useState } from 'react';

import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const navigation = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'products', href: '#products' },
  { key: 'services', href: '#services' },
  { key: 'gallery', href: '#gallery' },
  { key: 'contact', href: '#contact' },
] as const;

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isDark = theme === 'dark';

  function handleNavigation(section: string) {
    setActiveSection(section);
    setMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isDark
          ? 'border-[#3282B8]/40 bg-black'
          : 'border-slate-200 bg-white'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-5 lg:px-8"
      >
        {/* Logo and company name */}
        <a
          href="#home"
          onClick={() => handleNavigation('home')}
          className="flex shrink-0 items-center gap-2"
          aria-label="Rajendran Enterprises - Home"
        >
          {/* RE Logo */}
          <div
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center text-2xl font-extrabold tracking-tight"
          >
            <span className={isDark ? 'text-white' : 'text-[#0F4C75]'}>
              R
            </span>

            <span className="-ml-1 text-[#3282B8]">E</span>
          </div>

          {/* Company name and tagline */}
          <div className="leading-tight">
            <span
              className={`block text-sm font-bold sm:text-base ${
                isDark ? 'text-white' : 'text-[#1B262C]'
              }`}
            >
              {t.company}
            </span>

            <span
              className={`mt-1 block text-[10px] sm:text-xs ${
                isDark ? 'text-[#BBE1FA]' : 'text-slate-600'
              }`}
            >
              {t.tagline}
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navigation.map((item) => {
            const isActive = activeSection === item.key;

            return (
              <a
                key={item.key}
                href={item.href}
                onClick={() => handleNavigation(item.key)}
                aria-current={isActive ? 'location' : undefined}
                className={`border-b-2 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'border-[#3282B8] text-[#3282B8]'
                    : isDark
                      ? 'border-transparent text-white hover:text-[#BBE1FA]'
                      : 'border-transparent text-[#1B262C] hover:text-[#3282B8]'
                }`}
              >
                {t[item.key]}
              </a>
            );
          })}
        </div>

        {/* Theme, language and mobile menu controls */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          {/* Dark mode toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? t.lightMode : t.darkMode}
            title={isDark ? t.lightMode : t.darkMode}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3282B8] ${
              isDark
                ? 'text-white hover:bg-white/10'
                : 'text-[#0F4C75] hover:bg-[#BBE1FA]/40'
            }`}
          >
            {isDark ? '☀' : '☾'}
          </button>

          {/* English / Tamil toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t.changeLanguage}
            title={t.changeLanguage}
            className={`min-w-9 px-1 py-2 text-xs font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3282B8] sm:text-sm ${
              isDark
                ? 'text-white hover:text-[#BBE1FA]'
                : 'text-[#0F4C75] hover:text-[#3282B8]'
            }`}
          >
            {language === 'en' ? 'தமிழ்' : 'EN'}
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className={`flex h-9 w-9 items-center justify-center text-2xl transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3282B8] lg:hidden ${
              isDark
                ? 'text-white hover:text-[#BBE1FA]'
                : 'text-[#0F4C75] hover:text-[#3282B8]'
            }`}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </nav>

      {/* Responsive mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className={`border-t px-4 py-3 transition-colors duration-300 lg:hidden ${
            isDark
              ? 'border-[#3282B8]/40 bg-black'
              : 'border-slate-200 bg-white'
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => {
              const isActive = activeSection === item.key;

              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => handleNavigation(item.key)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`border-b px-2 py-3 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'border-[#3282B8]/30 text-[#3282B8] underline decoration-[#3282B8] decoration-2 underline-offset-4'
                      : isDark
                        ? 'border-[#3282B8]/20 text-white hover:text-[#BBE1FA]'
                        : 'border-slate-100 text-[#1B262C] hover:text-[#3282B8]'
                  }`}
                >
                  {t[item.key]}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;