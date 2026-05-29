"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const paths = [
  {
    id: "developer",
    href: "/developer",
    eyebrow: "Engineering Path",
    titleTop: "Software",
    titleBottom: "Developer",
    description:
      "Building scalable products, AI-powered workflows, and modern applications.",
    accent: "text-[#3b82f6]",
    pill: "border-[#3b82f6]/35 bg-[#3b82f6]/12 text-[#60a5fa]",
    glow: "from-[#3b82f6]/24 via-[#3b82f6]/8 to-transparent",
    visual:
      "https://uxmagic.blob.core.windows.net/public/agent-images/dev-bg-1779904720983-h8wmj0lb82h.png",
    cta: "Enter workspace",
  },
  {
    id: "marketing",
    href: "/marketing",
    eyebrow: "Growth Path",
    titleTop: "Marketing",
    titleBottom: "Specialist",
    description:
      "Creating growth-focused strategies, branding systems, and digital experiences.",
    accent: "text-[#8b5cf6]",
    pill: "border-[#8b5cf6]/35 bg-[#8b5cf6]/12 text-[#a78bfa]",
    glow: "from-[#8b5cf6]/24 via-[#8b5cf6]/8 to-transparent",
    visual:
      "https://uxmagic.blob.core.windows.net/public/agent-images/marketing-bg-1779904730193-u16oisg5r8i.png",
    cta: "Explore strategy",
  },
] as const;

export default function Home() {
  const [hovered, setHovered] = useState<"developer" | "marketing" | null>(null);

  return (
    <main className="mesh-panel h-screen overflow-hidden bg-background text-foreground">
      <div className="relative flex h-full w-full flex-col lg:flex-row">
        <motion.footer
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          className="pointer-events-none absolute inset-x-0 bottom-8 z-30 flex flex-col items-center px-4"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.45em] text-slate-300/75">
            Select your path
          </p>
        </motion.footer>

        {paths.map((path, index) => {
          const isActive = hovered === path.id;
          const isInactive = hovered !== null && hovered !== path.id;
          const isDeveloper = path.id === "developer";
          const marketingHovered = hovered === "marketing";
          const softwareSlidingOut = isDeveloper && marketingHovered;
          const panelScale = isActive ? 1.08 : 1;
          const glowOpacity = isActive ? 1 : 0.78;
          const titleLift = isActive ? -8 : 0;
          const titleX = softwareSlidingOut ? -160 : isActive ? 14 : 0;

          return (
            <motion.section
              key={path.id}
              onHoverStart={() => setHovered(path.id)}
              onHoverEnd={() => setHovered(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                flexGrow: isActive ? 1.5 : isInactive ? 0.9 : 1,
              }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative min-h-[50vh] flex-1 overflow-hidden border-white/7 lg:min-h-0 lg:border-r lg:last:border-r-0"
            >
              <Link href={path.href} className="block h-full w-full">
                <motion.div
                  animate={{ scale: panelScale }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${path.visual})` }}
                />

                <div className="absolute inset-0 bg-black/72" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.56)_42%,rgba(0,0,0,0.76)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.78)_0%,transparent_33%,rgba(0,0,0,0.84)_100%)]" />
                <motion.div
                  animate={{ opacity: glowOpacity }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 bg-gradient-to-b ${path.glow}`}
                />
                <motion.div
                  animate={{ opacity: isActive ? 0.66 : 0.28, scale: isActive ? 1.04 : 1 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className={`absolute inset-0 ${
                    isDeveloper
                      ? "bg-[radial-gradient(circle_at_38%_58%,rgba(59,130,246,0.4),transparent_44%)]"
                      : "bg-[radial-gradient(circle_at_62%_58%,rgba(139,92,246,0.4),transparent_44%)]"
                  }`}
                />
                <div className="absolute inset-y-0 right-0 w-px bg-white/10 lg:block" />

                <div className="relative z-10 flex h-full flex-col px-6 pt-24 sm:px-10 sm:pt-28 lg:px-12 lg:pt-30">
                  <div className="flex items-center justify-center">
                    <span
                      className={`inline-flex rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.34em] ${path.pill}`}
                    >
                      {path.eyebrow}
                    </span>
                  </div>

                  <motion.div
                    animate={{
                      opacity: softwareSlidingOut ? 0.38 : isInactive ? 0.72 : 1,
                      y: titleLift,
                      x: titleX,
                      scale: isActive ? 1.015 : 1,
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-16 max-w-[44rem]"
                  >
                    <h1 className="font-display text-[3.2rem] font-semibold uppercase leading-[0.9] tracking-[-0.08em] text-white sm:text-[5rem] lg:text-[6.8rem] xl:text-[8rem]">
                      <span className="block">{path.titleTop}</span>
                      <span className={`block ${path.accent}`}>{path.titleBottom}</span>
                    </h1>
                  </motion.div>
                </div>
              </Link>
            </motion.section>
          );
        })}
      </div>
    </main>
  );
}
