const logos = ["Atlas", "Northwind", "Helios", "Vector", "Lumen", "Quanta", "Orbital", "Foundry", "Pulse", "Mercer"];

export function Marquee() {
  const row = [...logos, ...logos];
  return (
    <section className="border-y border-white/10 bg-surface/40 py-10">
      <div className="container-x mb-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by teams at
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="marquee flex w-max gap-16 px-8">
          {row.map((name, i) => (
            <span key={i} className="font-display text-3xl font-semibold tracking-tight text-muted-foreground/70 hover:text-foreground transition-colors">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
