import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Inquiry() {
  return (
    <div className="px-12 py-32 bg-bg-deep min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-32">
        <header>
          <span className="text-gold tracking-[0.4em] uppercase text-xs mb-8 block font-medium">Inquiry</span>
          <h1 className="text-7xl md:text-9xl font-serif font-light mb-12">
            Start a <br />
            <span className="italic text-gold">Conversation</span>
          </h1>
          <p className="text-xl font-light text-white/50 max-w-md leading-relaxed">
            We are currently accepting new projects for Q3 2024. Reach out to discuss how we can work together.
          </p>
        </header>

        <section className="space-y-16">
          <div className="space-y-4 p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <h2 className="text-gold tracking-widest uppercase text-xs mb-6">Contact Details</h2>
            <div className="flex items-center gap-4 group cursor-pointer">
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                  <Mail className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors" />
               </div>
               <div>
                  <span className="text-white/40 block text-xs uppercase tracking-tighter">Email</span>
                  <span className="text-lg font-serif">studio@cbcreative.in</span>
               </div>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer py-4 border-t border-white/5">
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold transition-colors">
                  <Phone className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors" />
               </div>
               <div>
                  <span className="text-white/40 block text-xs uppercase tracking-tighter">Direct</span>
                  <span className="text-lg font-serif">+91 98765 43210</span>
               </div>
            </div>
          </div>

          <div>
            <h2 className="text-gold tracking-widest uppercase text-xs mb-8">Social Ecosystem</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Instagram', icon: Instagram, handle: '@cbcreativestudio' },
                { name: 'LinkedIn', icon: Linkedin, handle: '/in/cbhavsar' },
                { name: 'Twitter', icon: Twitter, handle: '@cb_studio' },
                { name: 'Dribbble', icon: ArrowUpRight, handle: 'cb_creative' },
              ].map((social) => (
                <a 
                  key={social.name} 
                  href="#" 
                  className="flex items-center gap-4 p-6 border border-white/5 hover:border-gold/30 hover:bg-gold/5 transition-all group"
                >
                  <social.icon className="w-5 h-5 text-white/30 group-hover:text-gold transition-colors" />
                  <div className="flex flex-col">
                    <span className="text-xs text-white/20 uppercase tracking-widest">{social.name}</span>
                    <span className="text-sm font-serif group-hover:text-white transition-colors">{social.handle}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
