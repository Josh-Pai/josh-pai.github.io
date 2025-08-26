interface PortfolioBioProps {
  bio: string;
}

export const PortfolioBio = ({ bio }: PortfolioBioProps) => {
  return (
    <section className="mb-8">
      <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
        <p className="text-foreground leading-relaxed text-center max-w-2xl mx-auto">
          {bio}
        </p>
      </div>
    </section>
  );
};