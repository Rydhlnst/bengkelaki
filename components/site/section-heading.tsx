import { cn } from "cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  level = 2,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  level?: 1 | 2 | 3;
  className?: string;
}) {
  const Heading = (["h1", "h2", "h3"] as const)[level - 1];
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-extrabold tracking-[0.18em] text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "font-extrabold tracking-tight text-balance",
          level === 1 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
