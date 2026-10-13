import { useEffect, useState } from "react";
import { ArrowUp, MapPin, Phone, Clock } from "lucide-react";
import { business, waLink } from "@/data/business";

const navLinks = [
{ label: "Beranda", href: "#beranda" },
{ label: "Layanan", href: "#layanan" },
{ label: "Tentang Kami", href: "#tentang" },
{ label: "Keunggulan", href: "#keunggulan" },
{ label: "FAQ", href: "#faq" },
{ label: "Kontak", href: "#kontak" }];


const serviceLinks = [
"Servis Berkala",
"Tune-Up & Mesin",
"Rem & Kaki-Kaki",
"Diagnostik Elektronik",
"Pemeriksaan Kendaraan"];


export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () =>
  window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNav = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return null;













































































































































}