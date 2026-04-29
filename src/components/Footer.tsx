import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-12 py-6 bg-bg-footer border-t border-gold/10">
      <div className="text-[10px] text-zinc-600 tracking-widest uppercase">
        CB CREATIVE STUDIO &copy; 2024
      </div>
      <div className="flex items-center gap-6">
        <span className="text-[10px] tracking-widest uppercase text-gold font-bold">Inquiry: +91 9900 123 456</span>
        <div className="w-1 h-1 bg-gold rounded-full"></div>
        <span className="text-[10px] tracking-widest uppercase text-white/60">hello@cbcreative.in</span>
      </div>
    </footer>
  );
}
