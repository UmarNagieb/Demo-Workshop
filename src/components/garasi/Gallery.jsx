import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";
import { cn } from "@/lib/utils";

const gallery = [
  {
    label: "Foto pekerjaan nyata: Sistem rem",
    span: "lg:col-span-2",
  },
  {
    label: "Foto perawatan motor",
    span: "lg:row-span-2",
  },
  {
    label: "Foto peralatan bengkel",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Galeri"
            title="Suasana Bengkel."
            intro="Area ini disiapkan untuk dokumentasi pekerjaan dan suasana bengkel yang sebenarnya."
          />
        </Reveal>

        <div className="mt-12 grid auto-rows-[14rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal
              key={g.label}
              delay={i * 90}
              className={cn("relative overflow-hidden", g.span)}
            >
              <ImagePlaceholder label={g.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}