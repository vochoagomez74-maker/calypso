export default function HistoriaPage() {
  return (
    <main className="min-h-screen bg-[#F7F1E8] text-black">

      {/* ENCABEZADO */}
      <section className="px-6 pt-24 pb-16 text-center">
        <div className="text-[#B08D57] text-4xl mb-6">
          ☾
        </div>

        <p className="text-xs tracking-[0.35em] text-[#B08D57] uppercase mb-4">
          CALYPSO
        </p>

        <h1 className="text-5xl md:text-6xl tracking-[0.12em] uppercase">
          Nuestra historia
        </h1>

        <div className="w-16 h-px bg-[#B08D57] mx-auto my-8" />

        <p className="max-w-xl mx-auto text-sm leading-7 text-black/60">
          Un espacio creado para encontrar belleza en los pequeños rituales
          de todos los días.
        </p>
      </section>

      {/* HISTORIA */}
      <section className="max-w-4xl mx-auto px-6 pb-24">

        <div className="text-center mb-20">
          <div className="text-[#B08D57] text-6xl mb-8">
            ✦
          </div>

          <h2 className="text-3xl tracking-[0.15em] uppercase mb-8">
            El comienzo
          </h2>

          <p className="text-sm leading-8 text-black/60 max-w-2xl mx-auto">
            Calypso nace de una idea sencilla: convertir los momentos
            cotidianos en pequeños rituales. Crear objetos que no solo
            acompañen un espacio, sino que también despierten los sentidos
            y creen una atmósfera especial.
          </p>
        </div>

        {/* DUALIDAD */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">

          <article className="text-center border-t border-[#B08D57]/30 pt-10">
            <div className="text-[#B08D57] text-5xl mb-6">
              ☼
            </div>

            <h3 className="text-2xl tracking-[0.15em] uppercase mb-5">
              Sol
            </h3>

            <p className="text-sm leading-7 text-black/60">
              Representa la energía, la luz y ese impulso de comenzar
              nuevamente. Es la parte de nosotros que busca crear, descubrir
              y avanzar.
            </p>
          </article>

          <article className="text-center border-t border-[#B08D57]/30 pt-10">
            <div className="text-[#B08D57] text-5xl mb-6">
              ☾
            </div>

            <h3 className="text-2xl tracking-[0.15em] uppercase mb-5">
              Luna
            </h3>

            <p className="text-sm leading-7 text-black/60">
              Representa la calma, la introspección y los momentos de pausa.
              Es ese espacio para respirar, observar y volver a nosotros
              mismos.
            </p>
          </article>

        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="border-y border-[#B08D57]/20 py-20 px-6 text-center">

        <p className="text-xs tracking-[0.3em] text-[#B08D57] uppercase mb-6">
          Nuestra esencia
        </p>

        <h2 className="text-3xl md:text-4xl tracking-[0.12em] uppercase mb-8">
          Crear momentos
        </h2>

        <p className="max-w-2xl mx-auto text-sm leading-8 text-black/60">
          En Calypso creemos que un aroma puede cambiar la atmósfera de un
          lugar, una luz puede cambiar el ánimo y un pequeño ritual puede
          convertirse en una forma de conectar contigo.
        </p>

      </section>

      {/* FRASE FINAL */}
      <section className="py-24 px-6 text-center">

        <div className="text-[#B08D57] text-2xl mb-7">
          ☾ ✦ ☼
        </div>

        <p className="text-xl md:text-2xl tracking-[0.08em] italic text-black/70">
          De cada aroma cuenta una historia.
        </p>

        <div className="w-12 h-px bg-[#B08D57] mx-auto mt-8" />

      </section>

    </main>
  );
}