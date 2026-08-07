import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="font-heading text-5xl md:text-6xl leading-tight">
          Rituales que nacen del sol y florecen en la luna
        </h1>
        <p className="mt-6 text-ink/70 max-w-md">
          Aromas que transforman lo cotidiano en momentos de calma, belleza y significado.
        </p>
        <Link
          href="/coleccion"
          className="inline-block mt-8 bg-ink text-cream px-8 py-4 tracking-wide uppercase text-sm font-heading hover:bg-gold transition-colors"
        >
          Descubrir la Colección
        </Link>
      </div>

      <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
        <Image
          src="/hero-velas.png"
          alt="Vela sol y vela luna Calypso"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}