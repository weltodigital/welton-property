import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center [&_.eyebrow]:justify-center",
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow", light && "eyebrow-light")}>{eyebrow}</p>
      )}
      <Heading
        className={cn(
          "mt-4 text-3xl font-extrabold sm:text-4xl",
          light && "text-white",
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-brand-100/85" : "text-ink-700/85",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
