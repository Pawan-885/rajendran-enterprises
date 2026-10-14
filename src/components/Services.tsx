import { useLanguage } from '../context/LanguageContext';

function Services() {
  const { t } = useLanguage();

  // Service content comes from the translation dictionary.
  // Image paths remain unchanged in both languages.
  const services = [
    {
      title: t.supplyTitle,
      description: t.supplyDescription,
      image: '/images/collar.jpeg',
      alt: t.supplyTitle,
    },
    {
      title: t.agricultureTitle,
      description: t.agricultureDescription,
      image: '/images/generator1.webp',
      alt: t.agricultureTitle,
    },
    {
      title: t.bulkTitle,
      description: t.bulkDescription,
      image: '/images/welding.jpg',
      alt: t.bulkTitle,
    },
    {
      title: t.assistanceTitle,
      description: t.assistanceDescription,
      image: '/images/borewells.avif',
      alt: t.assistanceTitle,
    },
  ];

  return (
    <section
      id="services"
      className="px-5 py-20 sm:px-8 lg:px-16"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text)',
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <p
            className="mb-3 text-sm font-bold tracking-[0.2em]"
            style={{ color: 'var(--color-secondary)' }}
          >
            {t.servicesLabel}
          </p>

          <h2
            className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--color-heading)' }}
          >
            {t.servicesTitle}
          </h2>

          <p
            className="mx-auto max-w-2xl leading-7"
            style={{ color: 'var(--color-muted)' }}
          >
            {t.servicesDescription}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              {/* Service image */}
              <div className="h-56 overflow-hidden bg-white">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Service details */}
              <div className="p-5">
                <h3
                  className="mb-3 text-lg font-bold"
                  style={{ color: 'var(--color-heading)' }}
                >
                  {service.title}
                </h3>

                <p
                  className="min-h-24 text-sm leading-6"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-[#3282B8] transition-all hover:gap-3"
                >
                  {t.enquireNow} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;