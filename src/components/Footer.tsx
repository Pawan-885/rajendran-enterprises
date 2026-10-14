import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const { t } = useLanguage();

  const navigationLinks = [
    { label: t.home, href: '#home' },
    { label: t.about, href: '#about' },
    { label: t.products, href: '#products' },
    { label: t.services, href: '#services' },
    { label: t.gallery, href: '#gallery' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <footer
      className="border-t px-5 pt-12 sm:px-8 lg:px-16"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 pb-10 sm:grid-cols-2">
        {/* Company logo and name */}
        <div>
          <a
            href="#home"
            className="inline-flex items-center gap-2"
            aria-label="Rajendran Enterprises - Home"
          >
            {/* Same RE Logo as Navbar */}
            <div
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center text-2xl font-extrabold tracking-tight"
            >
              <span className="text-[#0F4C75]">R</span>

              <span className="-ml-1 text-[#3282B8]">E</span>
            </div>

            {/* Company name and tagline */}
            <div className="leading-tight">
              <h2
                className="text-sm font-bold sm:text-base"
                style={{ color: 'var(--color-heading)' }}
              >
                {t.company}
              </h2>

              <p
                className="mt-1 text-[10px] sm:text-xs"
                style={{ color: 'var(--color-muted)' }}
              >
                {t.tagline}
              </p>
            </div>
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="mb-5 text-lg font-bold"
            style={{ color: 'var(--color-heading)' }}
          >
            {t.quickLinks}
          </h3>

          <ul className="flex flex-wrap gap-x-6 gap-y-4">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block border-b-2 border-transparent pb-1 text-sm transition-all duration-200 hover:border-[#3282B8] hover:text-[#3282B8] focus-visible:border-[#3282B8] focus-visible:text-[#3282B8] focus-visible:outline-none"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="border-t py-6 text-center text-sm"
        style={{
          borderColor: 'var(--color-border)',
          color: 'var(--color-muted)',
        }}
      >
        © {new Date().getFullYear()} {t.company}. {t.footerCopyright}
      </div>
    </footer>
  );
}

export default Footer;