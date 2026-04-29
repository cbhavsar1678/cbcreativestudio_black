import { motion } from 'motion/react';

const timeline = [
  { year: '2009', title: 'Foundations of Craft', description: 'Established as an independent designer in Mumbai, focusing on the intersection of art and digital typography.' },
  { year: '2011', title: 'Visual Identity Evolution', description: 'Partnered with boutique luxury brands to define their digital presence across early mobile interfaces.' },
  { year: '2013', title: 'Creative Direction', description: 'Led a cross-disciplinary team at a boutique agency, delivering award-winning campaigns for automotive giants.' },
  { year: '2015', title: 'Product Strategy Pivot', description: 'Began integrating rigorous user research and business goals into design workflows for fintech startups.' },
  { year: '2017', title: 'Enterprise Leadership', description: 'Headed design for a global SaaS platform, overseeing product strategy for 5M+ active users.' },
  { year: '2019', title: 'Strategic Advisory', description: 'Consulted for Fortune 500 companies on brand evolution and digital product roadmaps.' },
  { year: '2021', title: 'CB Creative Studio Launch', description: 'Brought together a localized collective of elitists in design and strategy to serve high-end clients.' },
  { year: 'Present', title: 'Digital Legacies', description: 'Shaping the next generation of products with a focus on longevity, luxury, and technical excellence.' },
];

export default function Studio() {
  return (
    <div className="bg-bg-deep min-h-screen">
      <div className="flex flex-col md:flex-row border-b border-gold/10">
        <header className="md:w-3/5 p-16 flex flex-col justify-center border-r border-gold/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold tracking-[0.4em] uppercase text-[10px] mb-8 block font-bold">Studio Heritage</span>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-light mb-12 uppercase leading-[0.9]">
              A Legacy of <br />
              <span className="italic text-gold">Refinement</span>
            </h1>
            <p className="text-lg font-light text-text-muted max-w-xl leading-relaxed py-6 border-y border-gold/10">
              With 15+ years of design and product leadership, we combine the heritage of classic design with the precision of modern strategy.
            </p>
          </motion.div>
        </header>
        <div className="md:w-2/5 p-12 bg-bg-alt flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale" />
           <div className="relative z-10 text-center">
              <span className="font-serif italic text-gold/30 text-8xl md:text-[12rem] select-none">Studio</span>
           </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <section className="md:w-1/3 p-16 border-r border-gold/10">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-10 font-bold">The Core Philosophy</h2>
          <div className="space-y-8">
            <p className="text-sm text-text-muted leading-[1.8] font-light">
              We believe that true luxury in the digital space isn't about excess—it's about intentionality. Every pixel, every interaction, and every strategic decision is made with the goal of creating a lasting impression.
            </p>
            <p className="text-sm text-text-muted leading-[1.8] font-light">
              Our approach is holistic: we don't just build interfaces; we build systems that endure and strategies that win. We bridge the gap between creative vision and technical execution.
            </p>
          </div>
        </section>

        <section className="md:w-2/3 p-16">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-16 font-bold">Timeline of Excellence</h2>
          <div className="relative space-y-16">
            <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gold/10" />
            
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="relative pl-12 group"
              >
                <div className="absolute left-[-2px] top-1 w-1 h-1 bg-gold rounded-full transform group-hover:scale-150 transition-transform" />
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                   <span className="text-gold font-serif text-3xl group-hover:italic transition-all">{item.year}</span>
                   <div className="space-y-2">
                     <h3 className="text-xl uppercase tracking-widest text-white font-medium">{item.title}</h3>
                     <p className="text-xs text-text-muted font-light leading-relaxed max-w-xl">{item.description}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
