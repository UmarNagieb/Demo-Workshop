import { cn } from "@/lib/utils";

/**
 * SectionHeading — consistent eyebrow + title + intro block.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
  titleClassName,
  introClassName,
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-primary" />
          <span className="font-mono-tech text-xs uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "mt-5 font-heading text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-muted-foreground md:text-lg",
            introClassName
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}