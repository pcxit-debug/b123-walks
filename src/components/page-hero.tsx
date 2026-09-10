export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-secondary/60">
      <div className="container-page py-12 md:py-16">
        {eyebrow && (
          <p className="text-sm font-bold tracking-wide uppercase text-green">{eyebrow}</p>
        )}
        <h1 className="mt-2 max-w-3xl text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-foreground/75">{intro}</p>}
      </div>
    </section>
  );
}
