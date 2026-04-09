import { useState } from 'react';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { ContactModal } from '@/components/ContactModal';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <footer className="relative py-8 bg-black border-t border-gray-2/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo/Name */}
            <div className="text-center md:text-left">
              <span className="text-white font-semibold text-lg">ResourceLDG</span>
              <p className="text-gray-3 text-sm mt-1">
                Lucas Daniel Gomez — Arquitecto de Automatización & Backend
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="w-10 h-10 rounded-full bg-gray-1 flex items-center justify-center text-gray-3 hover:text-lime hover:bg-lime/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </button>
              <a 
                href="https://wa.me/542236202061?text=Hola%20Lucas%2C%20vi%20tu%20perfil%20y%20quiero%20hablar%20con%20vos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-1 flex items-center justify-center text-gray-3 hover:text-lime hover:bg-lime/10 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/resourceldg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-1 flex items-center justify-center text-gray-3 hover:text-lime hover:bg-lime/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/resourceldg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-1 flex items-center justify-center text-gray-3 hover:text-lime hover:bg-lime/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-3 text-sm">
              © {currentYear} — Todos los derechos reservados
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
