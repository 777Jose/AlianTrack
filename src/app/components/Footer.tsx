import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logo from "../../assets/logo/logo1.png";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-14 text-slate-300">
      <div className="container-app grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={logo}
              alt="ALIANTRACK Logo"
              className="h-12 w-auto object-contain"
            />
          </a>
          <p className="mt-5 max-w-sm leading-7 text-slate-400">
            Tu socio confiable para importar desde cualquier parte del mundo
            hacia Bolivia con respaldo logístico y atención cercana.
          </p>
          <div className="mt-5 flex gap-3">
            <div className="mt-5 flex gap-3">
              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/profile.php?id=61557143854036"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Facebook size={18} />
              </a>

              {/* TIKTOK */}
              <a
                href="https://www.tiktok.com/@aliantracksrl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-primary hover:bg-primary/10 hover:text-primary hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-[18px] w-[18px]"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.35V2h-3.2v13.57a2.89 2.89 0 1 1-2-2.75V9.56a6.09 6.09 0 1 0 5.22 6v-6.9a8 8 0 0 0 4.8 1.6V6.69h-1.05Z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/aliantracksrl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Instagram size={18} />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/59177291715"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-green-500 hover:bg-green-500/10 hover:text-green-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="h-[18px] w-[18px]"
                >
                  <path d="M19.11 17.2c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.91 1.12-.17.19-.33.22-.62.07-.29-.14-1.21-.45-2.31-1.45-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.44.12-.58.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.44.02 1.44 1.03 2.83 1.17 3.03.14.19 2.01 3.07 4.87 4.3.68.29 1.21.46 1.63.58.68.22 1.29.19 1.78.12.54-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z" />
                  <path d="M16.03 3.2C9.01 3.2 3.3 8.9 3.3 15.93c0 2.25.59 4.45 1.71 6.38L3.2 28.8l6.66-1.75a12.68 12.68 0 0 0 6.17 1.58h.01c7.02 0 12.73-5.7 12.73-12.73 0-3.41-1.33-6.61-3.74-9.02A12.63 12.63 0 0 0 16.03 3.2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Servicios</h3>
          <ul className="mt-5 space-y-3 text-slate-400">
            <li>Transporte marítimo</li>
            <li>Transporte aéreo</li>
            <li>Transporte terrestre</li>
            <li>Carga consolidada</li>
            <li>Almacenamiento</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Enlaces rápidos</h3>
          <ul className="mt-5 space-y-3 text-slate-400">
            <li>
              <a href="#servicios" className="hover:text-primary">
                Servicios
              </a>
            </li>
            <li>
              <a href="#paises" className="hover:text-primary">
                Países de origen
              </a>
            </li>
            <li>
              <a href="#proceso" className="hover:text-primary">
                Cómo funciona
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-primary">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Contacto</h3>
          <div className="mt-5 space-y-5 text-slate-400">
            <div>
              <p className="font-semibold text-white">La Paz</p>
              <p>
                Av. Camacho #1277, Casi esquina Colón Edificio Kersul piso 5 Of.
                505
              </p>
              <p className="mt-1 flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a
                  href="https://wa.me/59177291715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  +591 77291715 (WhatsApp)
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Santa Cruz</p>
              <p>Av. Comercial 5678</p>
              <p className="mt-1 flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a
                  href="https://wa.me/59177291715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  +591 77291715 (WhatsApp)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-app mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        © 2026 ALIANTRACK. Todos los derechos reservados.
      </div>
    </footer>
  );
}
