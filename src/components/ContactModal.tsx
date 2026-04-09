import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const EMAILJS_SERVICE_ID = 'service_1bmalzo';
const EMAILJS_TEMPLATE_ID = 'template_8y0hz3n';
const EMAILJS_PUBLIC_KEY = 'yw7E4icl1vTC6mzQK';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          message: formData.message,
          time: new Date().toLocaleString('es-ES', {
            dateStyle: 'long',
            timeStyle: 'short',
          }),
        },
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', message: '' });
        onClose();
      }, 2000);
    } catch {
      setError('Hubo un error al enviar. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-1 border-gray-2 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-lime" />
            </div>
            Enviar mensaje
          </DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-lime/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-lime" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              ¡Mensaje enviado!
            </h3>
            <p className="text-gray-3">
              Gracias por contactarme. Te responderé pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-3 mb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-black border border-gray-2 text-white placeholder-gray-3 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-3 mb-1"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-black border border-gray-2 text-white placeholder-gray-3 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime transition-colors resize-none"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-lime text-black hover:bg-lime/90 font-semibold py-6 transition-all duration-300 hover:shadow-glow"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Enviar mensaje
                  </span>
                )}
              </Button>
            </div>

            <p className="text-center text-gray-3 text-sm">
              También puedes escribirme directamente a{' '}
              <a
                href="mailto:resourceldg@gmail.com"
                className="text-lime hover:underline"
              >
                resourceldg@gmail.com
              </a>
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
