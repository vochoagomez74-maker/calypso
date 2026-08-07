const ocasiones = [
  {
    titulo: "Cumpleaños",
    texto: "Un regalo que dice más que las palabras: calidez, cuidado y un momento solo para ella.",
  },
  {
    titulo: "Aniversarios",
    texto: "Celebra el tiempo compartido con un ritual que se enciende cada vez que se recuerda.",
  },
  {
    titulo: "Nuevos comienzos",
    texto: "Una mudanza, un nuevo trabajo, un nuevo capítulo. Acompaña ese inicio con luz propia.",
  },
  {
    titulo: "Solo porque sí",
    texto: "No todos los regalos necesitan una razón. A veces, el gesto es la razón misma.",
  },
];

export default function RegalarPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="font-heading text-4xl uppercase tracking-widest text-center">
        El Arte de Regalar Momentos
      </h1>
      <p className="text-ink/60 text-center mt-4 max-w-xl mx-auto">
        Detalles que conectan y se quedan en el alma. Descubre para qué ocasión es tu Calypso ideal.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-14">
        {ocasiones.map((ocasion) => (
          <div key={ocasion.titulo} className="bg-beige/40 p-8">
            <h3 className="font-heading text-2xl">{ocasion.titulo}</h3>
            <p className="text-sm text-ink/60 mt-3">{ocasion.texto}</p>
          </div>
        ))}
      </div>
    </main>
  );
}