/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Shield, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Cpu, 
  Layers, 
  Database, 
  Globe,
  Award,
  BookOpen,
  MapPin,
  FileText
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Root');

  const navItems = ['Root', 'Identity', 'Logs', 'Mail'];

  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Pipelines Deployed', value: '20+' },
    { label: 'Uptime Target', value: '99.9%' },
    { label: 'Security Cleared', value: 'SDE-III' }
  ];

  const experience = [
    {
      period: 'OCT 2025 – PRESENT',
      role: 'SENIOR SOFTWARE DEVELOPMENT ENGINEER',
      company: 'ZSCALER | PLATFORM ENGINEERING',
      description: 'Optimized automation reliability and internal metrics pipelines, improving SLA compliance by 35%. Worked across backend services and integrations to improve observability.',
      tags: ['KUBERNETES', 'GO', 'PLATFORM']
    },
    {
      period: 'SEPT 2024 – SEPT 2025',
      role: 'SOFTWARE DEVELOPMENT ENGINEER',
      company: 'ZSCALER | PLATFORM ENGINEERING',
      description: 'Built a Slackbot integrating Jira and Confluence using Node.js, adopted by 1000+ employees. Automated ticket routing, reducing IT response time by 40%.',
      tags: ['NODE.JS', 'SLACK API', 'JIRA']
    },
    {
      period: 'FEB 2024 – SEPT 2024',
      role: 'SOFTWARE DEVELOPMENT INTERN',
      company: 'ZSCALER | ZPA ADMIN UI',
      description: 'Migrated legacy Backbone.js views to React, reducing bundle size. Authored E2E test cases, cutting QA cycles by 30%.',
      tags: ['REACT', 'TDD', 'BACKBONE.JS']
    }
  ];

  const projects = [
    {
      title: 'Bideo.tech',
      subtitle: 'Video Streaming Platform',
      description: 'Scalable video platform supporting background encoding (FFmpeg) and secure playback. Designed a distributed job queue using RabbitMQ.',
      tech: ['SPRING BOOT', 'NEXT.JS', 'RABBITMQ', 'REDIS'],
      icon: <Globe className="text-primary" size={24} />
    },
    {
      title: 'Travel Buddy',
      subtitle: 'Ride Sharing Platform',
      description: 'Campus ride-sharing app with live tracking. Facilitated 100+ rides during campus events with real-time updates.',
      tech: ['REACT', 'NODE.JS', 'MONGODB'],
      icon: <MapPin className="text-primary" size={24} />
    }
  ];

  const skills = [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Java', 'C++', 'Python', 'Go', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Backbone.js'] },
    { category: 'Backend', items: ['Spring Boot', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Infra & Systems', items: ['RabbitMQ', 'AWS S3', 'Redis', 'Firebase Auth', 'Docker', 'Kubernetes', 'Jenkins', 'Git'] }
  ];

  return (
    <div className="min-h-screen selection:bg-primary selection:text-surface">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-primary/10">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-primary uppercase font-headline">
            ARCHITECT_OS
          </div>
          <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`text-sm uppercase tracking-widest transition-all ${
                  activeTab === item ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-on-surface-variant">
              <Terminal size={20} className="hover:text-primary cursor-pointer transition-colors" />
              <Shield size={20} className="hover:text-primary cursor-pointer transition-colors" />
            </div>
            <a 
              href="#" 
              className="bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 rounded-lg font-headline text-sm hover:bg-primary/20 transition-all"
            >
              RESUME.PDF
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24 min-h-screen">
        {/* Hero Section */}
        <section className="relative px-8 py-20 max-w-screen-2xl mx-auto flex flex-col items-start gap-12">
          <div className="absolute top-0 right-0 w-1/2 h-full cyber-grid mask-radial opacity-40 pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="z-10 w-full lg:w-2/3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-headline text-[10px] uppercase tracking-[0.2em] text-primary">System Online // v2.0.4</span>
            </div>
            
            <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
              RAJIT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">KUTHIALA</span>
            </h1>
            
            <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
              Senior Software Development Engineer specializing in high-scale infrastructure and secure backend architectures. Engineering resilient systems for the next era of computation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-br from-primary to-primary-dim text-surface px-8 py-4 rounded-lg font-headline font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                Initialize Project
              </button>
              <button className="bg-surface-container text-on-surface px-8 py-4 rounded-lg font-headline font-bold uppercase tracking-widest text-sm border border-primary/10 hover:bg-surface-container-high transition-all">
                View Stack
              </button>
            </div>
          </motion.div>

          {/* Stats Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-primary/10 pt-12 mt-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-primary font-headline text-3xl font-bold">{stat.value}</div>
                <div className="text-on-surface-variant text-[10px] uppercase tracking-widest mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Architecture (Bento Grid) */}
        <section className="px-8 py-24 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-headline text-3xl font-bold mb-16 uppercase tracking-widest flex items-center gap-4">
              <span className="w-12 h-[2px] bg-primary" />
              Core_Architecture
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Featured Publication */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-8 bg-surface-container p-8 rounded-xl border border-primary/10 relative overflow-hidden group"
              >
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded text-[10px] font-headline tracking-widest uppercase mb-6 inline-block">Published // Scientific Reports</span>
                    <h3 className="font-headline text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Neural Network Optimization for High-Throughput Data Streams</h3>
                    <p className="text-on-surface-variant leading-relaxed max-w-xl">A deep-dive analysis on reducing latency in distributed systems using asynchronous message brokering and predictive scaling algorithms.</p>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <span className="text-[10px] font-headline text-on-surface-variant uppercase tracking-widest">Identifier: nature.com/articles/s41598-023</span>
                    <a href="#" className="text-primary flex items-center gap-2 text-sm font-bold uppercase tracking-wider group/link">
                      Read Journal
                      <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
                <div className="absolute bottom-[-10%] right-[-5%] opacity-5 group-hover:opacity-10 transition-opacity">
                  <FileText size={240} />
                </div>
              </motion.div>

              {/* Protocol Stack */}
              <div className="md:col-span-4 bg-surface-container-high p-8 rounded-xl border border-primary/10">
                <h4 className="font-headline text-xs font-bold uppercase tracking-widest mb-8 text-primary">Protocol_Stack</h4>
                <div className="space-y-6">
                  {skills.map(skill => (
                    <div key={skill.category}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">{skill.category}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map(item => (
                          <span key={item} className="px-2 py-1 bg-surface-container-lowest rounded text-[10px] font-headline text-primary border border-primary/5">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              {projects.map((project, idx) => (
                <motion.div 
                  key={project.title}
                  whileHover={{ y: -5 }}
                  className="md:col-span-6 group cursor-pointer"
                >
                  <div className="bg-surface-container-lowest rounded-xl border border-primary/10 overflow-hidden aspect-video relative">
                    <div className="absolute inset-0 cyber-grid opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <div className="mb-4">{project.icon}</div>
                      <h4 className="font-headline text-2xl font-bold mb-2 uppercase tracking-tight">{project.title}</h4>
                      <p className="text-sm text-on-surface-variant max-w-sm mb-4">{project.description}</p>
                      <div className="flex gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="text-[9px] font-headline text-primary/60 border border-primary/20 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Log History (Experience) */}
        <section className="px-8 py-24 max-w-screen-2xl mx-auto">
          <h2 className="font-headline text-3xl font-bold mb-16 uppercase tracking-widest flex items-center gap-4">
            <span className="w-12 h-[2px] bg-primary" />
            Log_History
          </h2>
          
          <div className="space-y-4">
            {experience.map((exp, idx) => (
              <motion.div 
                key={exp.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface-container-low p-6 rounded-lg border-l-4 border-primary/30 hover:border-primary hover:bg-surface-container-high transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-6">
                  <div className="font-headline text-[10px] text-on-surface-variant w-24 tracking-widest">{exp.period}</div>
                  <div>
                    <div className="text-primary font-headline font-bold uppercase tracking-tight">{exp.role}</div>
                    <div className="text-xs text-on-surface-variant font-headline uppercase tracking-widest mb-2">{exp.company}</div>
                    <div className="text-sm text-on-surface-variant max-w-2xl leading-relaxed">{exp.description}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-surface-container-highest rounded text-[9px] font-headline text-on-surface-variant tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact / Message Input */}
        <section className="px-8 py-24 mb-12">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-surface-container-high to-surface-container p-12 rounded-2xl border border-primary/20 text-center relative overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
            <h2 className="font-headline text-4xl font-bold mb-6 tracking-tight uppercase">ESTABLISH_CONNECTION</h2>
            <p className="text-on-surface-variant mb-10 max-w-lg mx-auto">
              Currently open to new opportunities in Product, Backend, or Frontend Engineering. 
              Let's build something resilient.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto relative z-10">
              <input 
                type="email" 
                placeholder="ENTER_EMAIL_PROTOCOL"
                className="flex-1 bg-surface-container-lowest border border-primary/10 rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary/40 outline-none text-on-surface font-headline text-xs uppercase tracking-widest"
              />
              <button className="bg-primary text-surface font-headline font-bold px-8 py-4 rounded-lg uppercase tracking-widest text-sm hover:brightness-110 active:scale-95 transition-all">
                Connect
              </button>
            </div>
            
            <div className="flex justify-center gap-8 mt-12 text-on-surface-variant">
              <a href="https://github.com/rajitk13" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-headline">
                <Github size={16} /> Github
              </a>
              <a href="https://linkedin.com/in/rajitkuthiala" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-headline">
                <Linkedin size={16} /> Linkedin
              </a>
              <a href="mailto:rajitkuthiala@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-headline">
                <Mail size={16} /> Mail
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-primary/10 bg-surface">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-screen-2xl mx-auto gap-6 font-headline text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
          <div>
            © 2026 ARCHITECT_OS // RAJIT_KUTHIALA // BENGALURU, INDIA
          </div>
          <div className="flex gap-8">
            <span>+91 REMOVED</span>
            <a href="#" className="hover:text-primary transition-colors">Documentation</a>
            <a href="#" className="hover:text-primary transition-colors">Security</a>
            <a href="#" className="hover:text-primary transition-colors">Protocol</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
