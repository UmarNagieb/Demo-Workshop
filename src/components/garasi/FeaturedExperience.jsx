import { Search, Workflow, MessageSquareText } from "lucide-react";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

const highlights = [
  {
    icon: Search,
    title: "Periksa Dulu, Kerja Kemudian",
    desc: "Setiap kendaraan diperiksa untuk memahami kondisinya sebelum tindakan diambil. Tidak ada komponen yang diganti tanpa alasan yang jelas.",
  },
  {
    icon: Workflow,
    title: "Proses yang Terarah",
    desc: "Pengerjaan mengikuti urutan yang sistematis. Setiap langkah punya tujuan, dan Anda tahu di tahap mana kendaraan Anda berada.",
  },
  {
    icon: MessageSquareText,
    title: "Penjelasan Sebelum Persetujuan",
    desc: "Anda mendapat penjelasan tentang apa yang perlu dilakukan dan berapa estimasinya — sebelum pekerjaan dimulai, bukan setelahnya.",
  },
];

export default function FeaturedExperience() {
  return (
    <section id="tentang" className="bg-aluminum py-20 text-asphalt md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Image placeholder */}
          <Reveal className="relative overflow-hidden">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <ImagePlaceholder
                label="Foto tim sedang melakukan pemeriksaan"
                className="border-asphalt/20 bg-asphalt/5 text-asphalt"
              />
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-primary">
                  Cara Kerja Kami
                </span>
              </div>
              <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-asphalt sm:text-4xl md:text-[2.75rem]">
                Detail Kecil,
                <br />
                Perbedaan Besar.
              </h2>
            </Reveal>

            <div className="mt-10">
              {highlights.map((h, i) => (
                <Reveal
                  key={h.title}
                  delay={i * 100}
                  className="group flex gap-5 border-t border-asphalt/10 py-6 last:border-b"
                >
                  <h.icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-asphalt">
                      {h.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-asphalt/70">
                      {h.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}