interface SectionDividerProps {
  from: string;
  to: string;
  height?: string;
}

export default function SectionDivider({
  from,
  to,
  height = "120px",
}: SectionDividerProps) {
  return (
    <div
      className="w-full pointer-events-none"
      style={{
        height,
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    />
  );
}
