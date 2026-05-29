import Link from "next/link";
import Image from "next/image";

const selectedWork = [
  {
    name: "Convoy App",
    summary: "Real-time group synchronization and map-based tracking for travel groups.",
    tags: ["React Native", "WebSockets"],
    image:
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Weather Monitor",
    summary: "Technical dashboard for real-time atmospheric data analysis and forecasting.",
    tags: ["C# / .NET", "Async API"],
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Travel Companion",
    summary: "Android application utilizing SQLite and Google Maps for itinerary planning.",
    tags: ["Android", "SQLite"],
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
  },
] as const;

const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "React Native", "JavaScript / TS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["C# / .NET", "Node.js", "REST APIs", "WebSockets"],
  },
  {
    title: "Database",
    items: ["SQL Server", "Firebase", "SQLite", "PostgreSQL"],
  },
  {
    title: "Cloud & Tools",
    items: ["AWS", "Power Platform", "GitHub Actions", "Docker"],
  },
  {
    title: "Mobile",
    items: ["Android Dev", "Google Maps API", "UI/UX Design", "App Publishing"],
  },
] as const;

export default function DeveloperPage() {
  return (
    <main className="min-h-screen bg-[#02050d] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3b82f6] text-sm font-bold">
              S
            </span>
            <span className="text-sm font-semibold text-white/90">Samuel Onyenwe</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#projects" className="transition-colors hover:text-[#3b82f6]">
              Projects
            </a>
            <a href="#stack" className="transition-colors hover:text-[#3b82f6]">
              Stack
            </a>
            <a href="#experience" className="transition-colors hover:text-[#3b82f6]">
              Experience
            </a>
            <a href="#contact" className="transition-colors hover:text-[#3b82f6]">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-22 pt-18">
        <div className="absolute left-1/3 top-10 h-[28rem] w-[28rem] rounded-full bg-[#3b82f6]/15 blur-[120px]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#60a5fa]">
              Available for new opportunities
            </span>
            <h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[5.35rem]">
              Full Stack Developer building <span className="text-[#3b82f6]">AI-powered</span>
              <br /> workflow systems.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/62 sm:text-xl sm:leading-9">
              Focused on modern SaaS products, automation systems, and high-performance
              applications that solve real-world problems.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-[#3b82f6] px-7 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white/90 transition-colors hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
            <div className="mt-12 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-white/45">Core Stack</p>
              <div className="mt-4 flex flex-wrap gap-6 text-sm text-white/65">
                <span>React</span>
                <span>C# / .NET</span>
                <span>SQL Server</span>
                <span>Power Platform</span>
                <span>AWS / Firebase</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
              <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-white/5 px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/30" />
              </div>
              <div className="relative h-[25rem] w-full lg:h-[26rem]">
                <Image
                  src="https://uxmagic.blob.core.windows.net/public/agent-images/dev-bg-1779904720983-h8wmj0lb82h.png"
                  alt="Developer architecture board"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-white/10 bg-[#050912] px-6 py-22">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">FEATURED PROJECT</h2>
              <p className="mt-3 text-white/55">
                The cornerstone of my portfolio: a full-scale civic engagement platform.
              </p>
            </div>
            <a href="#" className="font-semibold text-[#3b82f6] hover:text-[#60a5fa]">
              View all projects →
            </a>
          </div>

          <article className="overflow-hidden rounded-3xl border border-white/10 bg-black/50">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-10">
                <h3 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">FixMyCity</h3>
                <p className="mt-6 max-w-xl text-xl leading-9 text-white/72 sm:text-2xl sm:leading-10">
                  A civic issue reporting platform that streamlines communication between residents
                  and municipal services. Built to solve the fragmentation in city maintenance
                  workflows.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-6 text-sm text-white/78">
                  <div>
                    <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-white/45">
                      Key Features
                    </p>
                    <ul className="space-y-2">
                      <li>Real-time reporting</li>
                      <li>Admin dashboard</li>
                      <li>Map integration</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-white/45">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-semibold">
                      <span className="rounded bg-white/8 px-2 py-1">REACT NATIVE</span>
                      <span className="rounded bg-white/8 px-2 py-1">FIREBASE</span>
                      <span className="rounded bg-white/8 px-2 py-1">NODE.JS</span>
                      <span className="rounded bg-white/8 px-2 py-1">SQL</span>
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <button className="rounded-xl bg-[#3b82f6] px-6 py-3 font-semibold text-white">
                    View Case Study
                  </button>
                  <button className="rounded-xl border border-white/15 bg-white/6 px-6 py-3 font-semibold text-white/90">
                    Repository
                  </button>
                </div>
              </div>
              <div className="bg-[#09152b]">
                <div className="relative h-full min-h-[20rem] w-full">
                  <Image
                    src="https://uxmagic.blob.core.windows.net/public/agent-images/dev-bg-1779904720983-h8wmj0lb82h.png"
                    alt="FixMyCity project visual"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-22">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-12 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">SELECTED WORK</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {selectedWork.map((project) => (
              <article key={project.name} className="overflow-hidden rounded-2xl border border-white/10 bg-black/55">
                <div className="relative h-52 w-full">
                  <Image src={project.image} alt={project.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{project.name}</h3>
                  <p className="mt-3 text-base leading-7 text-white/68 sm:text-lg sm:leading-8">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-[#3b82f6]">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center justify-between font-semibold uppercase tracking-[0.2em] text-white/85">
                    <span>View Project</span>
                    <span>↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="border-b border-white/10 bg-[#040913] px-6 py-22">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">TECHNICAL STACK</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {stackGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-5 text-xs uppercase tracking-[0.25em] text-[#3b82f6]">{group.title}</h3>
                <ul className="space-y-4 text-base text-white/82 sm:text-lg">
                  {group.items.map((item) => (
                    <li key={item}>› {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-white/10 px-6 py-22">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="mb-14 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">EXPERIENCE</h2>
          <div className="relative border-l border-white/15 pl-8">
            <span className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-[#3b82f6] shadow-[0_0_18px_rgba(59,130,246,0.7)]" />
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Software Developer Intern</h3>
              <span className="rounded bg-white/8 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                2023 - PRESENT
              </span>
            </div>
            <p className="mb-6 font-semibold text-[#3b82f6]">ITWIZE Technology Solutions</p>
            <ul className="space-y-4 text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
              <li>• Developed workflow automation solutions that improved operational efficiency by 30%.</li>
              <li>• Integrated APIs and backend services for high-traffic internal systems.</li>
              <li>• Collaborated on scalable application architecture and proactive debugging.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer id="contact" className="px-6 py-22">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                LET&apos;S BUILD
                <br /> SOMETHING <span className="text-[#3b82f6]">SCALABLE.</span>
              </h2>
              <p className="mt-8 max-w-xl text-xl leading-9 text-white/65 sm:text-2xl sm:leading-10">
                I enjoy building systems that combine strong user experience with scalable backend
                architecture. My interests include workflow automation, civic technology, and
                AI-assisted SaaS applications.
              </p>
              <div className="mt-10 flex gap-7 text-2xl text-white/85">
                <a href="#">GitHub</a>
                <a href="#">LinkedIn</a>
                <a href="#">Mail</a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/55 p-8">
              <h3 className="text-3xl font-semibold tracking-[-0.03em]">Quick Contact</h3>
              <form className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/55">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#3b82f6]"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-white/55">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project..."
                    className="h-32 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#3b82f6]"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-xl bg-[#3b82f6] py-4 text-lg font-semibold text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.2em] text-white/45 md:flex-row md:items-center md:justify-between">
            <p>© 2024 Samuel Onyenwe</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#3b82f6]">
                Developer Portfolio
              </a>
              <a href="/marketing" className="hover:text-[#3b82f6]">
                Marketing Path
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
