import Link from "next/link";

export default function Kits() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="font-heading text-3xl text-center tracking-widest mb-10">KITS</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-beige/50 p-10 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-2xl">Kit Sol</h3>
            <p className="text-sm text-ink/60 mt-3 max-w-xs">
              Energía, calidez y luz para tus días.
            </p>
          </div>
          <Link href="/coleccion" className="mt-8 text-xs uppercase tracking-widest text-gold font-heading">
            Ver Kit →
          </Link>
        </div>

        <div className="bg-beige/50 p-10 flex flex-col justify-between">
          <div>
            <h3 className="font-heading text-2xl">Kit Luna</h3>
            <p className="text-sm text-ink/60 mt-3 max-w-xs">
              Calma, equilibrio y serenidad para tus noches.
            </p>
          </div>
          <Link href="/coleccion" className="mt-8 text-xs uppercase tracking-widest text-gold font-heading">
            Ver Kit →
          </Link>
        </div>
      </div>
    </section>
  );
}