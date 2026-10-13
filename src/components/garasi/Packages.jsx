import { Check, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { business, waLink } from "@/data/business";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Perawatan Dasar",
    purpose: "Untuk pemilik kendaraan yang butuh perawatan dasar secara berkala.",
    features: [
      "Pemeriksaan kondisi umum kendaraan",
      "Penggantian oli dasar",
      "Pengecekan komponen utama",
    ],
    featured: false,
  },
  {
    name: "Servis Berkala",
    purpose: "Untuk perawatan rutin sesuai jadwal dan kilometer kendaraan.",
    features: [
      "Pemeriksaan menyeluruh sesuai jadwal servis",
      "Penggantian oli & filter",
      "Pengecekan sistem rem dan kaki-kaki",
      "Pemeriksaan kelistrikan",
    ],
    featured: true,
  },
  {
    name: "Pemeriksaan Menyeluruh",
    purpose: "Untuk memahami kondisi kendaraan secara lengkap sebelum keputusan perbaikan.",
    features: [
      "Diagnostik sistem elektronik",
      "Inspeksi menyeluruh seluruh komponen",
      "Rekomendasi servis tertulis",
    ],
    featured: false,
  },
];

export default function Packages() {
  return (
    <section className="bg-aluminum py-20 text-asphalt md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Paket Perawatan"
            title="Pilih Perawatan yang Sesuai."
            intro="Tiga konsep paket yang dapat disesuaikan. Rekomendasi akhir dan biaya bergantung pada kondisi kendaraan dan pekerjaan yang disepakati."
            titleClassName="text-asphalt"
            introClassName="text-asphalt/70"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 100}
              className={cn(
                "relative flex flex-col p-8",
                p.featured
                  ? "bg-asphalt text-foreground"
                  : "text-asphalt"
              )}
            >
              {p.featured && (
                <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-primary">
                  Direkomendasikan
                </span>
              )}
              <h3 className="mt-2 font-heading text-xl font-semibold">{p.name}</h3>
              <p
                className={cn(
                  "mt-3 text-sm leading-relaxed",
                  p.featured ? "text-foreground/70" : "text-asphalt/70"
                )}
              >
                {p.purpose}
              </p>

              <ul className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span
                      className={cn(
                        p.featured ? "text-foreground/85" : "text-asphalt/80"
                      )}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex-1" />
              <a
                href={waLink(
                  `Halo ${business.name}, saya tertarik dengan paket "${p.name}". Mohon informasinya.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors",
                  p.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-asphalt/20 text-asphalt hover:border-primary hover:text-primary"
                )}
              >
                Tanya via WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10">
          <p className="max-w-2xl text-sm text-asphalt/60">
            Rekomendasi servis dan biaya akhir bergantung pada kondisi kendaraan
            dan pekerjaan yang disepakati. Hubungi bengkel untuk mendapatkan estimasi.
          </p>
        </Reveal>
      </div>
    </section>
  );
}