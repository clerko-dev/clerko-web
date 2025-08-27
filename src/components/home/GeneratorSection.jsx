export default function GeneratorSection(){
  return (
    <section id="generator" className="relative bg-[#0A0B14] py-16 sm:py-20 scroll-mt-24">
      <div className="glass p-6 md:p-8">
        {import { track } from "@/lib/analytics";
// ...
<Button type="button" onClick={() => track("generator_generate")}>Generate preview</Button>
<Button type="button" variant="secondary" onClick={() => { /* ...clear state... */ track("generator_clear"); }}>
  Clear
</Button>
<Button type="button" variant="secondary" onClick={() => { /* ...copy... */ track("generator_copy"); }}>
  Copy
</Button>
}
      </div>
    </section>
  );
}
