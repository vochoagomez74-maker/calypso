"use client";

import Link from "next/link";
import { useState } from "react";

function IconBuscar() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1C1B1F" strokeWidth="1.3">
      <circle cx="9" cy="9" r="6" />
      <path d="M17.5 17.5l-4-4" strokeLinecap="round" />
    </svg>
  );
}

function IconCuenta() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1C1B1F" strokeWidth="1.3">
      <circle cx="10" cy="10" r="9" />
      <circle cx="10" cy="8" r="3" />
      <path d="M4.5 16.5c1.2-2.8 3.3-4 5.5-4s4.3 1.2 5.5 4" strokeLinecap="round" />
    </svg>
  );
}

function IconCarrito() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1C1B1F" strokeWidth="1.3">
      <path d="M5.5 7.5h9l-1 9.5h-7l-1-9.5z" strokeLinejoin="round" />
      <path d="M7.5 7.5V6a2.5 2.5 0 0 1 5 0v1.5" />
      <path d="M10 11l1 1-1 1" strokeWidth="0.9" opacity="0.7" />
    </svg>
  );
}

export default function Header() {
  const [busquedaAbierta, setBusquedaAbierta] = useState(false);

  return (
    <header className="w-full bg-cream border-b border-gold-light/30">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/">
          <h2 className="font-heading text-2xl tracking-widest">CALYPSO</h2>
          <p className="text-xs tracking-wide text-ink/60">Every scent tells a story.</p>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm tracking-wide uppercase font-heading">
          <Link href="/tienda" className="hover:text-gold transition-colors">Tienda</Link>
          <Link href="/nuestra-historia" className="hover:text-gold transition-colors">Nuestra Historia</Link>
          <Link href="/coleccion" className="hover:text-gold transition-colors">Colección</Link>
          <Link href="/descubre" className="hover:text-gold transition-colors">Descubre</Link>
          <Link href="/contacto" className="hover:text-gold transition-colors">Contacto</Link>
        </nav>

        <div className="flex gap-5 items-center">
          <button
            aria-label="Buscar"
            onClick={() => setBusquedaAbierta(!busquedaAbierta)}
            className="hover:opacity-60 transition-opacity"
          >
            <IconBuscar />
          </button>
          <Link href="/cuenta" aria-label="Mi cuenta" className="hover:opacity-60 transition-opacity">
            <IconCuenta />
          </Link>
          <Link href="/carrito" aria-label="Carrito" className="hover:opacity-60 transition-opacity">
            <IconCarrito />
          </Link>
        </div>
      </div>

      {busquedaAbierta && (
        <div className="border-t border-gold-light/30 bg-beige/40">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <input
              type="text"
              placeholder="Buscar productos..."
              autoFocus
              className="w-full px-4 py-3 bg-cream border border-gold-light/40 text-sm placeholder:text-ink/40 focus:outline-none focus:border-gold"
            />
          </div>
        </div>
      )}
    </header>
  );
}