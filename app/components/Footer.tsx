export default function Footer() {
  return (
    <footer className="bg-cream border-t border-gold-light/30">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="font-heading text-2xl tracking-widest">CALYPSO</h2>
          <p className="text-xs text-ink/60 mt-1">Every scent tells a story.</p>
          <div className="flex gap-4 mt-4 text-sm text-ink/60">
            <a href="https://instagram.com/calypso_ceremony" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
            <span className="text-ink/30 cursor-not-allowed" title="Próximamente">TikTok</span>
            <a href="https://facebook.com/calypsoceremony" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Facebook</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase mb-4">Tienda</h4>
          <ul className="space-y-2 text-sm text-ink/70">
            <li><a href="#" className="hover:text-gold transition-colors">Todos los productos</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Kits</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Velas</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Jabones</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Inciensos</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Exfoliantes</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase mb-4">Calypso</h4>
          <ul className="space-y-2 text-sm text-ink/70">
            <li><a href="#" className="hover:text-gold transition-colors">Nuestra historia</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Materiales</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Hecho a mano</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Descubre</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase mb-4">Ayuda</h4>
          <ul className="space-y-2 text-sm text-ink/70">
            <li><a href="#" className="hover:text-gold transition-colors">Preguntas frecuentes</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Envíos y entregas</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Cambios y devoluciones</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Términos y condiciones</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold-light/30">
        <p className="max-w-7xl mx-auto px-6 py-5 text-xs text-ink/50 text-center">
          © Calypso 2026 · Hecho a mano con amor
        </p>
      </div>
    </footer>
  );
}