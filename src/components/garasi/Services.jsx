import { useState } from "react";
import {
  CalendarClock,
  Gauge,
  Droplet,
  Disc3,
  BatteryCharging,
  Snowflake,
  ScanLine,
  ClipboardList,
  Cog,
  Fuel,
  PackageOpen,
  Search,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { business, waLink } from "@/data/business";
import ImagePlaceholder from "./ImagePlaceholder";
import { cn } from "@/lib/utils";

const services = {
  Mobil: [
    { icon: CalendarClock, title: "Servis Berkala", desc: "Perawatan rutin sesuai jadwal dan kilometer kendaraan." },
    { icon: Gauge, title: "Tune-Up & Mesin", desc: "Penyesuaian performa mesin agar tetap optimal dan efisien." },
    { icon: Droplet, title: "Oli & Filter", desc: "Penggantian oli mesin dan filter dengan komponen yang sesuai." },
    { icon: Disc3, title: "Rem & Kaki-Kaki", desc: "Pemeriksaan dan perbaikan rem, suspensi, dan komponen kaki-kaki." },
    { icon: BatteryCharging, title: "Aki & Kelistrikan", desc: "Pengecekan aki, kabel, dan sistem kelistrikan kendaraan." },
    { icon: Snowflake, title: "AC Mobil", desc: "Servis AC, pengisian freon, dan pemeriksaan pendinginan." },
    { icon: ScanLine, title: "Diagnostik Elektronik", desc: "Pemindaian sistem elektronik untuk mendeteksi kendala." },
    { icon: ClipboardList, title: "Inspeksi Kendaraan", desc: "Pemeriksaan menyeluruh sebelum perjalanan atau pembelian." },
  ],
  Motor: [
    { icon: CalendarClock, title: "Servis Berkala", desc: "Perawatan rutin sesuai jadwal dan kilometer motor." },
    { icon: Cog, title: "Tune-Up Mesin", desc: "Penyesuaian performa mesin motor agar tetap responsif." },
    { icon: Droplet, title: "Penggantian Oli", desc: "Penggantian oli mesin dengan produk yang sesuai." },
    { icon: Disc3, title: "Rem & Transmisi", desc: "Pemeriksaan dan perbaikan sistem rem dan transmisi." },
    { icon: BatteryCharging, title: "Aki & Kelistrikan", desc: "Pengecekan aki dan sistem kelistrikan motor." },
    { icon: Fuel, title: "Sistem Injeksi", desc: "Pengecekan sistem injeksi untuk pembakaran optimal." },
    { icon: PackageOpen, title: "Penggantian Komponen", desc: "Penggantian komponen motor yang aus atau rusak." },
    { icon: Search, title: "Inspeksi Motor", desc: "Pemeriksaan menyeluruh kondisi motor Anda." },
  ],
};

const tabs = [
  { key: "Mobil", label: "Mobil", placeholder: "Foto servis mobil" },
  { key: "Motor", label: "Motor", placeholder: "Foto servis motor" },
];

export default function Services() {
  const [active, setActive] = useState("Mobil");
  const list = services[active];
  const activePlaceholder = tabs.find((t) => t.key === active).placeholder;

  return (
    <section id="layanan" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Layanan"
            title="Servis Mobil & Motor"
            intro="Pilih jenis kendaraan untuk melihat layanan yang tersedia. Setiap servis dimulai dengan pemeriksaan, bukan langsung mengganti komponen."
          />
        </Reveal>

        {/* Tab control */}
        <Reveal delay={80} className="mt-10">
          <div
            role="tablist"
            aria-label="Pilih jenis kendaraan"
            className="inline-flex rounded-full border border-border bg-asphalt-soft p-1"
          >
            {tabs.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={active === t.key}
                aria-controls="services-panel"
                onClick={() => setActive(t.key)}
                className={cn(
                  "relative rounded-full px-7 py-2.5 text-sm font-semibold transition-colors duration-300",
                  active === t.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Panel */}
        <div
          id="services-panel"
          role="tabpanel"
          className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          {/* Image placeholder column */}
          <Reveal className="relative hidden overflow-hidden lg:block">
            <div className="aspect-[3/4] w-full overflow-hidden">
              <ImagePlaceholder
                key={active}
                label={activePlaceholder}
                className="animate-[fadeSwap_0.5s_ease]"
              />
            </div>
          </Reveal>

          {/* Service list — editorial, no cards */}
          <div key={active}>
            <ul className="divide-y divide-border/50">
              {list.map((s, i) => (
                <li
                  key={s.title}
                  style={{
                    animation: `fadeSwap 0.5s ease both`,
                    animationDelay: `${i * 40}ms`,
                  }}
                  className="group flex items-start gap-4 py-5 transition-colors duration-200"
                >
                  <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary/70 transition-colors group-hover:text-primary" />
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={waLink(
                `Halo ${business.name}, saya ingin bertanya tentang layanan ${active.toLowerCase()}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Tanya layanan via WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSwap {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}