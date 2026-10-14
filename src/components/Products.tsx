import { useLanguage } from '../context/LanguageContext';

function Products() {
  const { t } = useLanguage();

  // Product content comes from the translation dictionary.
  // Image paths remain unchanged in both languages.
  const products = [
    {
      title: t.pipe5Title,
      image: '/images/5-inch.jpeg',
      description: t.pipe5Description,
    },
    {
      title: t.pipe6Title,
      image: '/images/6-inch.jpeg',
      description: t.pipe6Description,
    },
    {
      title: t.pipe78Title,
      image: '/images/8-inch.webp',
      description: t.pipe78Description,
    },
    {
      title: t.pipe10Title,
      image: '/images/10-inch.jpg',
      description: t.pipe10Description,
    },
  ];

  return (
    <section
      id="products"
      className="px-5 py-20 sm:px-8 lg:px-16"
      style={{
        backgroundColor: 'var(--color-surface)',
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
            {t.productsLabel}
          </p>

          <h2
            className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--color-heading)' }}
          >
            {t.productsTitle}
          </h2>

          <p
            className="mx-auto max-w-2xl leading-7"
            style={{ color: 'var(--color-muted)' }}
          >
            {t.productsDescription}
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.title}
              className="group overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                backgroundColor: 'var(--color-background)',
                borderColor: 'var(--color-border)',
              }}
            >
              {/* Product image */}
              <div className="h-64 overflow-hidden bg-white sm:h-72">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product details */}
              <div className="p-5">
                <h3
                  className="mb-3 text-xl font-bold"
                  style={{ color: 'var(--color-heading)' }}
                >
                  {product.title}
                </h3>

                <p
                  className="min-h-20 text-sm leading-6"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {product.description}
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

export default Products;