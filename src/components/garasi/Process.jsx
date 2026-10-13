import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    no: "01",
    title: "Booking",
    desc: "Hubungi bengkel, sebutkan kendaraan dan kebutuhan servis. Tim kami bantu menjadwalkan.",
  },
  {
    no: "02",
    title: "Pemeriksaan",
    desc: "Kendaraan diperiksa untuk memahami kondisi dan menentukan apa yang perlu dilakukan.",
  },
  {
    no: "03",
    title: "Konfirmasi",
    desc: "Anda mendapat penjelasan rekomendasi pekerjaan dan estimasi biaya sebelum disetujui.",
  },
  {
    no: "04",
    title: "Pengerjaan",
    desc: "Servis dilakukan sesuai pekerjaan yang telah disepakati.",
  },
];

export default function Process() {
  return (
    <section className="bg-asphalt-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Proses Servis"
            title="Dari Booking hingga Selesai."
            intro="Setiap tahap dirancang agar Anda tahu apa yang terjadi pada kendaraan Anda."
          />
        </Reveal>

        {/* Desktop horizontal timeline */}
        <div className="mt-16 hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-7 h-px bg-border" />
            <ol className="grid grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.no}
                  delay={i * 100}
                  className="relative"
                >
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-asphalt-soft font-mono-tech text-sm font-semibold text-primary">
                    {s.no}
                  </span>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <ol className="mt-12 space-y-8 md:hidden">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.no} delay={i * 80} className="relative pl-16">
              <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-asphalt-soft font-mono-tech text-xs font-semibold text-primary">
                {s.no}
              </span>
              {i < steps.length - 1 && (
                <span className="absolute left-6 top-12 h-[calc(100%-1rem)] w-px bg-border" />
              )}
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}