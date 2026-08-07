const guias = [
  {
    titulo: "Ritual de la mañana con Sol",
    texto: "Enciende una vela Sol al despertar y dedica 5 minutos de silencio antes de comenzar tu día.",
  },
  {
    titulo: "Ritual nocturno con Luna",
    texto: "Antes de dormir, enciende tu vela Luna y suelta los pensamientos del día en una libreta.",
  },
  {
    titulo: "Ritual de descanso profundo",
    texto: "Combina aroma de lavanda con respiración lenta para preparar tu cuerpo al descanso.",
  },
  {
    titulo: "Ritual de nuevos comienzos",
    texto: "Usa la vela de naranja dulce para marcar el inicio de un proyecto o etapa importante.",
  },
];

export default function GuiasRitualesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="font-heading text-4xl uppercase tracking-widest text-center">Guías de Rituales</h1>
      <p className="text-ink/60 text-center mt-4 max-w-xl mx-auto">
        Pequeños momentos que transforman tu día a día en algo con significado.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-14">
        {guias.map((guia) => (
          <div key={guia.titulo} className="bg-beige/40 p-8">
            <h3 className="font-heading text-2xl">{guia.titulo}</h3>
            <p className="text-sm text-ink/60 mt-3">{guia.texto}</p>
          </div>
        ))}
      </div>
    </main>
  );
}