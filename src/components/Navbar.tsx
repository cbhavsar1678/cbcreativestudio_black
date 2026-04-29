import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Studio', path: '/studio' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Inquiry', path: '/inquiry' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center px-12 py-8 border-b border-gold/20 bg-bg-deep">
      <Link to="/" className="hover:opacity-80 transition-opacity">
        <Logo />
      </Link>

      <div className="flex gap-10 text-[11px] uppercase tracking-[0.15em] font-medium">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`relative transition-colors ${
                isActive ? 'text-gold border-b border-gold pb-1' : 'text-white/60 hover:text-gold'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
