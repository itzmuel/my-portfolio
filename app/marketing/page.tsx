import Link from "next/link";
import Image from "next/image";

const capabilities = [
  {
    title: "Brand Strategy",
    text: "Defining the core identity and positioning that sets products apart in crowded markets.",
    tone: "from-[#8b5cf6]/35 to-transparent",
  },
  {
    title: "Growth Analytics",
    text: "Data-driven decision making to optimize user acquisition and retention funnels.",
    tone: "from-[#f97316]/35 to-transparent",
  },
  {
    title: "Content Systems",
    text: "Scalable content frameworks that communicate value effectively across all channels.",
    tone: "from-[#3b82f6]/35 to-transparent",
  },
] as const;

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-[#02040b] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8b5cf6] text-sm font-bold">
              S
            </span>
            <span className="text-sm font-semibold text-white/90">Samuel Onyenwe</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#strategy" className="transition-colors hover:text-[#a78bfa]">
              Strategy
            </a>
            <a href="#branding" className="transition-colors hover:text-[#a78bfa]">
              Branding
            </a>
            <a href="#analytics" className="transition-colors hover:text-[#a78bfa]">
              Analytics
            </a>
            <a href="#contact" className="rounded-full bg-[#8b5cf6] px-4 py-2 font-semibold text-white">
              Work with me
            </a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-24 pt-24 text-center">
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-[#8b5cf6]/15 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[28rem] w-[28rem] rounded-full bg-[#f97316]/14 blur-[120px]" />
        <div className="relative mx-auto w-full max-w-5xl">
          <span className="inline-flex rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#a78bfa]">
            Strategic Marketing & Growth
          </span>
          <h1 className="mt-8 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[5.8rem]">
            Turning complex products into
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#f97316] bg-clip-text text-transparent">
              {" "}
              human experiences.
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl sm:leading-9">
            Creating growth-focused strategies, branding systems, and digital experiences that
            resonate with users and drive acquisition.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#strategy"
              className="rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#f97316] px-8 py-4 font-semibold text-white"
            >
              Explore Strategy
            </a>
            <a
              href="#branding"
              className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white/90"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>

      <section id="strategy" className="border-b border-white/10 bg-[#040811] px-6 py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-black/45 p-6">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${item.tone}`} />
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-white/65 sm:text-lg sm:leading-8">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="branding" className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-12 flex items-center justify-between gap-6">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">BRAND WORK</h2>
            <span className="text-xs uppercase tracking-[0.25em] text-white/45">01 - Case Studies</span>
          </div>

          <article className="group relative overflow-hidden rounded-3xl border border-white/10">
            <div className="relative h-[34rem] w-full">
              <Image
                src="https://uxmagic.blob.core.windows.net/public/agent-images/marketing-bg-1779904730193-u16oisg5r8i.png"
                alt="Marketing case study"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-12">
              <p className="text-xs uppercase tracking-[0.25em] text-[#a78bfa]">SaaS Rebranding</p>
              <h3 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-6xl">
                The Future of Civic Engagement
              </h3>
              <p className="mt-4 max-w-3xl text-xl leading-8 text-white/70 sm:text-2xl sm:leading-9">
                How we redesigned the identity for a municipal reporting platform to increase user
                trust and engagement by 45% in six months.
              </p>
              <button className="mt-7 rounded-xl bg-white px-6 py-3 font-semibold text-black">
                View Full Strategy
              </button>
            </div>
          </article>
        </div>
      </section>

      <section id="analytics" className="border-b border-white/10 bg-[#050912] px-6 py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
              Driven by data,
              <br /> defined by <span className="text-[#8b5cf6]">creativity</span>.
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-white/65 sm:text-2xl sm:leading-10">
              Marketing is not just about pretty visuals. It is about understanding the metrics
              that move the needle. I combine technical depth with creative strategy to deliver
              measurable results.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/45 p-6">
                <p className="text-5xl font-semibold text-[#8b5cf6]">125%</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/50">Retention Increase</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/45 p-6">
                <p className="text-5xl font-semibold text-[#f97316]">3.2x</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/50">Conversion Lift</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black p-6 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">Growth Velocity</h3>
              <span className="rounded-xl bg-[#f97316] p-2 text-sm font-semibold">⚡</span>
            </div>
            <div className="flex h-72 items-end gap-2">
              {[44, 58, 52, 74, 66, 86, 76].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="flex-1 rounded-t-xl"
                  style={{
                    height: `${height}%`,
                    background:
                      index === 6
                        ? "linear-gradient(180deg, #f97316, #f97316)"
                        : "linear-gradient(180deg, #8b5cf6, #3f2a78)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="px-6 py-22 text-center">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-6xl font-semibold tracking-[-0.05em] sm:text-7xl">Ready to scale?</h2>
          <a
            href="mailto:hello@samuel.design"
            className="mt-8 inline-block text-4xl font-semibold text-white/75 underline decoration-[#8b5cf6] underline-offset-8 sm:text-6xl"
          >
            hello@samuel.design
          </a>

          <div className="mt-20 grid gap-6 text-sm uppercase tracking-[0.25em] text-white/55 md:grid-cols-3">
            <a href="#" className="hover:text-[#a78bfa]">
              LinkedIn
            </a>
            <a href="#" className="hover:text-[#a78bfa]">
              Twitter
            </a>
            <a href="#" className="hover:text-[#a78bfa]">
              Instagram
            </a>
          </div>

          <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.2em] text-white/40 md:flex-row md:items-center md:justify-between">
            <p>© 2024 Samuel Onyenwe - Marketing Specialist Portfolio</p>
            <div className="flex gap-8">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
