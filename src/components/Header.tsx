import React, { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import logoImgSrc from '../assets/images/locosync_navy_logo_1782483836513.jpg';

interface HeaderProps {
  onScrollTo: (elementId: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-[#d4af37]/20 backdrop-blur-md shadow-sm animate-none" id="site-header">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <img 
            src={logoImgSrc} 
            alt="LOCOSYNC" 
            className="h-[60px] w-[60px] object-contain rounded-md border border-[#d4af37]/10"
            referrerPolicy="no-referrer"
          />
          <span className="text-[#0f172a] group-hover:text-[#d4af37] text-xl sm:text-2xl font-black tracking-widest transition-colors font-sans">
            LOCOSYNC
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 lg:gap-8">
            <li>
              <button 
                onClick={() => handleNavClick('features')}
                className="text-gray-600 hover:text-[#d4af37] text-sm font-medium transition-colors cursor-pointer"
              >
                特徴
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('services')}
                className="text-gray-600 hover:text-[#d4af37] text-sm font-medium transition-colors cursor-pointer"
              >
                サービス
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('pricing')}
                className="text-gray-600 hover:text-[#d4af37] text-sm font-medium transition-colors cursor-pointer"
              >
                料金プラン
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('flow')}
                className="text-gray-600 hover:text-[#d4af37] text-sm font-medium transition-colors cursor-pointer"
              >
                ご成約の流れ
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-[#d4af37] hover:bg-transparent border border-[#0f172a] hover:border-[#d4af37] px-4 py-1.5 rounded-sm text-[#0f172a] hover:text-[#d4af37] text-sm font-bold transition-all duration-300 shadow-sm cursor-pointer inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>お問い合わせ</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Smartphone Hamburger Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-800 hover:text-[#d4af37] focus:outline-none transition-colors cursor-pointer"
          aria-label="Toggle Menu"
          id="hamburger"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#0f172a] border-b-2 border-[#d4af37] px-6 py-6 transition-all duration-300 origin-top shadow-lg ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible h-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col gap-5 text-center">
          <li>
            <button 
              onClick={() => handleNavClick('features')}
              className="text-gray-300 hover:text-[#d4af37] text-base font-medium py-1 w-full text-center"
            >
              特徴
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('services')}
              className="text-gray-300 hover:text-[#d4af37] text-base font-medium py-1 w-full text-center"
            >
              サービス
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('pricing')}
              className="text-gray-300 hover:text-[#d4af37] text-base font-medium py-1 w-full text-center"
            >
              料金プラン
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('flow')}
              className="text-gray-300 hover:text-[#d4af37] text-base font-medium py-1 w-full text-center"
            >
              ご成約の流れ
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-[#d4af37] hover:bg-transparent border border-[#0f172a] hover:border-[#d4af37] px-6 py-2.5 rounded-sm text-[#0f172a] hover:text-[#d4af37] text-base font-bold transition-all duration-300 shadow-md cursor-pointer inline-flex items-center gap-2 justify-center w-full"
            >
              <Mail className="w-4 h-4" />
              <span>お問い合わせ</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
