"use client";

import { useState } from "react";

export default function CuentaPage() {
  const [modo, setModo] = useState<"login" | "registro">("login");
  const esLogin = modo === "login";

  return (
    <main className="max-w-md mx-auto px-6 py-20">
      <div className="text-center mb-10">
        <h1 className="font-heading text-4xl uppercase tracking-widest">Mi Cuenta</h1>
        <p className="text-ink/60 mt-3 text-sm">Bienvenida a tu cuenta Calypso</p>
      </div>

      <div className="flex border-b border-gold-light/30 mb-8">
        <button onClick={() => setModo("login")} className="flex-1 pb-3 text-sm uppercase font-heading">Iniciar Sesión</button>
        <button onClick={() => setModo("registro")} className="flex-1 pb-3 text-sm uppercase font-heading">Crear Cuenta</button>
      </div>

      <form className="flex flex-col gap-4">
        {!esLogin && (
          <div>
            <label className="text-xs uppercase text-ink/60">Nombre completo</label>
            <input type="text" placeholder="Tu nombre" className="w-full mt-2 px-4 py-3 bg-beige/40 border border-gold-light/40 text-sm" />
          </div>
        )}

        <div>
          <label className="text-xs uppercase text-ink/60">Correo electrónico</label>
          <input type="email" placeholder="tucorreo@ejemplo.com" className="w-full mt-2 px-4 py-3 bg-beige/40 border border-gold-light/40 text-sm" />
        </div>

        <div>
          <label className="text-xs uppercase text-ink/60">Contraseña</label>
          <input type="password" placeholder="clave" className="w-full mt-2 px-4 py-3 bg-beige/40 border border-gold-light/40 text-sm" />
        </div>

        {!esLogin && (
          <div>
            <label className="text-xs uppercase text-ink/60">Confirmar contraseña</label>
            <input type="password" placeholder="clave" className="w-full mt-2 px-4 py-3 bg-beige/40 border border-gold-light/40 text-sm" />
          </div>
        )}
<button type="submit" className="mt-4 bg-ink text-cream px-8 py-4 uppercase text-sm font-heading">
          {esLogin ? "Iniciar Sesión" : "Crear Cuenta"}
        </button>
      </form>

      <p className="text-center text-xs text-ink/50 mt-8">
        {esLogin ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
        <button onClick={() => setModo(esLogin ? "registro" : "login")} className="text-gold underline">
          {esLogin ? "Regístrate aquí" : "Inicia sesión"}
        </button>
      </p>
    </main>
  );
}