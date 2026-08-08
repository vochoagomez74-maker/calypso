const aromasSol = [
  {
    nombre: "Naranja dulce",
    significado: "Energía y vitalidad",
    simbolo: "☼",
  },
  {
    nombre: "Vainilla",
    significado: "Calidez y dulzura",
    simbolo: "✦",
  },
];

const aromasLuna = [
  {
    nombre: "Lavanda",
    significado: "Calma y serenidad",
    simbolo: "☾",
  },
  {
    nombre: "Cedro",
    significado: "Profundidad y conexión",
    simbolo: "✧",
  },
  {
    nombre: "Rosa",
    significado: "Suavidad y sensibilidad",
    simbolo: "◇",
  },
];

const rituales = [
  {
    nombre: "Ritual de mañana",
    simbolo: "☼",
    texto:
      "Comienza el día lentamente. Enciende una vela, respira profundo y deja que la luz marque el comienzo de algo nuevo.",
  },
  {
    nombre: "Ritual de noche",
    simbolo: "☾",
    texto:
      "Baja las luces, enciende un aroma suave y deja que el día termine lentamente. Un momento para volver a ti.",
  },
  {
    nombre: "Momento de pausa",
    simbolo: "✦",
    texto:
      "A veces no necesitas hacer más. Solo detenerte, respirar y crear un pequeño espacio para estar presente.",
  },
];

export default function DescubrePage() {
  return (
    <main className="min-h-screen bg-[#F7F1E8] text-black">

      {/* ENCABEZADO */}
      <section className="px-6 pt-24 pb-16 text-center">
        <div className="text-[#B08D57] text-4xl mb-6">
          ✦
        </div>

        <p className="text-xs tracking-[0.35em] text-[#B08D57] uppercase mb-4">
          CALYPSO
        </p>

        <h1 className="text-5xl md:text-6xl tracking-[0.12em] uppercase">
          Descubre
        </h1>

        <div className="w-16 h-px bg-[#B08D57] mx-auto my-8" />

        <p className="max-w-xl mx-auto text-sm leading-7 text-black/60">
          Un espacio para descubrir aromas, pequeños rituales y la esencia
          detrás de Calypso.
        </p>
      </section>

      {/* SOL Y LUNA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">

          {/* SOL */}
          <article className="text-center border-t border-[#B08D57]/30 pt-12">

            <div className="text-[#B08D57] text-6xl mb-6">
              ☼
            </div>

            <p className="text-[10px] tracking-[0.3em] text-[#B08D57] uppercase mb-4">
              Energía · Luz · Calidez
            </p>

            <h2 className="text-3xl tracking-[0.15em] uppercase mb-8">
              Sol
            </h2>

            <div className="space-y-6">
              {aromasSol.map((aroma) => (
                <div
                  key={aroma.nombre}
                  className="group border-b border-[#B08D57]/20 pb-5"
                >
                  <div className="text-[#B08D57] text-xl mb-2">
                    {aroma.simbolo}
                  </div>

                  <h3 className="text-lg tracking-widest uppercase">
                    {aroma.nombre}
                  </h3>

                  <p className="text-sm text-black/50 mt-2">
                    {aroma.significado}
                  </p>
                </div>
              ))}
            </div>

          </article>

          {/* LUNA */}
          <article className="text-center border-t border-[#B08D57]/30 pt-12">

            <div className="text-[#B08D57] text-6xl mb-6">
              ☾
            </div>

            <p className="text-[10px] tracking-[0.3em] text-[#B08D57] uppercase mb-4">
              Calma · Noche · Introspección
            </p>

            <h2 className="text-3xl tracking-[0.15em] uppercase mb-8">
              Luna
            </h2>

            <div className="space-y-6">
              {aromasLuna.map((aroma) => (
                <div
                  key={aroma.nombre}
                  className="group border-b border-[#B08D57]/20 pb-5"
                >
                  <div className="text-[#B08D57] text-xl mb-2">
                    {aroma.simbolo}
                  </div>

                  <h3 className="text-lg tracking-widest uppercase">
                    {aroma.nombre}
                  </h3>

                  <p className="text-sm text-black/50 mt-2">
                    {aroma.significado}
                  </p>
                </div>
              ))}
            </div>

          </article>

        </div>
      </section>

      {/* RITUALES */}
      <section className="border-y border-[#B08D57]/20 py-20 px-6">

        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.3em] text-[#B08D57] uppercase mb-4">
            Pequeños momentos
          </p>

          <h2 className="text-3xl md:text-4xl tracking-[0.12em] uppercase">
            Pequeños rituales
          </h2>

          <div className="w-12 h-px bg-[#B08D57] mx-auto mt-7" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {rituales.map((ritual) => (
            <article
              key={ritual.nombre}
              className="text-center px-6"
            >
              <div className="text-[#B08D57] text-4xl mb-6">
                {ritual.simbolo}
              </div>

              <h3 className="text-xl tracking-[0.12em] uppercase mb-5">
                {ritual.nombre}
              </h3>

              <p className="text-sm leading-7 text-black/55">
                {ritual.texto}
              </p>
            </article>
          ))}

        </div>
      </section>

      {/* FRASES */}
      <section className="py-24 px-6 text-center">

        <p className="text-[10px] tracking-[0.3em] text-[#B08D57] uppercase mb-8">
          Palabras de Calypso
        </p>

        <div className="max-w-3xl mx-auto space-y-12">

          <p className="text-2xl md:text-3xl tracking-wide italic text-black/65">
            “Hay belleza en volver a ti.”
          </p>

          <div className="w-8 h-px bg-[#B08D57] mx-auto" />

          <p className="text-2xl md:text-3xl tracking-wide italic text-black/65">
            “La noche también tiene su propia luz.”
          </p>

          <div className="w-8 h-px bg-[#B08D57] mx-auto" />

          <p className="text-2xl md:text-3xl tracking-wide italic text-black/65">
            “Haz de lo cotidiano un ritual.”
          </p>

        </div>
      </section>

      {/* CIERRE */}
      <section className="border-t border-[#B08D57]/20 py-20 px-6 text-center">

        <div className="text-[#B08D57] text-2xl mb-6">
          ☾ ✦ ☼
        </div>

        <h2 className="text-2xl tracking-[0.15em] uppercase mb-5">
          Descubre tu propio ritual
        </h2>

        <p className="text-sm text-black/50 max-w-md mx-auto">
          Encuentra aquello que hace especial tus pequeños momentos.
        </p>

      </section>

    </main>
  );
}