import { Calendar } from "lucide-react";

function TimelineItem({
  title,
  subtitle,
  period,
  details,
}: {
  title: string;
  subtitle: string;
  period: string;
  details: string[];
}) {
  return (
    <div className="relative pl-4 border-l-2 border-[var(--accent)]/30 space-y-1">
      <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)]" />
      <h4 className="text-[var(--text)] text-sm font-semibold !m-0">{title}</h4>
      <p className="text-[var(--accent)] text-xs font-medium">{subtitle}</p>
      <p className="text-[var(--text-muted)] text-xs flex items-center gap-1">
        <Calendar size={12} />
        {period}
      </p>
      <ul className="pt-1 space-y-1.5 list-none p-0">
        {details.map((detail, i) => (
          <li
            key={i}
            className="text-[var(--text-secondary)] text-sm leading-relaxed flex items-start gap-2"
          >
            <span className="text-[var(--accent)] shrink-0">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimelineItem;