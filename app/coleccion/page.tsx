const productos = [
  "Velas",
  "Inciensos",
  "Porta inciensos",
  "Jabones",
  "Exfoliantes",
];

export default function ColeccionPage() {
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
          Sol y Luna
        </h1>

        <div className="w-16 h-px bg-[#B08D57] mx-auto my-8" />

        <p className="max-w-xl mx-auto text-sm leading-7 text-black/60">
          Una colección inspirada en la dualidad de la luz y la oscuridad,
          el día y la noche, la energía y la calma.
        </p>
      </section>

      {/* SOL Y LUNA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">

          {/* SOL */}
          <article className="text-center border-t border-[#B08D57]/30 pt-12">

            <div className="text-[#B08D57] text-7xl font-light mb-8">
              ☼
            </div>

            <p className="text-xs tracking-[0.3em] text-[#B08D57] uppercase mb-4">
              Energía · Luz · Calidez
            </p>

            <h2 className="text-4xl tracking-[0.15em] uppercase mb-6">
              Sol
            </h2>

            <p className="max-w-md mx-auto text-sm leading-7 text-black/60 mb-8">
              Inspirado en la luz que despierta los sentidos y en la energía
              de comenzar un nuevo día.
            </p>

            {/* AROMAS */}
            <div className="mb-10">
              <p className="text-[10px] tracking-[0.3em] text-[#B08D57] uppercase mb-5">
                Aromas
              </p>

              <div className="flex justify-center gap-10 text-sm text-black/65">
                <span>✦ Naranja dulce</span>
                <span>✦ Vainilla</span>
              </div>
            </div>

            {/* PRODUCTOS */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
              {productos.map((producto) => (
                <div
                  key={producto}
                  className="border border-[#B08D57]/25 py-4 text-xs tracking-widest uppercase text-black/65"
                >
                  {producto}
                </div>
              ))}
            </div>

          </article>

          {/* LUNA */}
          <article className="text-center border-t border-[#B08D57]/30 pt-12">

            <div className="text-[#B08D57] text-7xl font-light mb-8">
              ☾
            </div>

            <p className="text-xs tracking-[0.3em] text-[#B08D57] uppercase mb-4">
              Calma · Noche · Introspección
            </p>

            <h2 className="text-4xl tracking-[0.15em] uppercase mb-6">
              Luna
            </h2>

            <p className="max-w-md mx-auto text-sm leading-7 text-black/60 mb-8">
              Inspirada en la calma de la noche y en esos momentos en los
              que el mundo parece quedarse en silencio.
            </p>

            {/* AROMAS */}
            <div className="mb-10">
              <p className="text-[10px] tracking-[0.3em] text-[#B08D57] uppercase mb-5">
                Aromas
              </p>

              <div className="flex justify-center gap-8 text-sm text-black/65">
                <span>✦ Lavanda</span>
                <span>✦ Cedro</span>
                <span>✦ Rosa</span>
              </div>
            </div>

            {/* PRODUCTOS */}
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
              {productos.map((producto) => (
                <div
                  key={producto}
                  className="border border-[#B08D57]/25 py-4 text-xs tracking-widest uppercase text-black/65"
                >
                  {producto}
                </div>
              ))}
            </div>

          </article>

        </div>
      </section>

      {/* NUESTRA HISTORIA */}
      <section className="border-t border-[#B08D57]/20 py-20 px-6 text-center">

        <div className="text-[#B08D57] text-2xl mb-6">
          ☾ ✦ ☼
        </div>

        <h2 className="text-2xl tracking-[0.15em] uppercase mb-6">
          Nuestra historia
        </h2>

        <p className="max-w-2xl mx-auto text-sm leading-8 text-black/60">
          Sol y Luna nace de la idea de encontrar belleza en los contrastes.
          Cada aroma, cada objeto y cada pequeño ritual busca crear un espacio
          para conectar contigo mismo y con aquello que te rodea.
        </p>

      </section>

    </main>
  );
}