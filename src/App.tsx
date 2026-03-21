import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight, Shield, Code2, Sparkles, Layout, Check, Menu, X } from "lucide-react";
import React, { useRef, useState } from "react";

export default function App() {
  return (
    <>
      <div className="noise" />
      <Nav />
      <main className="relative w-full bg-[#050505] text-[#f5f5f5]">
        <Hero />
        <Tagline />
        <Services />
        <Work />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-50 mix-blend-difference text-white">
        <div className="font-display text-xl font-bold tracking-tighter uppercase">Deteroid</div>
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-[#00f0ff] transition-colors">
              {item.label}
            </a>
          ))}
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-sm uppercase tracking-widest font-medium hover:opacity-70 transition-opacity z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-xl z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display font-bold tracking-tighter hover:text-[#00f0ff] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      <motion.div 
        style={{ y, opacity, scale }}
        className="flex flex-col items-center z-10 w-full px-4"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[12vw] md:text-[10vw] leading-[0.85] tracking-tighter font-bold text-center max-w-6xl"
        >
          Where Vision<br/>Meets<br/>Execution
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-8 text-lg md:text-2xl font-light text-white/70 max-w-2xl text-center"
        >
          We craft digital experiences that don't just exist—they command attention, inspire action, and leave lasting impressions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 z-20"
        >
          <button className="bg-[#00f0ff] text-black px-8 py-4 rounded-full font-medium uppercase tracking-widest hover:bg-white transition-colors cursor-pointer">
            Explore Our Work
          </button>
          <button className="border border-white/20 bg-black/50 backdrop-blur-md px-8 py-4 rounded-full font-medium uppercase tracking-widest hover:bg-white/10 transition-colors text-white cursor-pointer">
            Start Your Project
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 flex items-center gap-4 text-sm uppercase tracking-widest text-white/50"
        >
          <span>Digital Agency</span>
          <div className="w-1 h-1 rounded-full bg-[#00f0ff]" />
          <span>Global</span>
        </motion.div>
      </motion.div>
      
      {/* Marquee */}
      <div className="absolute bottom-8 w-full overflow-hidden whitespace-nowrap opacity-[0.05] flex pointer-events-none z-0">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }} 
          className="flex gap-8 md:gap-12 font-display text-[6vw] uppercase tracking-tighter font-bold items-center"
        >
          <span>Web Design</span><span className="text-[#00f0ff]">•</span>
          <span>Development</span><span className="text-[#00f0ff]">•</span>
          <span>AI Integration</span><span className="text-[#00f0ff]">•</span>
          <span>Security</span><span className="text-[#00f0ff]">•</span>
          <span>Web Design</span><span className="text-[#00f0ff]">•</span>
          <span>Development</span><span className="text-[#00f0ff]">•</span>
          <span>AI Integration</span><span className="text-[#00f0ff]">•</span>
          <span>Security</span><span className="text-[#00f0ff]">•</span>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#00f0ff] rounded-full blur-[120px] opacity-10 mix-blend-screen" />
        <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-[#7000ff] rounded-full blur-[120px] opacity-10 mix-blend-screen" />
      </div>
    </section>
  );
}

function Tagline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const words = ["Design.", "Code.", "Secure."];

  return (
    <section ref={ref} className="py-32 md:py-64 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 md:gap-8">
        {words.map((word, i) => {
          const start = i * 0.2;
          const end = start + 0.3;
          const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
          const x = useTransform(scrollYProgress, [start, end], [-50, 0]);
          
          return (
            <motion.h2 
              key={word}
              style={{ opacity, x }}
              className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-none font-bold tracking-tighter"
            >
              {word}
            </motion.h2>
          );
        })}
      </div>
      <div className="mt-24 md:mt-32 max-w-2xl ml-auto">
        <p className="text-xl md:text-3xl font-light leading-relaxed text-white/70">
          Every pixel tells a story. Every interaction builds trust. Every line of code strengthens your foundation. We don't just build websites—we architect digital experiences that transform visitors into believers and believers into champions.
        </p>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Web Design",
    description: "Interfaces that breathe life into your brand. We design experiences that feel intuitive, look stunning, and convert effortlessly—because beauty and function aren't mutually exclusive.",
    icon: Layout,
  },
  {
    title: "Development",
    description: "Code that scales with your ambition. From lightning-fast performance to bulletproof architecture, we build digital foundations that grow stronger as your business expands.",
    icon: Code2,
  },
  {
    title: "AI Integration",
    description: "Intelligence that works while you sleep. We embed AI that learns, adapts, and amplifies your team's capabilities—turning data into decisions and automation into advantage.",
    icon: Sparkles,
  },
  {
    title: "Security",
    description: "Protection you can trust, invisibly. We fortify every layer of your digital presence so you can focus on growth, not threats—because peace of mind is priceless.",
    icon: Shield,
  },
];

function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-white text-[#050505] rounded-t-[3rem] md:rounded-t-[5rem] relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter">Our<br/>Expertise</h2>
          <p className="mt-6 md:mt-0 text-lg font-medium uppercase tracking-widest opacity-50">What we do best</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ServiceCard: React.FC<{ service: typeof services[0], index: number }> = ({ service, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 50%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
      className="group cursor-pointer"
    >
      <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-6">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm opacity-40">0{index + 1}</span>
          <service.icon className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-4 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
      </div>
      <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">{service.title}</h3>
      <p className="text-lg text-black/60 leading-relaxed max-w-sm">{service.description}</p>
    </motion.div>
  );
}

const projects = [
  { title: "Nexus Protocol", category: "Web3 Security", img: "https://picsum.photos/seed/nexus/1200/1200?blur=2", span: "md:col-span-2", aspect: "aspect-[16/9]" },
  { title: "Aura Finance", category: "Fintech Platform", img: "https://picsum.photos/seed/aura/800/1000?blur=2", span: "md:col-span-1", aspect: "aspect-[4/5]" },
  { title: "Nova AI", category: "AI Interface", img: "https://picsum.photos/seed/nova/800/1000?blur=2", span: "md:col-span-1", aspect: "aspect-[4/5]" },
  { title: "Vanguard", category: "Zero-Trust Architecture", img: "https://picsum.photos/seed/vanguard/1200/800?blur=2", span: "md:col-span-2", aspect: "aspect-[21/9]" }
];

function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-[#050505] text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter">Selected<br/>Works</h2>
          <p className="mt-6 md:mt-0 text-lg font-medium uppercase tracking-widest opacity-50">Pushing boundaries</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((p, i) => (
            <div key={p.title} className={`group relative cursor-pointer flex flex-col ${p.span}`}>
              <div className={`overflow-hidden rounded-3xl ${p.aspect} bg-white/5 relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src={p.img} alt={p.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                
                {/* Hover Overlay Content */}
                <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                   <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                     <p className="text-[#00f0ff] uppercase tracking-widest text-sm font-medium mb-3">{p.category}</p>
                     <h3 className="font-display text-4xl md:text-6xl font-bold text-white">{p.title}</h3>
                   </div>
                </div>
                
                <button className="absolute top-8 right-8 z-20 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const plans = [
  { name: "Ignite", price: "$10k", desc: "For startups ready to make their mark.", features: ["Brand Identity & Strategy", "High-Converting Landing Page", "Essential Security Foundation"] },
  { name: "Ascend", price: "$25k", desc: "For companies scaling with purpose.", features: ["Full-Stack Web Application", "Custom AI Integration", "Comprehensive Security Audit"] },
  { name: "Fortress", price: "Custom", desc: "For enterprises demanding excellence.", features: ["Dedicated Engineering Team", "Enterprise-Grade Security", "Ongoing Optimization & Support"] }
];

function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6">Investment</h2>
          <p className="text-white/50 text-lg uppercase tracking-widest">Clear pricing. Exceptional value. Zero surprises.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="border border-white/10 rounded-3xl p-8 md:p-12 hover:border-[#00f0ff]/50 transition-colors bg-black/20 backdrop-blur-sm flex flex-col">
              <h3 className="font-display text-3xl font-bold mb-2">{plan.name}</h3>
              <p className="text-white/50 mb-8 h-12">{plan.desc}</p>
              <div className="text-5xl font-display font-bold mb-8">{plan.price}<span className="text-lg text-white/30 font-sans font-normal">{plan.price !== "Custom" ? "+" : ""}</span></div>
              <ul className="flex flex-col gap-4 mb-12 flex-grow">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-[#00f0ff]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-full border border-white/20 font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer">Select Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#050505] text-white relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-8">Let's build<br/>something<br/>remarkable</h2>
          <p className="text-xl text-white/60 mb-12 max-w-md">Every great project starts with a conversation. Share your vision with us, and we'll respond within 24 hours with insights, ideas, and a clear path forward.</p>
          <div className="flex flex-col gap-6 font-mono text-sm opacity-60">
            <p>hello@deteroid.agency</p>
            <p>+1 (555) 000-0000</p>
            <p>100 Cybernetics Way<br/>San Francisco, CA 94105</p>
          </div>
        </div>
        <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-sm uppercase tracking-widest opacity-50 font-medium">Name</label>
            <input type="text" className="bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-[#00f0ff] transition-colors rounded-none" placeholder="John Doe" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm uppercase tracking-widest opacity-50 font-medium">Email</label>
            <input type="email" className="bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-[#00f0ff] transition-colors rounded-none" placeholder="john@example.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm uppercase tracking-widest opacity-50 font-medium">Project Details</label>
            <textarea className="bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-[#00f0ff] transition-colors resize-none h-32 rounded-none" placeholder="What's your vision? What problem are you solving?"></textarea>
          </div>
          <button className="bg-white text-black px-8 py-4 rounded-full font-medium uppercase tracking-widest hover:bg-[#00f0ff] transition-colors self-start mt-4 cursor-pointer">Start the Conversation</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-12 pb-12 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm opacity-50 font-mono">
          <p>&copy; {new Date().getFullYear()} Deteroid Agency.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#00f0ff] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#00f0ff] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#00f0ff] transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
