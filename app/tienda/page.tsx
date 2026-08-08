import Link from "next/link";

const productos = [
  {
    categoria: "VELAS",
    nombre: "Luz del Sol",
    descripcion:
      "Una vela que representa la energía, la calidez y la luz.",
    simbolo: "☀",
  },
  {
    categoria: "VELAS",
    nombre: "Luna",
    descripcion:
      "Una vela inspirada en la calma y la magia de la noche.",
    simbolo: "☾",
  },
  {
    categoria: "INCIENSOS",
    nombre: "Aromas de Calypso",
    descripcion:
      "Aromas para transformar el ambiente y acompañar tus momentos.",
    simbolo: "✧",
  },
  {
    categoria: "PORTA INCIENSOS",
    nombre: "Guardián",
    descripcion:
      "Una pieza para acompañar tus inciensos y tus rituales.",
    simbolo: "◌",
  },
  {
    categoria: "JABONES",
    nombre: "Ritual",
    descripcion:
      "Jabones hechos para convertir lo cotidiano en un pequeño ritual.",
    simbolo: "◇",
  },
  {
    categoria: "EXFOLIANTES",
    nombre: "Renacer",
    descripcion:
      "Un exfoliante para acompañar tus momentos de cuidado personal.",
    simbolo: "✦",
  },
];

export default function TiendaPage() {
  return (
    <main className="min-h-screen bg-[#F7F1E8] text-black">

      {/* ENCABEZADO */}
      <section className="px-6 pt-24 pb-16 text-center">
        <div className="text-[#B08D57] text-4xl mb-6">
          ☼
        </div>

        <p className="text-xs tracking-[0.35em] text-[#B08D57] uppercase mb-4">
          CALYPSO
        </p>

        <h1 className="text-5xl md:text-6xl tracking-[0.12em] uppercase">
          Tienda
        </h1>

        <div className="w-16 h-px bg-[#B08D57] mx-auto my-8" />

        <p className="max-w-xl mx-auto text-sm leading-7 text-black/60">
          Objetos, aromas y pequeños rituales creados para transformar
          los momentos cotidianos en algo especial.
        </p>
      </section>

      {/* PRODUCTOS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">

          {productos.map((producto) => (
            <article
              key={producto.nombre}
              className="group text-center"
            >

              {/* SÍMBOLO */}
              <div className="mx-auto mb-7 w-48 h-48 rounded-full border border-[#B08D57]/40 flex items-center justify-center transition-all duration-500 group-hover:border-[#B08D57] group-hover:scale-[1.02]">
                <span className="text-5xl text-[#B08D57] font-light">
                  {producto.simbolo}
                </span>
              </div>

              <p className="text-[10px] tracking-[0.3em] text-[#B08D57] uppercase mb-3">
                {producto.categoria}
              </p>

              <h2 className="text-2xl tracking-[0.12em] uppercase mb-4">
                {producto.nombre}
              </h2>

              <p className="text-sm leading-6 text-black/55 max-w-xs mx-auto">
                {producto.descripcion}
              </p>

              <div className="mt-6 w-8 h-px bg-[#B08D57]/50 mx-auto" />

            </article>
          ))}

        </div>
      </section>

      {/* FRASE FINAL */}
      <section className="border-t border-[#B08D57]/20 py-20 px-6 text-center">

        <div className="text-[#B08D57] text-2xl mb-5">
          ☾ ✦ ☼
        </div>

        <p className="max-w-lg mx-auto text-sm italic leading-7 text-black/55">
          De cada aroma cuenta una historia.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 border border-[#B08D57] text-[#B08D57] px-7 py-3 text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#B08D57] hover:text-[#F7F1E8]"
        >
          Volver a Calypso
        </Link>

      </section>

    </main>
  );
}