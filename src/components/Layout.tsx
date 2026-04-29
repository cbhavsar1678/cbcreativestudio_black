import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col selection:bg-gold selection:text-bg-deep app-frame relative">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      
      {/* Decorative lines from theme */}
      <div className="absolute top-1/2 left-0 w-24 h-[1px] bg-gold/30 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-12 h-[1px] bg-gold/30 pointer-events-none"></div>
    </div>
  );
}
