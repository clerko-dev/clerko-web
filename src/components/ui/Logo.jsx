export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400" />
      <span className="font-brand font-extrabold tracking-tight text-[18px] leading-none">
        <span style={{ color: "var(--brand)" }}>Clerko</span>
      </span>
    </div>
  );
}
