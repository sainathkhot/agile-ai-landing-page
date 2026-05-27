 // APP.JSX

import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  Terminal,
  BrainCircuit,
  Workflow,
  ShieldCheck,
  Layers3,
  ArrowRight,
  Cpu,
  PanelTop,
  Orbit,
  Command,
  FileCode2,
  Wand2,
  ChevronRight,
  Users,
  Binary,
  Rocket,
} from "lucide-react";

import screenshot1 from "./assets/screenshots/screenshot1.png";
import dev1 from "./assets/developers/dev1.png";
import dev2 from "./assets/developers/dev2.png";
import dev3 from "./assets/developers/dev3.png";

const features = [
  {
    icon: BrainCircuit,
    title: "Agentic AI Workflow Engine",
    desc: "Autonomous multi-step orchestration capable of planning, refining, structuring, and managing software engineering workflows intelligently.",
  },
  {
    icon: Workflow,
    title: "AI-Powered Agile Planning",
    desc: "Generate PRDs, sprint plans, technical breakdowns, user stories, architecture flows, and execution pipelines instantly.",
  },
  {
    icon: Wand2,
    title: "Conversational Engineering",
    desc: "Collaborate naturally with your development environment to architect systems, organize features, and streamline execution.",
  },
  {
    icon: ShieldCheck,
    title: "Human-in-the-Loop Control",
    desc: "Maintain full developer oversight with approval-based AI actions and transparent orchestration systems.",
  },
  {
    icon: Cpu,
    title: "Local LLM Infrastructure",
    desc: "Powered by Ollama for private, low-latency, local-first AI execution directly inside VS Code.",
  },
  {
    icon: FileCode2,
    title: "Developer-Centric Experience",
    desc: "Designed specifically for real-world software engineering workflows and modern developer productivity.",
  },
];

const workflow = [
  "Describe a feature or product idea",
  "Generate PRD & architecture",
  "Create sprint roadmap automatically",
  "Break work into engineering tasks",
  "Approve AI-generated workflows",
  "Execute and iterate collaboratively",
];

const developers = [
  {
    name: "Yash Mayekar",
    role: "AI Systems Engineer",
    image: dev1,
    bio: "Focused on AI orchestration systems, autonomous workflows, and developer productivity tooling.",
    email: "mailto:yashvmayekar@gmail.com",
    linkedin: "https://www.linkedin.com/in/yashmayekar21",
  },
  {
    name: "Sainath Khot",
    role: "AI-Ops Engineer",
    image: dev2,
    // bio: "Building scalable interfaces, backend systems, and AI-native engineering experiences.",
    bio: "Specialized in intelligent orchestration, infrastructure systems, and local LLM workflows.",
    email: "mailto:sainathkhot206@gmail.com",
    linkedin: "https://www.linkedin.com/in/sainath-khot",
  },
  {
    name: "Aryan Parab",
    role: "Backend & AI Engineer",
    image: dev3,
    // bio: "Specialized in intelligent orchestration, infrastructure systems, and local LLM workflows.",
    bio: "Building scalable interfaces, backend systems, and AI-native engineering experiences.",
    email: "mailto:parabaryan16@gmail.com",
    linkedin: "https://www.linkedin.com/in/aryanparab",
  },
];

const buzzwords = [
  "Agentic AI",
  "AI-Native Workflows",
  "Autonomous Planning",
  "Developer Copilot",
  "Sprint Intelligence",
  "AI Orchestration",
  "Human-AI Collaboration",
  "Conversational Development",
];

export default function App() {
  return (
    <div className="bg-[#050505] text-white overflow-hidden selection:bg-[#D9FF57] selection:text-black">
      {/* GRID */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:42px_42px]" />

      {/* GLOWS */}
      <div className="fixed top-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#6E56FF] opacity-20 blur-[140px]" />
      <div className="fixed bottom-[-300px] right-[-100px] w-[500px] h-[500px] bg-[#FF6B00] opacity-20 blur-[140px]" />

      {/* HERO */}
      <section className="relative min-h-screen px-6 pt-8 pb-28">
        <div className="max-w-7xl mx-auto">
          {/* NAV */}
          <nav className="flex items-center justify-between mb-15"> 
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: -8 }}
                className="w-14 h-14 bg-[#D9FF57] text-black border-[4px] border-white flex items-center justify-center shadow-[6px_6px_0px_#fff]"
              >
                <Bot size={28} />
              </motion.div>

              <div>
                <h2 className="font-black text-xl">
                  AI-Assisted Agile
                </h2>

                <p className="uppercase tracking-[0.25em] text-xs text-zinc-500 mt-1">
                  Agentic AI VS Code Extension
                </p>
              </div>
            </div>

            <div className="hidden md:flex gap-4 ">
              <StatusBadge text="Launching Soon" />
              <StatusBadge text="VS Code Marketplace" />
            </div>
          </nav>
          {/* FLOATING NAVBAR
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:flex"
          >
            <div className="flex items-center gap-3 bg-[#111111cc] backdrop-blur-xl border-[3px] border-white px-4 py-3 shadow-[8px_8px_0px_#6E56FF]">

              <a
                href="#features"
                className="px-4 py-2 font-black hover:bg-[#D9FF57] hover:text-black transition-all"
              >
                Features
              </a>

              <a
                href="#workflow"
                className="px-4 py-2 font-black hover:bg-[#FF6B00] hover:text-black transition-all"
              >
                Workflow
              </a>

              <a
                href="https://github.com/yourusername/yourrepo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 font-black hover:bg-white hover:text-black transition-all"
              >
                GitHub
              </a>

              <a
                href="#team"
                className="px-4 py-2 font-black hover:bg-[#6E56FF] transition-all"
              >
                Team
              </a>
            </div>
          </motion.div> */}
          {/* HERO GRID */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#111] border-[4px] border-white px-5 py-3 shadow-[6px_6px_0px_#6E56FF] mb-8">
                <Sparkles size={18} className="text-[#D9FF57]" />
                <span className="uppercase font-black tracking-wider">
                  Agentic AI Development Platform
                </span>
              </div>

              {/* UPDATED HERO TITLE */}
              <h1 className="text-6xl md:text-8xl leading-[0.88] font-black tracking-tight">
                Your AI
                <span className="block text-[#D9FF57]">
                  Agile Engineer
                </span>

                <span className="relative inline-block mt-2">
                  Inside VS Code
                  <div className="absolute -bottom-3 left-0 w-full h-5 bg-[#FF6B00] -z-10 rotate-[-1deg]" />
                </span>
              </h1>

              {/* REFINED CONTENT */}
              <p className="mt-10 text-xl text-zinc-300 leading-relaxed max-w-2xl">
                A next-generation AI-assisted development extension designed to
                help developers plan, architect, organize, and execute software
                projects using intelligent Agile workflows, conversational AI,
                and autonomous engineering orchestration directly inside VS
                Code.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5 mt-12">
                <button className="group bg-[#D9FF57] text-black px-8 py-5 border-[4px] border-white font-black text-lg shadow-[8px_8px_0px_#ffffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                  Download Soon
                </button>

                <a
                  href="#features"
                  className="bg-[#111] border-[4px] border-white px-8 py-5 font-black text-lg shadow-[8px_8px_0px_#6E56FF] hover:-translate-y-1 transition-all inline-block"
                >
                  Explore Features
                </a>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-4 mt-14">
                {buzzwords.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="px-4 py-3 bg-[#111] border-[3px] border-white font-bold shadow-[5px_5px_0px_#1d1d1d] hover:shadow-[5px_5px_0px_#6E56FF] transition-all"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* FLOAT */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9 }}
                whileHover={{ y: -8 }}
                className="absolute -top-8 -left-8 bg-[#FF6B00] text-black px-5 py-3 border-[4px] border-white font-black shadow-[6px_6px_0px_#fff] z-20 rotate-[-6deg]"
              >
                AGENTIC AI SYSTEM
              </motion.div>

              {/* PANEL */}
              <div className="bg-[#111] border-[5px] border-white shadow-[18px_18px_0px_#6E56FF] overflow-hidden">
                {/* TOP BAR */}
                <div className="flex items-center justify-between px-5 py-4 border-b-[4px] border-white bg-[#191919]">
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-[#FF6B00] border-2 border-white" />
                    <div className="w-4 h-4 bg-[#D9FF57] border-2 border-white" />
                    <div className="w-4 h-4 bg-[#6E56FF] border-2 border-white" />
                  </div>

                  <div className="uppercase tracking-wider font-black text-sm">
                    AI Workflow Console
                  </div>
                </div>

                {/* TERMINAL */}
                <div className="p-6">
                  <div className="bg-black border-[4px] border-white p-5 shadow-[6px_6px_0px_#FF6B00]">
                    <div className="flex items-center gap-3 mb-5">
                      <Terminal />
                      <span className="font-black text-lg">
                        Agentic AI Orchestration
                      </span>
                    </div>

                    <div className="space-y-3 text-sm font-mono">
                      <TerminalLine>
                        Generate architecture for SaaS platform
                      </TerminalLine>

                      <TerminalOutput>
                        Multi-agent planning initialized...
                      </TerminalOutput>

                      <TerminalLine>
                        Creating PRD + sprint roadmap...
                      </TerminalLine>

                      <TerminalOutput>
                        Engineering workflow generated successfully
                      </TerminalOutput>
                    </div>
                  </div>

                  {/* SCREENSHOT */}
                  <div className="relative mt-8 min-h-[320px] bg-[#0d0d0d] border-[4px] border-dashed border-[#D9FF57] overflow-hidden">
                    <div className="absolute top-5 left-5 opacity-20">
                      <Orbit size={120} className="text-[#6E56FF]" />
                    </div>

                    <div className="absolute bottom-5 right-5 opacity-20">
                      <Binary size={120} className="text-[#FF6B00]" />
                    </div>

                    <div className="absolute top-5 right-5 bg-[#D9FF57] text-black border-[3px] border-white px-4 py-2 font-black shadow-[4px_4px_0px_#fff] rotate-3">
                      EXTENSION PREVIEW
                    </div>

                    <div className="p-6 relative z-10">
                      <img
                        src={screenshot1}
                        alt="Extension Preview"
                        className="w-full h-full object-cover rounded-none border-[4px] border-white shadow-[8px_8px_0px_#6E56FF]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOAT CARD */}
              <div className="absolute -bottom-10 right-0 bg-[#D9FF57] text-black border-[4px] border-white px-6 py-5 shadow-[8px_8px_0px_#ffffff] rotate-[5deg]">
                <div className="font-black text-3xl">LOCAL AI</div>
                <div className="font-bold">Powered by Ollama</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="py-28 px-6 border-y-[5px] border-[#1d1d1d]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 bg-[#6E56FF] border-[4px] border-white px-5 py-3 shadow-[6px_6px_0px_#fff] font-black uppercase mb-8">
              <Layers3 size={18} />
              Core Features
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-[0.95] max-w-5xl">
              AI-Native Engineering Workflows Built For Modern Developers
            </h2>

            <p className="text-zinc-400 text-xl max-w-3xl mt-8 leading-relaxed">
              Designed to streamline software planning, technical
              architecture, sprint management, and engineering execution using
              intelligent AI orchestration systems.
            </p>
          </div>

          {/* KEEPING BLUE SHADOW EFFECT */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -8,
                    rotate: idx % 2 === 0 ? -1 : 1,
                  }}
                  className="bg-[#111] border-[4px] border-white p-8 shadow-[10px_10px_0px_#1d1d1d] hover:shadow-[12px_12px_0px_#6E56FF] hover:border-[#D9FF57] hover:-translate-y-2 transition-all"
                >
                  <div className="w-16 h-16 bg-[#D9FF57] text-black border-[4px] border-white flex items-center justify-center shadow-[5px_5px_0px_#fff] mb-6">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-black mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-zinc-300 text-lg leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FF6B00] text-black border-[4px] border-white px-5 py-3 shadow-[6px_6px_0px_#fff] font-black uppercase mb-8">
                <Command size={18} />
                Workflow Pipeline
              </div>

              <h2 className="text-5xl md:text-7xl font-black leading-[0.95]">
                From Product Idea to Engineering Execution
              </h2>

              <p className="text-xl text-zinc-400 mt-8 leading-relaxed">
                The extension transforms high-level ideas into actionable
                engineering workflows using conversational AI and intelligent
                Agile orchestration.
              </p>
            </div>

            <div className="space-y-5">
              {workflow.map((step, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 8 }}
                  className="flex items-center justify-between bg-[#111] border-[4px] border-white p-6 shadow-[8px_8px_0px_#1d1d1d] hover:shadow-[8px_8px_0px_#6E56FF] transition-all"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-[#D9FF57] text-black border-[3px] border-white flex items-center justify-center font-black text-xl shadow-[4px_4px_0px_#fff]">
                      {idx + 1}
                    </div>

                    <div className="text-xl font-black">
                      {step}
                    </div>
                  </div>

                  <ChevronRight />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BEFORE TEAM */}
      <section
        id="launch"
        className="px-6 py-28 border-y-[5px] border-[#1d1d1d]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#D9FF57] text-black border-[5px] border-white p-12 md:p-16 shadow-[18px_18px_0px_#6E56FF] overflow-hidden">
            <div className="absolute right-[-40px] top-[-40px] opacity-10">
              <Orbit size={280} />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 border-[4px] border-black font-black uppercase shadow-[5px_5px_0px_#fff] mb-8">
                  <Rocket size={18} />
                  Launching Soon
                </div>

                <h2 className="text-5xl md:text-7xl font-black leading-[0.92]">
                  The Future of AI-Assisted Software Development
                </h2>
              </div>

              <div>
                <p className="text-xl leading-relaxed font-bold mb-8">
                  Built to accelerate engineering workflows using Agentic AI,
                  autonomous orchestration, conversational development, and
                  intelligent Agile planning systems.
                </p>

                <div className="flex flex-wrap gap-5">
                  {/* DOWNLOAD */}
                  <button className="group flex items-center gap-3 bg-black text-white px-8 py-5 border-[4px] border-black font-black text-lg shadow-[8px_8px_0px_#fff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    Download Coming Soon

                    <ArrowRight className="group-hover:translate-x-1 transition-all" />
                  </button>

                  {/* GITHUB */}
                  <a
                    href="https://github.com/yourusername/yourrepo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-8 py-5 border-[4px] border-black font-black text-lg shadow-[8px_8px_0px_#000] hover:-translate-y-1 transition-all"
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM LAST */}
      <section id="team" className="pt-28 pb-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#111] border-[4px] border-white px-5 py-3 shadow-[6px_6px_0px_#6E56FF] font-black uppercase mb-8">
              <Users size={18} />
              Developers
            </div>

            <h2 className="text-5xl md:text-7xl font-black">
              Meet The Team
            </h2>

            <p className="text-zinc-400 text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
              Built by developers passionate about AI-assisted engineering,
              intelligent orchestration systems, and modern developer tooling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {developers.map((dev, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  y: -10,
                  rotate: idx % 2 === 0 ? -1 : 1,
                }}
                className="bg-[#111] border-[4px] border-white overflow-hidden shadow-[10px_10px_0px_#1d1d1d] hover:shadow-[10px_10px_0px_#6E56FF] transition-all"
              >
                <div className="relative h-[340px] overflow-hidden">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-black">
                      {dev.name}
                    </h3>

                    <p className="text-[#D9FF57] font-bold text-lg mt-1">
                      {dev.role}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-zinc-400 leading-relaxed text-lg">
                    {dev.bio}
                  </p>

                  <div className="flex gap-4 mt-8">
                    <a
                      href={dev.email}
                      className="flex-1 text-center px-5 py-4 bg-[#FF6B00] text-black border-[3px] border-white font-black shadow-[5px_5px_0px_#fff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                    >
                      EMAIL
                    </a>

                    <a
                      href={dev.linkedin}
                      className="flex-1 text-center px-5 py-4 bg-[#6E56FF] text-white border-[3px] border-white font-black shadow-[5px_5px_0px_#fff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                    >
                      LINKEDIN
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="border-t border-[#1d1d1d]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-center">

          <p className="text-[15px] md:text-base font-semibold text-zinc-500 tracking-tight text-center">
            © 2026 AI-Assisted Agile · All rights reserved.
          </p>

        </div>
      </footer>      
    </div>
  );
}

function StatusBadge({ text }) {
  return (
    <div className="bg-[#111] border-[3px] border-white px-4 py-2 shadow-[5px_5px_0px_#6E56FF] font-black uppercase text-sm">
      {text}
    </div>
  );
}

function TerminalLine({ children }) {
  return (
    <div className="bg-[#141414] border-2 border-[#2a2a2a] px-4 py-3 text-zinc-300">
      <span className="text-[#D9FF57] mr-2">$</span>
      {children}
    </div>
  );
}

function TerminalOutput({ children }) {
  return (
    <div className="bg-[#FF6B00] text-black border-2 border-white px-4 py-3 font-bold">
      {children}
    </div>
  );
}