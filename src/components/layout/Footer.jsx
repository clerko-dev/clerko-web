export default function Footer() {
  return (
    <footer className="container px-6 py-10 text-white/60" data-reveal>
      <div className="flex items-center justify-between">
        <span className="text-sm">&copy; {new Date().getFullYear()} Clerko. All rights reserved.</span>
        {/* sekcje Szybkie linki / Legal / Social — możesz dodać tu listy <ul> zgodnie z wcześniejszym szkicem */}
      </div>
    </footer>
  );
}
