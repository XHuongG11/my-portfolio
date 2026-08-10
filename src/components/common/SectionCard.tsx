function SectionCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)]
        p-5 transition-all duration-300 hover:border-[var(--border-hover)]"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--accent-bg)]">
          <Icon size={16} className="text-[var(--accent)]" />
        </div>
        <h3 className="text-[var(--text)] font-semibold text-base !m-0">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default SectionCard;