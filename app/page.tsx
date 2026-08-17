import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Smartphone,
  Sparkles,
  Terminal,
} from "lucide-react";
import { ProjectInquiryForm } from "@/components/project-inquiry-form";

const services = [
  {
    number: "01",
    title: "Full-stack MVPs",
    description: "Turn a clear idea into a focused, production-ready first release without assembling a development team.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Cross-platform mobile",
    description: "Ship polished iOS and Android experiences with React Native and Expo, backed by real native integration depth.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Web applications",
    description: "Build responsive React and Next.js products with deliberate state architecture and a fast user experience.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Backend & APIs",
    description: "Design the services, data layer, authentication, and integrations that keep the product dependable as it grows.",
    icon: Database,
  },
  {
    number: "05",
    title: "App modernization",
    description: "Untangle an existing product, migrate the stack, improve delivery, and leave the next team with a stronger foundation.",
    icon: GitBranch,
  },
  {
    number: "06",
    title: "AI product integration",
    description: "Add useful AI capabilities across web, iOS, Android, and backend surfaces — designed around the product, not hype.",
    icon: Sparkles,
  },
];

const process = [
  ["01", "Tell me about the idea", "Share the product, the audience, and the problem worth solving."],
  ["02", "Shape the technical plan", "Turn the opportunity into a clear scope, architecture, and development path."],
  ["03", "Build the product", "Develop web, mobile, and backend surfaces as one connected system."],
  ["04", "Launch with confidence", "Prepare production infrastructure, releases, and the handoff."],
  ["05", "Own and keep improving", "Receive the complete codebase, setup, and handoff — then continue independently or with focused support."],
];

function SectionLabel({ children }: { children: string }) {
  return <p className="eyebrow">{children}</p>;
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="group flex items-center gap-3" aria-label="Northstar Studio home">
          <span className="grid size-9 place-items-center rounded-lg border border-line bg-panel text-acid transition-colors group-hover:border-acid">
            <Terminal size={17} aria-hidden="true" />
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight">northstar<span className="text-acid">/</span>studio</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex" aria-label="Main navigation">
          <a className="transition-colors hover:text-ink" href="#services">Capabilities</a>
          <a className="transition-colors hover:text-ink" href="#architecture">Architecture</a>
          <a className="transition-colors hover:text-ink" href="#process">Process</a>
          <a className="transition-colors hover:text-ink" href="#contact">Contact</a>
        </nav>
        <a className="button-small hidden sm:inline-flex" href="#contact">Start your project <ArrowUpRight size={15} aria-hidden="true" /></a>
        <details className="relative md:hidden">
          <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-lg border border-line text-muted" aria-label="Open navigation">
            <span className="text-lg leading-none" aria-hidden="true">≡</span>
          </summary>
          <nav className="absolute right-0 top-12 z-10 flex min-w-44 flex-col gap-1 rounded-xl border border-line bg-panel p-2 text-sm text-muted shadow-2xl" aria-label="Mobile navigation">
            <a className="rounded-lg px-3 py-2 hover:bg-canvas hover:text-ink" href="#services">Capabilities</a>
            <a className="rounded-lg px-3 py-2 hover:bg-canvas hover:text-ink" href="#architecture">Architecture</a>
            <a className="rounded-lg px-3 py-2 hover:bg-canvas hover:text-ink" href="#process">Process</a>
            <a className="rounded-lg px-3 py-2 hover:bg-canvas hover:text-ink" href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <section id="top" className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-10 lg:pb-36 lg:pt-28">
        <div className="glow-orb hero-orb -right-48 top-0" />
        <div className="relative max-w-5xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="size-2 rounded-full bg-acid shadow-[0_0_18px_hsl(var(--acid))]" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Independent product engineering</span>
          </div>
          <h1 className="max-w-5xl text-[clamp(3.4rem,8vw,7.5rem)] font-semibold leading-[0.91] tracking-[-0.075em] text-ink">
            One codebase.<br />
            <span className="text-acid">Every surface.</span>
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-lg leading-8 text-muted sm:text-xl">
              Production-ready web, iOS, Android, and backend products from one senior engineering partner — with AI integration available wherever it creates real leverage.
            </p>
            <a className="button-primary w-fit" href="#contact">Start your project <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="mt-24 flex flex-col justify-between gap-8 border-t border-line pt-5 font-mono text-xs uppercase tracking-[0.12em] text-muted sm:flex-row">
          <span>TypeScript · React · Expo · Node.js · AI integration</span>
          <a className="group flex items-center gap-2 hover:text-ink" href="#architecture">See the architecture <ArrowDown size={14} className="transition-transform group-hover:translate-y-1" aria-hidden="true" /></a>
        </div>
      </section>

      <section id="services" className="border-y border-line bg-panel/35">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionLabel>Capabilities / 01</SectionLabel>
              <h2 className="mt-5 max-w-sm text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">From first commit to first customer.</h2>
              <p className="mt-6 max-w-sm leading-7 text-muted">Focused engineering for founders and teams who need a product to move from possibility to production — with AI as an option across every surface.</p>
            </div>
            <div className="divide-y divide-line border-y border-line">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.number} className="group grid gap-5 py-7 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8">
                    <span className="font-mono text-xs text-acid">{service.number}</span>
                    <div>
                      <h3 className="flex items-center gap-3 text-xl font-medium tracking-tight">{service.title} <Icon size={17} className="text-muted transition-colors group-hover:text-acid" aria-hidden="true" /></h3>
                      <p className="mt-2 max-w-lg leading-7 text-muted">{service.description}</p>
                    </div>
                    <ArrowUpRight className="hidden text-muted transition-colors group-hover:text-acid sm:block" size={19} aria-hidden="true" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="glow-orb -left-64 top-48 bg-acid/5" />
        <div className="relative grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionLabel>Architecture / 02</SectionLabel>
            <h2 className="mt-5 max-w-lg text-4xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-6xl">Build once.<br /><span className="text-violet">Share more.</span><br />Move faster.</h2>
            <p className="mt-7 max-w-md leading-8 text-muted">A product is more than a collection of screens. Shared types, business logic, validation, API clients, and AI capabilities keep every surface aligned as it evolves.</p>
            <div className="mt-8 space-y-3 text-sm text-muted">
              {["One source of truth for core types", "AI can reach web, iOS, Android, and backend", "Less duplicated work to maintain", "Full codebase ownership at handoff"].map((benefit) => <p className="flex items-center gap-3" key={benefit}><Check size={16} className="text-acid" aria-hidden="true" />{benefit}</p>)}
            </div>
          </div>
          <div className="relative rounded-2xl border border-line bg-panel p-5 shadow-glow sm:p-8">
            <div className="mb-8 flex items-center justify-between border-b border-line pb-4 font-mono text-xs text-muted"><span>product-system.ts</span><span className="text-acid">● live architecture</span></div>
            <div className="space-y-4 font-mono text-xs sm:text-sm">
              <div className="mx-auto flex max-w-xs items-center justify-center gap-3 rounded-xl border border-acid/40 bg-acid/10 px-5 py-4 text-acid"><Braces size={18} aria-hidden="true" /><span>YOUR PRODUCT</span></div>
              <div className="mx-auto h-8 w-px bg-line" />
              <div className="mx-auto grid max-w-md grid-cols-3 gap-2 text-center text-muted sm:gap-3">
                <div className="rounded-lg border border-line bg-canvas px-2 py-4"><Code2 className="mx-auto mb-2 text-violet" size={18} aria-hidden="true" />web</div>
                <div className="rounded-lg border border-line bg-canvas px-2 py-4"><Smartphone className="mx-auto mb-2 text-violet" size={18} aria-hidden="true" />mobile</div>
                <div className="rounded-lg border border-line bg-canvas px-2 py-4"><Database className="mx-auto mb-2 text-violet" size={18} aria-hidden="true" />API</div>
              </div>
              <div className="mx-auto h-8 w-px bg-line" />
              <div className="mx-auto flex max-w-sm items-center justify-center gap-4 rounded-lg border border-line bg-canvas px-5 py-4 text-muted"><span className="text-violet">/packages</span><span className="text-line">→</span><span>types · ui · api-client · ai</span></div>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-line pt-5 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-muted"><span>shared types</span><span>shared logic</span><span>shared velocity</span></div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-panel/35">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
          <div><SectionLabel>Proof of practice / 03</SectionLabel><h2 className="mt-5 max-w-sm text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">Senior thinking, hands-on execution.</h2><p className="mt-6 max-w-sm leading-7 text-muted">AI features, platform delivery, and the underlying source all stay inside one understandable system.</p></div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {[
              ["~10", "years building software"],
              ["07", "web applications shipped"],
              ["02", "shared web + mobile monorepo"],
              ["∞", "curiosity for the hard parts"],
            ].map(([value, label], index) => <div className={`bg-canvas p-7 ${index === 3 ? "sm:col-span-1" : ""}`} key={label}><p className="font-mono text-4xl tracking-[-0.06em] text-acid">{value}</p><p className="mt-3 max-w-[12rem] text-sm leading-6 text-muted">{label}</p></div>)}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div><SectionLabel>How it works / 04</SectionLabel><h2 className="mt-5 max-w-sm text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">A clear path through the complex parts.</h2></div>
          <div className="divide-y divide-line border-y border-line">
            {process.map(([number, title, description]) => <div className="grid gap-4 py-6 sm:grid-cols-[3rem_1fr]" key={number}><span className="font-mono text-xs text-acid">{number}</span><div><h3 className="text-lg font-medium">{title}</h3><p className="mt-2 max-w-lg leading-7 text-muted">{description}</p></div></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="relative border-t border-line bg-panel/35">
        <div className="glow-orb -right-64 top-20" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-32">
          <div>
            <SectionLabel>Start a conversation / 05</SectionLabel>
            <h2 className="mt-5 max-w-lg text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-7xl">Have a product in mind?</h2>
            <p className="mt-7 max-w-md text-lg leading-8 text-muted">Tell me what you are building, where you are stuck, or what you want to make possible. AI can be integrated into the web, iOS, Android, and backend parts — and you keep the full codebase at the end.</p>
            <div className="mt-10 flex flex-col gap-3 text-sm text-muted">
              <a className="group flex w-fit items-center gap-3 hover:text-ink" href="mailto:mrezaaeskandari@gmail.com"><span className="size-1.5 rounded-full bg-acid" />mrezaaeskandari@gmail.com <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></a>
              <a className="group flex w-fit items-center gap-3 hover:text-ink" href="https://linkedin.com/in/mohammad-reza-eskandari" target="_blank" rel="noreferrer"><span className="size-1.5 rounded-full bg-violet" />LinkedIn <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></a>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-canvas p-6 sm:p-8"><ProjectInquiryForm /></div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 font-mono text-xs uppercase tracking-[0.12em] text-muted sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span>northstar<span className="text-acid">/</span>studio</span>
        <span>Built for the next useful thing.</span>
        <a className="hover:text-ink" href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
