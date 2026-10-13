import { ShieldCheck, HeartHandshake, Eye, Repeat } from "lucide-react";
import Reveal from "./Reveal";

const commitments = [
  {
    icon: Eye,
    title: "Transparansi Pengerjaan",
    desc: "Kami menjelaskan kebutuhan perbaikan sebelum tindakan diambil, bukan setelahnya.",
  },
  {
    icon: ShieldCheck,
    title: "Keselamatan Prioritas",
    desc: "Setiap pengerjaan mengutamakan keselamatan kendaraan dan penggunanya.",
  },
  {
    icon: HeartHandshake,
    title: "Komunikasi yang Mudah",
    desc: "Pertanyaan dan booking dapat dilakukan dengan mudah melalui WhatsApp.",
  },
  {
    icon: Repeat,
    title: "Rekomendasi yang Jujur",
    desc: "Rekomendasi servis diberikan sesuai kondisi kendaraan, bukan untuk kelebihan pekerjaan.",
  },
];

export default function Komitmen() {
  return (
    <section id="keunggulan" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-primary">
                Komitmen Kami
              </span>
            </div>
            <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem]">
              Bukan Janji Manis,
              <br />
              Tapi Cara Kerja yang Jelas.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Daripada menampilkan ulasan yang belum dapat diverifikasi, kami
              menjelaskan komitmen yang menjadi dasar cara kami melayani.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2">
            {commitments.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 90}
                className="border-t border-border/50 py-7 sm:px-6 sm:[&:nth-child(odd)]:pr-8 sm:[&:nth-child(even)]:pl-8 sm:[&:nth-child(even)]:border-l sm:[&:nth-child(even)]:border-border/50"
              >
                <c.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}