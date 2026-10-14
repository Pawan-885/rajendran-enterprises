import { useLanguage } from '../context/LanguageContext';

const galleryImages = [
  '/images/2026-09-02 (1).jpg',
  '/images/2026-09-02-09-24-08-461.jpg',
  '/images/2026-09-02-09-24-20-195.jpg',
  '/images/2026-09-02-09-24-32-308.jpg',
  '/images/2026-09-02-09-24-38-468.jpg',
  '/images/2026-09-02-09-25-08-494.jpg',
  '/images/2026-09-02-09-25-21-541.jpg',
  '/images/2026-09-02.jpg',
  '/images/generator.jpg',
  '/images/images.jpeg',
  '/images/imagessss.jpeg',
  '/images/unnamed.webp',
];

function Gallery() {
  const { t } = useLanguage();

  return (
    <section
      id="gallery"
      className="px-5 py-20 sm:px-8 lg:px-16"
      style={{
        backgroundColor: 'var(--color-background)',
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <p
            className="mb-3 text-sm font-bold tracking-[0.2em]"
            style={{ color: 'var(--color-secondary)' }}
          >
            {t.galleryLabel}
          </p>

          <h2
            className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--color-heading)' }}
          >
            {t.galleryTitle}
          </h2>

          <p
            className="mx-auto max-w-2xl text-base leading-7 sm:text-lg"
            style={{ color: 'var(--color-muted)' }}
          >
            {t.galleryDescription}
          </p>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image}
              className="group overflow-hidden rounded-2xl border"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <img
                src={image}
                alt={`Rajendran Enterprises gallery image ${index + 1}`}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;