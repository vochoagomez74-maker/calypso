export default function ContactoPage() {
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
          Contacto
        </h1>

        <div className="w-16 h-px bg-[#B08D57] mx-auto my-8" />

        <p className="max-w-xl mx-auto text-sm leading-7 text-black/60">
          ¿Tienes alguna pregunta, quieres conocer más sobre nuestros
          productos o simplemente quieres escribirnos?
        </p>
      </section>

      {/* CONTACTO */}
      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* INFORMACIÓN */}
          <div className="text-center md:text-left">

            <p className="text-xs tracking-[0.3em] text-[#B08D57] uppercase mb-5">
              Escríbenos
            </p>

            <h2 className="text-3xl tracking-[0.12em] uppercase mb-7">
              Hablemos
            </h2>

            <p className="text-sm leading-7 text-black/60 max-w-md">
              En Calypso nos encanta conocer las historias detrás de cada
              persona. Puedes escribirnos para resolver tus dudas o
              simplemente compartir un mensaje.
            </p>

            <div className="mt-10 space-y-5 text-sm text-black/60">

              <div>
                <span className="text-[#B08D57]">✦</span>
                <p className="mt-1">Instagram</p>
                <p className="text-black/40">@calypso</p>
              </div>

              <div>
                <span className="text-[#B08D57]">✦</span>
                <p className="mt-1">Correo</p>
                <p className="text-black/40">
                  hola@calypso.com
                </p>
              </div>

            </div>
          </div>

          {/* FORMULARIO */}
          <form className="space-y-7">

            <div>
              <label
                htmlFor="nombre"
                className="block text-[10px] tracking-[0.25em] uppercase text-[#B08D57] mb-3"
              >
                Nombre
              </label>

              <input
                id="nombre"
                type="text"
                placeholder="Tu nombre"
                className="w-full bg-transparent border-b border-[#B08D57]/40 py-3 text-sm outline-none focus:border-[#B08D57] transition-colors placeholder:text-black/30"
              />
            </div>

            <div>
              <label
                htmlFor="correo"
                className="block text-[10px] tracking-[0.25em] uppercase text-[#B08D57] mb-3"
              >
                Correo
              </label>

              <input
                id="correo"
                type="email"
                placeholder="tu@correo.com"
                className="w-full bg-transparent border-b border-[#B08D57]/40 py-3 text-sm outline-none focus:border-[#B08D57] transition-colors placeholder:text-black/30"
              />
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="block text-[10px] tracking-[0.25em] uppercase text-[#B08D57] mb-3"
              >
                Mensaje
              </label>

              <textarea
                id="mensaje"
                rows={5}
                placeholder="Escribe tu mensaje..."
                className="w-full bg-transparent border-b border-[#B08D57]/40 py-3 text-sm outline-none focus:border-[#B08D57] transition-colors resize-none placeholder:text-black/30"
              />
            </div>

            <button
              type="submit"
              className="border border-[#B08D57] text-[#B08D57] px-8 py-3 text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#B08D57] hover:text-[#F7F1E8]"
            >
              Enviar mensaje
            </button>

          </form>

        </div>
      </section>

      {/* FRASE FINAL */}
      <section className="border-t border-[#B08D57]/20 py-20 px-6 text-center">

        <div className="text-[#B08D57] text-2xl mb-6">
          ☾ ✦ ☼
        </div>

        <p className="text-xl tracking-[0.08em] italic text-black/60">
          Estamos al otro lado.
        </p>

      </section>

    </main>
  );
}