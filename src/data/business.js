// =============================================================
// GARASI PRIME — Central business configuration
// Edit these values to update the whole site. Everything here is
// fictional demo data and should be replaced with real details.
// =============================================================

export const business = {
  name: "GARASI PRIME",
  tagline: "Professional Automotive Care",
  // WhatsApp number in international format, digits only (no +, spaces, or dashes)
  whatsapp: "6281234567890",
  phoneDisplay: "+62 812-3456-7890",
  email: "halo@garasiprimedemo.id",
  address: "Jl. Otomotif No. 88, Jakarta Selatan, DKI Jakarta 12345",
  addressShort: "Jakarta Selatan, DKI Jakarta",
  // Google Maps embed (replace src with real location)
  mapsEmbed:
    "https://www.google.com/maps?q=Jakarta+Selatan&output=embed",
  hours: [
    { day: "Senin – Jumat", time: "08.00 – 18.00 WIB" },
    { day: "Sabtu", time: "08.00 – 16.00 WIB" },
    { day: "Minggu", time: "Tutup" },
  ],
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

// Build a WhatsApp deep link with a pre-filled, encoded message.
export function waLink(message) {
  const number = business.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// Booking message template used by the contact form.
export function buildBookingMessage({
  name,
  vehicleType,
  serviceType,
  date,
  notes,
}) {
  const lines = [
    `Halo ${business.name}, saya ingin melakukan booking servis.`,
    ``,
    `Nama: ${name}`,
    `Jenis Kendaraan: ${vehicleType}`,
    `Jenis Layanan: ${serviceType}`,
    `Tanggal yang diinginkan: ${date}`,
  ];
  if (notes && notes.trim()) {
    lines.push(`Catatan: ${notes.trim()}`);
  }
  lines.push(``);
  lines.push(
    `Mohon konfirmasi ketersediaan jadwal. Saya memahami bahwa booking ini belum dikonfirmasi sebelum bengkel memberikan tanggapan.`
  );
  return lines.join("\n");
}