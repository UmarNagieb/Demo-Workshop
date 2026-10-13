import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { business } from "@/data/business";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Apakah bengkel melayani mobil dan motor?",
    a: "Ya. GARASI PRIME melayani servis untuk mobil dan motor, dengan layanan yang disesuaikan untuk masing-masing jenis kendaraan.",
  },
  {
    q: "Bagaimana cara melakukan booking?",
    a: "Isi formulir di bagian Kontak atau hubungi langsung via WhatsApp. Sebutkan jenis kendaraan dan kebutuhan servis Anda — tim kami akan membantu menjadwalkan kunjungan.",
  },
  {
    q: "Apakah biaya servis bisa diketahui sebelumnya?",
    a: "Setelah pemeriksaan, Anda mendapat penjelasan rekomendasi pekerjaan dan estimasi biaya sebelum pengerjaan disetujui. Biaya akhir bergantung pada kondisi kendaraan dan pekerjaan yang disepakati.",
  },
  {
    q: "Apakah saya harus booking terlebih dahulu?",
    a: "Booking sangat disarankan agar layanan dapat dipersiapkan dan dijadwalkan dengan baik. Hubungi bengkel untuk mengecek ketersediaan waktu.",
  },
  {
    q: "Bagaimana jika saya belum tahu kerusakan kendaraan?",
    a: "Tim bengkel dapat membantu memeriksa kendaraan Anda, kemudian menjelaskan temuan dan rekomendasi servis sebelum tindakan diambil.",
  },
  {
    q: "Bagaimana cara menghubungi bengkel?",
    a: `Hubungi kami via WhatsApp di ${business.phoneDisplay} atau gunakan formulir kontak di halaman ini.`,
  },
];

function Item({ faq, open, onToggle }) {
  return (
    <div className="border-b border-asphalt/15">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-6 py-5 text-left"
        >
          <span className="font-heading text-base font-semibold text-asphalt sm:text-lg">
            {faq.q}
          </span>
          <span
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors",
              open
                ? "border-primary bg-primary text-primary-foreground"
                : "border-asphalt/25 text-asphalt"
            )}
          >
            {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </span>
        </button>
      </h3>
      <div
        className={cn(
          "grid transition-all duration-500 ease-out",
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-12 text-sm leading-relaxed text-asphalt/70 sm:text-base">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="bg-aluminum py-20 text-asphalt md:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Pertanyaan yang Sering Diajukan."
            intro="Jawaban singkat untuk membantu Anda mempersiapkan kunjungan servis."
            align="center"
            titleClassName="text-asphalt"
            introClassName="text-asphalt/70"
          />
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div className="border-t border-asphalt/15">
            {faqs.map((faq, i) => (
              <Item
                key={faq.q}
                faq={faq}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}