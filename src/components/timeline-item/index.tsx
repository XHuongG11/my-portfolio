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
    <div className="relative pl-4 border-l-2 border-[var(--accent)]/30">
      <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-[var(--accent)]" />
      <h4 className="text-[var(--text)] text-sm font-semibold !m-0">{title}</h4>
      <p className="text-[var(--accent)] text-xs font-medium mt-0.5">{subtitle}</p>
      <p className="text-[var(--text-muted)] text-xs flex items-center gap-1 mt-0.5">
        <Calendar size={10} />
        {period}
      </p>
      <ul className="mt-2 space-y-1 list-none p-0">
        {details.map((detail, i) => (
          <li
            key={i}
            className="text-[var(--text-secondary)] text-xs flex items-start gap-2"
          >
            <span className="text-[var(--accent)] mt-1 shrink-0">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimelineItem;