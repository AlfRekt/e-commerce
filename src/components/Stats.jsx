const stats = [
  { id: 1, value: "15K",  label: "Happy Customers" },
  { id: 2, value: "150K", label: "Monthly Visitors" },
  { id: 3, value: "15",   label: "Countries Worldwide" },
  { id: 4, value: "100+", label: "Top Partners" },
];

function Stats() {
  return (
    <div className="w-full px-6 py-12 md:px-[195px] md:py-16">
      <div className="flex flex-col items-center gap-12 sm:flex-row sm:justify-around sm:gap-0">
        {stats.map((s) => (
          <div key={s.id} className="flex flex-col items-center gap-2 text-center">
            <span className="text-5xl font-bold text-[#252B42]">{s.value}</span>
            <span className="text-sm font-bold text-[#737373]">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;