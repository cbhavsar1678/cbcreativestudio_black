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
    <div className="px-12 py-32 bg-bg-deep">
      <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-10">
        <div>
          <span className="text-gold tracking-[0.4em] uppercase text-xs mb-8 block font-medium">Selected Works</span>
          <h1 className="text-7xl font-serif font-light italic">The Portfolio</h1>
        </div>
        <div className="mt-8 md:mt-0 flex gap-6 text-white/40 uppercase text-[10px] tracking-widest font-semibold flex-wrap">
          <button className="text-white border-b border-gold pb-1 transition-all">All Projects</button>
          <button className="hover:text-white transition-all">UI/UX Design</button>
          <button className="hover:text-white transition-all">Product Management</button>
          <button className="hover:text-white transition-all">Strategy</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 relative">
         {/* Grid lines - purely decorative for that 'Recipe 1' feel */}
         <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-[1px] bg-white/5 z-0" />
         <div className="hidden lg:block absolute left-2/3 top-0 bottom-0 w-[1px] bg-white/5 z-0" />

        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative h-[450px] overflow-hidden bg-white/5 border border-white/5"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               <span className="text-gold tracking-widest uppercase text-[10px] mb-2 block">{project.category}</span>
               <h3 className="text-3xl font-serif text-white mb-4">{project.title}</h3>
               <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 border border-white/20 text-white/60 uppercase">{tag}</span>
                  ))}
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
