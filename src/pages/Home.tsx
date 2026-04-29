import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const signatureWork = [
  { title: 'Luxe Real Estate', year: '2023', progress: '33%' },
  { title: 'Fintech OS v2', year: '2022', progress: '0%' },
  { title: 'The Heritage Club', year: '2021', progress: '0%' },
];

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-160px)]">
      {/* Left Section: Main Hero */}
      <section className="md:w-3/5 p-16 flex flex-col justify-center border-r border-gold/10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6">
            <span className="text-gold font-serif italic text-lg opacity-80 tracking-wide">EST. 2009</span>
          </div>
          <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-10 text-white uppercase tracking-tighter">
            Crafting <br />
            <span className="italic font-light text-gold/90">Digital</span> <br />
            Legacies.
          </h1>
          <p className="max-w-md text-text-muted text-sm leading-relaxed mb-12 font-light">
            A bespoke design studio dedicated to high-end product leadership and strategic brand evolution for visionaries.
          </p>
          <div className="flex gap-8">
            <Link to="/inquiry" className="px-10 py-4 bg-gold text-bg-deep text-[10px] uppercase tracking-[0.25em] font-bold hover:brightness-110 transition-all text-center">
              Start Project
            </Link>
            <Link to="/portfolio" className="px-10 py-4 border border-gold/40 text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-gold/5 transition-all text-center">
              View Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Right Section: Secondary Details */}
      <section className="md:w-2/5 flex flex-col bg-bg-deep">
        <div className="p-12 border-b border-gold/10 flex-1 flex flex-col justify-center">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-10 font-bold">Signature Work</h3>
          <div className="space-y-12">
            {signatureWork.map((work, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + (idx * 0.15), ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                <div className="flex justify-between items-end mb-3">
                  <h4 className="font-serif text-2xl group-hover:text-gold transition-colors duration-500 font-normal tracking-tight">{work.title}</h4>
                  <span className="text-[9px] opacity-30 uppercase tracking-[0.2em] font-bold">{work.year}</span>
                </div>
                <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
                  {work.progress !== '0%' && (
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originX: 0 }}
                      className="absolute left-0 top-0 h-full w-1/3 bg-gold" 
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-12 flex-1 flex flex-col justify-end bg-bg-alt">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-gold mb-1 font-bold">Studio Timeline</p>
                <p className="text-xs text-text-muted font-light">15+ Years of Design Leadership</p>
              </div>
            </div>
            <div className="pt-4 flex gap-6 grayscale opacity-40 text-[10px] tracking-widest uppercase font-medium">
              <span className="hover:opacity-100 cursor-pointer transition-opacity">Instagram</span>
              <span className="hover:opacity-100 cursor-pointer transition-opacity">LinkedIn</span>
              <span className="hover:opacity-100 cursor-pointer transition-opacity">Behance</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
