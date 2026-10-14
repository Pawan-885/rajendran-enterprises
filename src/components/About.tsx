import { useLanguage } from '../context/LanguageContext';

function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: '✓',
      title: t.qualityTitle,
      description: t.qualityDescription,
    },
    {
      icon: '↗',
      title: t.reliabilityTitle,
      description: t.reliabilityDescription,
    },
    {
      icon: '♡',
      title: t.customerTitle,
      description: t.customerDescription,
    },
  ];

  return (
    <section
      id="about"
      className="bg-[var(--color-background)] px-4 py-16 transition-colors duration-300 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
            {t.aboutLabel}
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            {t.aboutTitle}
          </h2>

          <p className="mt-6 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            {t.aboutDescription}
          </p>
        </div>

        {/* Mission statement */}
        <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#3282B8]/15 text-2xl font-bold text-[#3282B8]">
              ★
            </div>

            <h3 className="mt-5 text-2xl font-bold text-[var(--color-heading)]">
              {t.aboutMissionTitle}
            </h3>

            <p className="mt-4 leading-7 text-[var(--color-muted)]">
              {t.aboutMissionDescription}
            </p>
          </div>
        </div>

        {/* Company values */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#3282B8] sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3282B8]/15 text-2xl font-bold text-[#3282B8]">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-[var(--color-heading)]">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-[var(--color-muted)]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;