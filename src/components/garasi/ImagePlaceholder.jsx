import { Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ImagePlaceholder({ label, className }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex h-full min-h-48 w-full items-center justify-center border border-dashed border-foreground/20 bg-secondary/30 p-6 text-center text-foreground",
        className
      )}
    >
      <div className="flex flex-col items-center gap-3">
        <ImageIcon aria-hidden="true" className="h-7 w-7 text-primary" />
        <span className="font-heading text-sm font-semibold sm:text-base">
          {label}
        </span>
      </div>
    </div>
  );
}
