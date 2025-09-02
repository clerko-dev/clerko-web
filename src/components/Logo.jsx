export default function Logo({ className = "" }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-3 py-1 text-white text-sm " +
        "ring-1 ring-white/10 bg-gradient-to-r from-fuchsia-600/20 via-purple-600/20 to-sky-600/20 " +
        className
      }
    >
      Clerko
    </span>
  );
}