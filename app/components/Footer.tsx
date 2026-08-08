export default function Footer() {
  return (
    <footer className="bg-cream text-ink">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* MARCA */}
        <div className="mb-12">
          <h3 className="font-heading text-xl tracking-[0.25em]">
            CALYPSO
          </h3>

          <p className="text-xs tracking-[0.2em] text-ink/50 mt-2">
            Every scent tells a story.
          </p>

          <div className="flex gap-5 mt-6 text-sm">
            <a href="#" className="hover:text-gold transition-colors">
              Instagram
            </a>

            <a href="#" className="hover:text-gold transition-colors">
              TikTok
            </a>

            <a href="#" className="hover:text-gold transition-colors">
              Facebook
            </a>
          </div>
        </div>

        {/* ENLACES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

          {/* TIENDA */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4">
              Tienda
            </h4>

            <ul className="space-y-2 text-sm text-ink/70">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Todos los productos
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Kits
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Velas
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Jabones
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Inciensos
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Exfoliantes
                </a>
              </li>
            </ul>
          </div>

          {/* CALYPSO */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4">
              Calypso
            </h4>

            <ul className="space-y-2 text-sm text-ink/70">
              <li>
                <a href="/nuestra-historia" className="hover:text-gold transition-colors">
                  Nuestra historia
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Materiales
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Hecho a mano
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gold-light/30">
        <p className="max-w-7xl mx-auto px-6 py-5 text-xs text-ink/50 text-center">
          © Calypso 2026 · Hecho a mano con amor
        </p>
      </div>

    </footer>
  );
}