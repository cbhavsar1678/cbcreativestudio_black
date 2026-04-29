import { motion } from 'motion/react';

const timeline = [
  { year: '2009', title: 'Foundations', description: 'Started the journey in digital design, focusing on core principles of UI and typography.' },
  { year: '2013', title: 'Agency Era', description: 'Led creative teams for global brands, delivering award-winning digital experiences.' },
  { year: '2017', title: 'Product Leadership', description: 'Shifted focus to Product Management, bridging the gap between business strategy and user needs.' },
  { year: '2021', title: 'CB Creative Studio', description: 'Founded the studio to offer bespoke design and strategic advisory for high-end digital products.' },
  { year: 'Present', title: 'Digital Legacies', description: 'Continuing to shape future-proof products with a blend of royal aesthetics and data-driven strategy.' },
];

export default function Studio() {
  return (
    <div className="px-12 py-32 bg-bg-deep">
      <div className="max-w-6xl mx-auto">
        <header className="mb-32">
          <span className="text-gold tracking-[0.4em] uppercase text-xs mb-8 block font-medium">The Studio</span>
          <h1 className="text-7xl md:text-9xl font-serif font-light mb-12">
            A Legacy of <br />
            <span className="italic text-gold">Refinement</span>
          </h1>
          <p className="text-2xl font-light text-white/70 max-w-3xl leading-relaxed">
            With over 15 years of industry-leading experience, we combine the heritage of classic design with the precision of modern product management.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-48">
          <div>
            <h2 className="text-4xl font-serif mb-8 border-b border-gold/30 pb-4">Philosophy</h2>
            <p className="text-white/60 leading-relaxed space-y-6">
              We believe that true luxury in the digital space isn't about excess—it's about intentionality. Every pixel, every interaction, and every strategic decision is made with the goal of creating a lasting impression.
              <br /><br />
              Our approach is holistic: we don't just build interfaces; we build systems that endure and strategies that win.
            </p>
          </div>
          <div className="aspect-square bg-white/5 border border-white/10 relative overflow-hidden group">
             <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
              alt="Studio" 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gold/20 text-9xl font-serif select-none italic">Quality</span>
             </div>
          </div>
        </div>

        {/* Timeline */}
        <section>
          <h2 className="text-5xl font-serif mb-20 italic">The Journey</h2>
          <div className="relative space-y-24">
            <div className="absolute left-[7px] top-4 bottom-4 w-[1px] bg-white/10 md:block hidden" />
            
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-12 flex flex-col md:flex-row gap-8"
              >
                <div className="absolute left-0 top-[10px] w-4 h-4 bg-bg-deep border border-gold rounded-full z-10 md:block hidden" />
                <div className="text-gold font-serif text-3xl md:w-32 shrink-0">{item.year}</div>
                <div className="space-y-4 max-w-xl">
                  <h3 className="text-2xl font-serif text-white">{item.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
