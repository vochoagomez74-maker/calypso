import Link from "next/link";

function IconVela() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#B08D57" strokeWidth="1.2">
      <rect x="14" y="14" width="12" height="20" rx="1" />
      <path d="M20 14V9" />
      <path d="M20 9c1.5-1.5 1.5-3 0-5-1.5 2-1.5 3.5 0 5z" fill="#B08D57" stroke="none" />
      <path d="M14 20h12M14 26h12" strokeWidth="0.7" opacity="0.6" />
    </svg>
  );
}

function IconJabon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#B08D57" strokeWidth="1.2">
      <rect x="8" y="15" width="24" height="14" rx="6" />
      <circle cx="14" cy="12" r="1.4" fill="#B08D57" stroke="none" />
      <circle cx="18" cy="9" r="1" fill="#B08D57" stroke="none" />
      <circle cx="22" cy="12" r="1.2" fill="#B08D57" stroke="none" />
      <path d="M14 22h12" strokeWidth="0.7" opacity="0.6" />
    </svg>
  );
}

function IconIncienso() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#B08D57" strokeWidth="1.2">
      <path d="M8 32l20-6" />
      <path d="M26 26l4-1.2" />
      <path d="M12 30.8V17" />
      <path d="M12 17c1.2-1.5 1.2-3 0-5-1.2 2-1.2 3.5 0 5z" fill="#B08D57" stroke="none" />
      <path d="M9 14c1-1 2-1.5 3-1.5s2 .5 3 1.5" strokeWidth="0.7" opacity="0.6" />
    </svg>
  );
}

function IconPortaIncienso() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#B08D57" strokeWidth="1.2">
      <path d="M6 28c8-4 20-4 28 0" strokeLinecap="round" />
      <path d="M20 28V13" />
      <path d="M20 13c1.2-1.5 1.2-3 0-5-1.2 2-1.2 3.5 0 5z" fill="#B08D57" stroke="none" />
      <path d="M17 10c1-1 2-1.5 3-1.5s2 .5 3 1.5" strokeWidth="0.7" opacity="0.6" />
    </svg>
  );
}

function IconExfoliante() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#B08D57" strokeWidth="1.2">
      <path d="M12 15h16v15a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V15z" />
      <path d="M12 15c0-2 1.5-4 4-4h8c2.5 0 4 2 4 4" />
      <path d="M15 11c0-1.5 1-3 2-4M25 11c0-1.5-1-3-2-4" strokeWidth="0.9" />
      <circle cx="17" cy="22" r="0.8" fill="#B08D57" stroke="none" />
      <circle cx="22" cy="25" r="0.8" fill="#B08D57" stroke="none" />
      <circle cx="18" cy="28" r="0.8" fill="#B08D57" stroke="none" />
      <circle cx="24" cy="20" r="0.8" fill="#B08D57" stroke="none" />
    </svg>
  );
}

const categorias = [
  { nombre: "Velas", Icono: IconVela, href: "/coleccion" },
  { nombre: "Jabones", Icono: IconJabon, href: "/coleccion" },
  { nombre: "Inciensos", Icono: IconIncienso, href: "/coleccion" },
  { nombre: "Porta Inciensos", Icono: IconPortaIncienso, href: "/coleccion" },
  { nombre: "Exfoliantes", Icono: IconExfoliante, href: "/coleccion" },
];

export default function Coleccion() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="font-heading text-3xl text-center tracking-widest mb-12">
        NUESTRA COLECCIÓN
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {categorias.map((cat) => (
          <Link
            key={cat.nombre}
            href={cat.href}
            className="flex flex-col items-center gap-3 group"
          >
            <cat.Icono />
            <span className="text-sm tracking-wide uppercase font-heading">{cat.nombre}</span>
            <span className="text-xs text-gold group-hover:text-ink transition-colors">
              Ver colección →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}