export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && <p className="mt-5 text-lg leading-8 muted">{description}</p>}
    </div>
  );
}
