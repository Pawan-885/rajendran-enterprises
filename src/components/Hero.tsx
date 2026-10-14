import { useLanguage } from '../context/LanguageContext';

function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="bg-[var(--color-background)] px-4 py-8 transition-colors duration-300 sm:px-6 lg:px-8 lg:py-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">

        {/* Left: Introduction */}
        <div className="order-2 lg:order-1">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-1 w-12 rounded-full bg-[#3282B8]" />

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-secondary)] sm:tracking-[0.18em]">
              {t.heroEyebrow}
            </p>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-heading)] sm:text-5xl xl:text-6xl">
            {t.heroTitle}{' '}
            <span className="text-[#3282B8]">
              {t.heroHighlight}
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-bold leading-snug text-[var(--color-text)] sm:text-2xl">
            {t.heroSubtitle}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            {t.heroDescription}
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="#products"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3282B8]"
            >
              {t.viewProducts}
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border-2 border-[var(--color-secondary)] bg-transparent px-6 py-3 font-semibold text-[var(--color-secondary)] transition hover:bg-[#3282B8]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3282B8]"
            >
              {t.exploreServices}
              <span aria-hidden="true">→</span>
            </a>

          </div>
        </div>

        {/* Right: Pipe-yard image */}
        <div className="order-1 lg:order-2">
          <div className="relative min-h-64 overflow-hidden rounded-2xl border border-[var(--color-border)] sm:min-h-80 lg:min-h-[460px]">

            <img
              src="/images/pipe-yard-hero.png"
              alt="Industrial pipes for agriculture and irrigation"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-[#1B262C]/30 via-transparent to-[#BBE1FA]/10"
            />

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;