import { useLanguage } from '../context/LanguageContext';

function Contact() {
  const { t } = useLanguage();

  const businessPhone = '+919842684334';

  const googleMapsUrl =
    'https://www.google.com/maps/place/Rajendran+Enterprises/@9.8311132,77.3066881,891m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b07054ba0a9846b:0x980eae5880303d0d!8m2!3d9.8311132!4d77.309263!16s%2Fg%2F11zfhl_rzy?authuser=0&entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D';

  return (
    <section
      id="contact"
      className="px-5 py-20 sm:px-8 lg:px-16"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text)',
      }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <p
            className="mb-3 text-sm font-bold tracking-[0.2em]"
            style={{ color: 'var(--color-secondary)' }}
          >
            {t.contactLabel}
          </p>

          <h2
            className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl"
            style={{ color: 'var(--color-heading)' }}
          >
            {t.contactTitle}
          </h2>

          <p
            className="mx-auto max-w-2xl leading-7"
            style={{ color: 'var(--color-muted)' }}
          >
            {t.contactDescription}
          </p>
        </div>

        {/* Two contact options */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Call button */}
          <a
            href={`tel:${businessPhone}`}
            className="group flex flex-col items-center rounded-2xl border p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3282B8]/15 text-3xl transition-transform group-hover:scale-110">
              📞
            </div>

            <h3
              className="mb-3 text-xl font-bold"
              style={{ color: 'var(--color-heading)' }}
            >
              {t.phoneTitle}
            </h3>

            <p
              className="mb-6 text-sm leading-6"
              style={{ color: 'var(--color-muted)' }}
            >
              {t.phoneDescription}
            </p>

            <span
              className="mt-auto rounded-lg px-6 py-3 font-semibold text-white transition group-hover:opacity-90"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              {t.callNow} →
            </span>
          </a>

          {/* Google Maps button */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-2xl border p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3282B8]/15 text-3xl transition-transform group-hover:scale-110">
              📍
            </div>

            <h3
              className="mb-3 text-xl font-bold"
              style={{ color: 'var(--color-heading)' }}
            >
              {t.addressTitle}
            </h3>

            <p
              className="mb-6 text-sm leading-6"
              style={{ color: 'var(--color-muted)' }}
            >
              {t.addressDescription}
            </p>

            <span
              className="mt-auto rounded-lg px-6 py-3 font-semibold text-white transition group-hover:opacity-90"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              {t.addressTitle} →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;