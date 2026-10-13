import { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle, Send, AlertCircle } from "lucide-react";
import Reveal from "./Reveal";
import { business, waLink, buildBookingMessage } from "@/data/business";
import { cn } from "@/lib/utils";

const vehicleTypes = ["Mobil", "Motor"];
const serviceTypes = [
  "Servis Berkala",
  "Tune-Up / Pemeriksaan Mesin",
  "Penggantian Oli & Filter",
  "Sistem Rem & Kaki-Kaki",
  "Aki & Kelistrikan",
  "AC Mobil",
  "Diagnostik Elektronik",
  "Pemeriksaan Kendaraan",
  "Lainnya",
];

const initial = {
  name: "",
  phone: "",
  vehicleType: "",
  serviceType: "",
  date: "",
  notes: "",
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Nama wajib diisi.";
    if (!/^[0-9+\s-]{8,}$/.test(form.phone.trim()))
      e.phone = "Nomor WhatsApp yang valid wajib diisi.";
    if (!form.vehicleType) e.vehicleType = "Pilih jenis kendaraan.";
    if (!form.serviceType) e.serviceType = "Pilih jenis layanan.";
    if (!form.date) e.date = "Pilih tanggal yang diinginkan.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const message = buildBookingMessage(form);
    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setForm(initial);
  };

  const inputBase =
    "w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary";

  return (
    <section id="kontak" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: info */}
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-primary">
                Kontak &amp; Booking
              </span>
            </div>
            <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem]">
              Siap Merawat Kendaraan Anda?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Ceritakan kebutuhan kendaraan Anda. Isi formulir atau hubungi
              langsung via WhatsApp — tim kami akan membantu menjadwalkan
              kunjungan.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={waLink(`Halo ${business.name}, saya ingin bertanya.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-primary" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    WhatsApp
                  </span>
                  <span className="font-heading text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                    {business.phoneDisplay}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Telepon
                  </span>
                  <span className="font-heading text-base font-semibold text-foreground">
                    {business.phoneDisplay}
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Alamat
                  </span>
                  <span className="font-heading text-base font-semibold text-foreground">
                    {business.address}
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Jam Operasional
                  </span>
                  <ul className="mt-1 space-y-0.5">
                    {business.hours.map((h) => (
                      <li
                        key={h.day}
                        className="text-sm text-foreground/85"
                      >
                        <span className="font-medium">{h.day}</span> — {h.time}
                      </li>
                    ))}
                  </ul>
                </span>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 overflow-hidden border border-border/60">
              <iframe
                title="Lokasi GARASI PRIME"
                src={business.mapsEmbed}
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border-l border-border/60 pl-6 sm:pl-8"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Formulir Booking
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Isi data berikut. Pengiriman akan membuka WhatsApp dengan pesan
                yang sudah terisi.
              </p>

              <div className="mt-6 space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="b-name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Nama <span className="text-primary">*</span>
                  </label>
                  <input
                    id="b-name"
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    className={cn(
                      inputBase,
                      errors.name ? "border-destructive" : "border-border"
                    )}
                    placeholder="Nama lengkap"
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="b-phone"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Nomor WhatsApp <span className="text-primary">*</span>
                  </label>
                  <input
                    id="b-phone"
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    className={cn(
                      inputBase,
                      errors.phone ? "border-destructive" : "border-border"
                    )}
                    placeholder="08xxxxxxxxxx"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Vehicle type */}
                <div>
                  <span className="mb-1.5 block text-sm font-medium text-foreground">
                    Jenis Kendaraan <span className="text-primary">*</span>
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {vehicleTypes.map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => {
                          setForm((f) => ({ ...f, vehicleType: v }));
                          setErrors((er) => ({ ...er, vehicleType: undefined }));
                        }}
                        className={cn(
                          "rounded-lg border px-4 py-3 text-sm font-semibold transition-colors",
                          form.vehicleType === v
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-foreground hover:border-primary/50"
                        )}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                  {errors.vehicleType && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.vehicleType}
                    </p>
                  )}
                </div>

                {/* Service type */}
                <div>
                  <label
                    htmlFor="b-service"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Jenis Layanan <span className="text-primary">*</span>
                  </label>
                  <select
                    id="b-service"
                    value={form.serviceType}
                    onChange={update("serviceType")}
                    className={cn(
                      inputBase,
                      errors.serviceType ? "border-destructive" : "border-border"
                    )}
                  >
                    <option value="">Pilih layanan</option>
                    {serviceTypes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.serviceType}
                    </p>
                  )}
                </div>

                {/* Date */}
                <div>
                  <label
                    htmlFor="b-date"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Tanggal yang Diinginkan <span className="text-primary">*</span>
                  </label>
                  <input
                    id="b-date"
                    type="date"
                    value={form.date}
                    onChange={update("date")}
                    className={cn(
                      inputBase,
                      errors.date ? "border-destructive" : "border-border"
                    )}
                  />
                  {errors.date && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.date}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="b-notes"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Catatan Tambahan
                  </label>
                  <textarea
                    id="b-notes"
                    rows={3}
                    value={form.notes}
                    onChange={update("notes")}
                    className={cn(inputBase, "border-border resize-none")}
                    placeholder="Keluhan kendaraan, gejala, atau permintaan khusus"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
                Kirim via WhatsApp
              </button>

              {submitted && (
                <p className="mt-4 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-foreground">
                  WhatsApp telah dibuka dengan pesan booking Anda. Booking ini
                  belum dikonfirmasi sampai bengkel memberikan tanggapan.
                </p>
              )}
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Catatan: Formulir ini membuka WhatsApp dengan pesan terisi dan
                tidak terhubung ke sistem backend. Booking belum dikonfirmasi
                sebelum bengkel memberikan tanggapan.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}