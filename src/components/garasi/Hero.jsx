import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { business, waLink } from "@/data/business";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const scrollToServices = () => {
    document
      .querySelector("#layanan")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="beranda"
      className="relative min-h-[100svh] w-full overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center gap-12 px-5 pt-24 pb-20 sm:px-8 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono-tech text-xs uppercase tracking-[0.3em] text-primary">
              {business.tagline}
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`mt-6 font-heading text-[2.6rem] font-bold leading-[1.04] tracking-tight text-balance transition-all duration-700 delay-75 sm:text-6xl md:text-[4.5rem] ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Servis Mobil &amp; Motor,
            <br />
            <span className="text-primary">Dikerjakan dengan</span> Tepat.
          </h1>

          {/* Supporting text */}
          <p
            className={`mt-7 max-w-xl text-base leading-relaxed text-foreground/70 transition-all duration-700 delay-150 sm:text-lg ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Sebelum komponen diganti, kendaraan diperiksa dulu. Anda mendapat
            penjelasan apa yang perlu dilakukan dan mengapa — baru kemudian
            pengerjaan dimulai.
          </p>

          {/* CTAs */}
          <div
            className={`mt-9 flex flex-col gap-3 transition-all duration-700 delay-200 sm:flex-row sm:items-center ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <a
              href={waLink(
                `Halo ${business.name}, saya ingin melakukan booking servis.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
            >
              Booking Servis
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              Lihat Layanan
            </button>
          </div>
        </div>
        <div className="aspect-[4/3] w-full max-w-2xl lg:aspect-[4/5]">
          <ImagePlaceholder label="Foto area bengkel GARASI PRIME" />
        </div>
      </div>

      {/* Scroll cue */}
      <button
        type="button"
        onClick={scrollToServices}
        aria-label="Gulir ke bawah"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-foreground/40 transition-colors hover:text-primary md:flex"
      >
        <span className="font-mono-tech text-[0.65rem] uppercase tracking-[0.25em]">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
}