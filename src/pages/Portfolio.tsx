import { motion } from 'motion/react';

const projects = [
  { title: 'Royal Onyx', category: 'UI/UX Design', tags: ['Fintech', 'Luxury'], image: 'https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Strategic Edge', category: 'Product Strategy', tags: ['Consultancy', 'Growth'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop' },
  { title: 'Ethereal Flow', category: 'Brand Identity', tags: ['Lifestyle', 'Design'], image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop' },
  { title: 'Quartz Alpha', category: 'Product Management', tags: ['SaaS', 'B2B'], image: 'https://images.unsplash.com/photo-1454165833767-027508496b4c?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Solaris Web', category: 'UI/UX Design', tags: ['Clean Tech', 'Innovation'], image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Neo Heritage', category: 'Brand Strategy', tags: ['Classical', 'Modern'], image: 'https://images.unsplash.com/photo-1449156001935-d28605253671?q=80&w=2070&auto=format&fit=crop' },
];

export default function Portfolio() {
  return (
    <div className="bg-bg-deep min-h-screen">
      <header className="p-16 border-b border-gold/10 flex flex-col md:flex-row justify-between items-end gap-8">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-gold tracking-[0.4em] uppercase text-[10px] mb-6 block font-bold">The Showcase</span>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-light italic leading-[0.8] uppercase">
            Curated <br /><span className="text-white not-italic font-normal">Works.</span>
          </h1>
        </motion.div>
        
        <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] font-bold text-text-muted pb-2">
           <button className="text-gold border-b border-gold pb-1 transition-all">All</button>
           <button className="hover:text-white transition-all">UI/UX</button>
           <button className="hover:text-white transition-all">Product</button>
           <button className="hover:text-white transition-all">Strategy</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className={`group relative h-[500px] overflow-hidden border-gold/10 border-b ${idx % 3 !== 2 ? 'lg:border-r' : ''} ${idx % 2 !== 1 ? 'md:border-r' : ''}`}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-all duration-[1.5s] grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 bg-bg-deep/40 group-hover:bg-bg-deep/10 transition-colors duration-700" />
            <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-700 m-4" />

            <div className="absolute bottom-12 left-12 right-12 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
               <div className="flex justify-between items-end">
                  <div>
                    <span className="text-gold tracking-[0.3em] uppercase text-[9px] mb-2 block font-bold">{project.category}</span>
                    <h3 className="text-4xl font-serif text-white">{project.title}</h3>
                  </div>
                  <div className="h-0.5 w-12 bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />
               </div>
               
               <div className="mt-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[8px] px-3 py-1 border border-white/20 text-text-muted uppercase tracking-widest">{tag}</span>
                  ))}
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
