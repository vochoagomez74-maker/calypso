export default function Newsletter() {
  return (
    <section className="bg-beige border-t border-gold-light/30">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-heading text-2xl">Sé parte del ritual</h3>
          <p className="text-sm text-ink/60 mt-1">
            Recibe antes que nadie nuestras novedades, lanzamientos e inspiración para tus rituales.
          </p>
        </div>

        <form className="flex w-full md:w-auto gap-3">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="flex-1 md:w-72 px-4 py-3 bg-cream border border-gold-light/40 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold"
          />
          <button
            type="submit"
            className="bg-ink text-cream px-6 py-3 text-sm tracking-wide uppercase hover:bg-gold transition-colors whitespace-nowrap"
          >
            Unirme
          </button>
        </form>
      </div>
    </section>
  );
}