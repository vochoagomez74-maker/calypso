import Link from "next/link";

const items = [
  {
    titulo: "Guías de rituales",
    texto: "Inspírate y crea rituales que transforman tu día a día.",
    href: "/guias-rituales",
  },
  {
    titulo: "Aromas que transforman tu espacio",
    texto: "Conoce el poder de cada aroma en tu bienestar.",
    href: "/aromas",
  },
  {
    titulo: "El arte de regalar momentos",
    texto: "Detalles que conectan y se quedan en el alma.",
    href: "/regalar",
  },
];

export default function Descubre() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="font-heading text-3xl text-center tracking-widest mb-10">DESCUBRE</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item) => (
          <div key={item.titulo}>
            <h3 className="font-heading text-lg">{item.titulo}</h3>
            <p className="text-sm text-ink/60 mt-2">{item.texto}</p>
            <Link href={item.href} className="text-xs uppercase tracking-widest text-gold font-heading mt-4 inline-block">
              Leer más →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}