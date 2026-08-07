const aromas = [
  {
    nombre: "Naranja dulce",
    beneficio: "Energizante y alegre. Ideal para las mañanas, ayuda a despertar los sentidos y llenar el espacio de vitalidad.",
  },
  {
    nombre: "Vainilla",
    beneficio: "Cálida y reconfortante. Crea una sensación de hogar y bienestar, perfecta para momentos de calma.",
  },
  {
    nombre: "Lavanda",
    beneficio: "Relajante por excelencia. Ayuda a reducir el estrés y prepara la mente para un descanso profundo.",
  },
  {
    nombre: "Cedro",
    beneficio: "Terroso y estable. Conecta con la naturaleza y aporta una sensación de equilibrio y enraizamiento.",
  },
  {
    nombre: "Rosa",
    beneficio: "Suave y emocional. Favorece la autocompasión y el amor propio, ideal para rituales de introspección.",
  },
];

export default function AromasPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="font-heading text-4xl uppercase tracking-widest text-center">
        Aromas que transforman tu espacio
      </h1>
      <p className="text-ink/60 text-center mt-4 max-w-xl mx-auto">
        Cada aroma tiene un propósito. Descubre cómo pueden acompañar tus rituales diarios.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-14">
        {aromas.map((aroma) => (
          <div key={aroma.nombre} className="bg-beige/40 p-8">
            <h3 className="font-heading text-2xl">{aroma.nombre}</h3>
            <p className="text-sm text-ink/60 mt-3">{aroma.beneficio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}