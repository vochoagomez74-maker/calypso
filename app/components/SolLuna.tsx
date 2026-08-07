import Link from "next/link";

function IconNaranja() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#B08D57" strokeWidth="1.2">
      <circle cx="14" cy="14" r="9" />
      <path d="M14 5v18M5 14h18M7.6 7.6l12.8 12.8M20.4 7.6L7.6 20.4" strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}

function IconVainilla() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#B08D57" strokeWidth="1.2">
      <path d="M14 4c3 3 3 7 0 10-3-3-3-7 0-10z" />
      <path d="M14 14c3 3 3 7 0 10-3-3-3-7 0-10z" />
      <path d="M4 14c3-3 7-3 10 0-3 3-7 3-10 0z" />
      <path d="M14 14c3-3 7-3 10 0-3 3-7 3-10 0z" />
      <circle cx="14" cy="14" r="1.4" fill="#B08D57" stroke="none" />
    </svg>
  );
}

function IconLavanda() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#B08D57" strokeWidth="1.2">
      <path d="M14 24V6" />
      <path d="M14 8l-4-3M14 8l4-3M14 12l-4-3M14 12l4-3M14 16l-4-3M14 16l4-3" strokeLinecap="round" />
      <circle cx="14" cy="5" r="1.2" fill="#B08D57" stroke="none" />
    </svg>
  );
}

function IconCedro() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#B08D57" strokeWidth="1.2">
      <path d="M14 3l5 7h-3l4 6h-3l4 6H7l4-6H8l4-6H9z" strokeLinejoin="round" />
      <path d="M14 22v3" />
    </svg>
  );
}

function IconRosa() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#B08D57" strokeWidth="1.2">
      <circle cx="14" cy="11" r="6" />
      <circle cx="14" cy="11" r="2.6" />
      <path d="M14 17v8M14 21c-2 0-3.5 1.5-3.5 3.5M14 21c2 0 3.5 1.5 3.5 3.5" strokeLinecap="round" />
    </svg>
  );
}

export default function SolLuna() {
  return (
    <section className="bg-beige/40 border-y border-gold-light/30">
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* SOL */}
          <div className="text-center flex flex-col items-center">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="#B08D57" strokeWidth="1.2">
              <circle cx="28" cy="28" r="12" />
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * Math.PI) / 4;
                const x1 = 28 + Math.cos(angle) * 18;
                const y1 = 28 + Math.sin(angle) * 18;
                const x2 = 28 + Math.cos(angle) * 25;
                const y2 = 28 + Math.sin(angle) * 25;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
              })}
            </svg>

            <h3 className="font-heading text-3xl tracking-widest mt-4">SOL</h3>

            <p className="text-sm text-ink/60 mt-4 max-w-xs">
              La luz despierta los sentidos. Cada amanecer trae consigo nuevas oportunidades para comenzar de nuevo.
            </p>

            <div className="flex gap-8 mt-6 text-sm text-ink/70">
              <div className="flex flex-col items-center gap-2">
                <IconNaranja />
                <span>Naranja dulce</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <IconVainilla />
                <span>Vainilla</span>
              </div>
            </div>

            <Link
              href="/coleccion"
              className="mt-8 border border-gold text-gold px-6 py-3 text-xs tracking-widest uppercase font-heading hover:bg-gold hover:text-cream transition-colors"
            >
              Explorar Sol →
            </Link>
          </div>

          {/* LUNA */}
          <div className="text-center flex flex-col items-center">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="#B08D57" strokeWidth="1.2">
              <path d="M36 12a18 18 0 1 0 0 32 22 22 0 0 1 0-32z" />
            </svg>

            <h3 className="font-heading text-3xl tracking-widest mt-4">LUNA</h3>

            <p className="text-sm text-ink/60 mt-4 max-w-xs">
              Cuando el día termina, llega el momento de bajar el ritmo, respirar y volver a ti.
            </p>

            <div className="flex gap-8 mt-6 text-sm text-ink/70">
              <div className="flex flex-col items-center gap-2">
                <IconLavanda />
                <span>Lavanda</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <IconCedro />
                <span>Cedro</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <IconRosa />
                <span>Rosa</span>
              </div>
            </div>

            <Link
              href="/coleccion"
              className="mt-8 border border-gold text-gold px-6 py-3 text-xs tracking-widest uppercase font-heading hover:bg-gold hover:text-cream transition-colors"
            >
              Explorar Luna →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}