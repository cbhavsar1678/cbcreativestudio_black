import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Inquiry() {
  return (
    <div className="bg-bg-deep min-h-screen flex flex-col md:flex-row">
      <header className="md:w-3/5 p-16 flex flex-col justify-center border-r border-gold/10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-gold tracking-[0.4em] uppercase text-[10px] mb-8 block font-bold">Inquiry</span>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-light mb-12 leading-[0.9] uppercase">
            Start a <br />
            <span className="italic text-gold">Conversation</span>
          </h1>
          <div className="max-w-md p-8 bg-bg-alt border border-gold/10">
            <p className="text-sm font-light text-text-muted leading-relaxed">
              We are currently accepting new projects for Q3 2024. Connect with us to discuss how we can craft your next digital legacy.
            </p>
          </div>
        </motion.div>
      </header>

      <section className="md:w-2/5 p-16 flex flex-col justify-between bg-bg-deep gap-16">
        <div className="space-y-12">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-12 font-bold">Liaison</h2>
          
          <div className="group cursor-pointer">
             <span className="text-white/20 block text-[9px] uppercase tracking-widest mb-1">Electronic Mail</span>
             <h3 className="text-2xl font-serif group-hover:text-gold transition-colors duration-500">studio@cbcreative.in</h3>
             <div className="h-[1px] w-0 group-hover:w-full bg-gold transition-all duration-700 mt-2" />
          </div>

          <div className="group cursor-pointer pt-8">
             <span className="text-white/20 block text-[9px] uppercase tracking-widest mb-1">Direct Line</span>
             <h3 className="text-2xl font-serif group-hover:text-gold transition-colors duration-500">+91 9900 123 456</h3>
             <div className="h-[1px] w-0 group-hover:w-full bg-gold transition-all duration-700 mt-2" />
          </div>
        </div>

        <div>
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-8 font-bold">Digital Presence</h2>
          <div className="grid grid-cols-2 gap-px bg-gold/10 border border-gold/10">
            {[
              { name: 'Instagram', handle: '@cbcreative' },
              { name: 'LinkedIn', handle: '/in/cbhavsar' },
              { name: 'Behance', handle: 'cb_studio' },
              { name: 'Dribbble', handle: 'cb_creative' },
            ].map((social) => (
              <a 
                key={social.name} 
                href="#" 
                className="bg-bg-deep p-6 hover:bg-bg-alt transition-all group"
              >
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/40 uppercase tracking-widest group-hover:text-gold transition-colors mb-1">{social.name}</span>
                  <span className="text-[9px] font-sans text-white/20 tracking-tighter uppercase font-bold">{social.handle}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
