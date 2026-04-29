import * as Dialog from "@radix-ui/react-dialog";
import { Menu, Phone, Mail, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../../lib/data";
import logo from "../../assets/logo/logo1.png";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-slate-950/95 backdrop-blur">
      <div className="container-app flex h-20 items-center justify-between gap-4">
        <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3">
          <img
            src={logo}
            alt="ALIANTRACK Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            if (item.to.startsWith("#")) {
              const sectionId = item.to.replace("#", "");

              return (
                <button
                  key={item.to}
                  type="button"
                  onClick={() => handleSectionNavigation(sectionId)}
                  className="text-sm font-medium text-slate-200 transition hover:text-primary"
                >
                  {item.label}
                </button>
              );
            }

            return (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-slate-200 transition hover:text-primary"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-2 text-sm text-slate-200">
            <Phone size={16} className="text-primary" />
            <span>+591 77291715</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-200">
            <Mail size={16} className="text-primary" />
            <span>info@aliantrack.com</span>
          </div>

          <button
            type="button"
            onClick={() => handleSectionNavigation("contacto")}
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Contacto
          </button>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden">
              <Menu />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-slate-950/70" />

            <Dialog.Content className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-slate-950 p-6 text-white shadow-2xl focus:outline-none">
              <div className="mb-8 flex items-center justify-between">
                <Dialog.Title className="text-lg font-bold">Menú</Dialog.Title>

                <Dialog.Close asChild>
                  <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10">
                    <X />
                  </button>
                </Dialog.Close>
              </div>

              <div className="flex flex-col gap-4">
                {navItems.map((item) => {
                  if (item.to.startsWith("#")) {
                    const sectionId = item.to.replace("#", "");

                    return (
                      <Dialog.Close asChild key={item.to}>
                        <button
                          type="button"
                          onClick={() => handleSectionNavigation(sectionId)}
                          className="rounded-xl border border-white/10 px-4 py-3 text-left text-base font-medium hover:border-primary/60 hover:text-primary"
                        >
                          {item.label}
                        </button>
                      </Dialog.Close>
                    );
                  }

                  return (
                    <Dialog.Close asChild key={item.to}>
                      <Link
                        to={item.to}
                        className="rounded-xl border border-white/10 px-4 py-3 text-base font-medium hover:border-primary/60 hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </Dialog.Close>
                  );
                })}
              </div>

              <div className="mt-8 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                <a
                  href="https://wa.me/59177291715?text=Hola,%20quiero%20información%20sobre%20ALIANTRACK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition hover:text-primary"
                >
                  <Phone size={16} className="text-primary" />
                  +591 77291715
                </a>

                <a
                  href="mailto:marketingaliantrack@gmail.com?subject=Consulta%20ALIANTRACK&body=Hola,%20quiero%20información%20sobre%20importaciones"
                  className="flex items-center gap-2 transition hover:text-primary"
                >
                  <Mail size={16} className="text-primary" />
                  marketingaliantrack@gmail.com
                </a>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}