"use client";

import Link from "next/link";
import { useState } from "react";

function IconBuscar() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function IconCarrito() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </svg>
  );
}

export default function Header() {
  const [busquedaAbierta, setBusquedaAbierta] = useState(false);

  return (
    <header className="border-b border-gold-light/30 bg-cream">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex flex-col">
          <span className="font-heading text-xl tracking-[0.25em]">
            CALYPSO
          </span>

          <span className="text-[9px] tracking-[0.2em] text-ink/50 mt-1">
            Every scent tells a story.
          </span>
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex gap-8 text-sm tracking-wide uppercase font-heading">
          <Link
            href="/tienda"
            className="hover:text-gold transition-colors"
          >
            Tienda
          </Link>

          <Link
            href="/nuestra-historia"
            className="hover:text-gold transition-colors"
          >
            Nuestra Historia
          </Link>

          <Link
            href="/coleccion"
            className="hover:text-gold transition-colors"
          >
            Colección
          </Link>

          <Link
            href="/contacto"
            className="hover:text-gold transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* ICONOS */}
        <div className="flex gap-5 items-center">

          {/* BUSCAR */}
          <button
            aria-label="Buscar"
            onClick={() => setBusquedaAbierta(!busquedaAbierta)}
            className="hover:opacity-60 transition-opacity"
          >
            <IconBuscar />
          </button>

          {/* CARRITO */}
          <Link
            href="/carrito"
            aria-label="Carrito"
            className="hover:opacity-60 transition-opacity"
          >
            <IconCarrito />
          </Link>

        </div>
      </div>

      {/* BUSCADOR */}
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