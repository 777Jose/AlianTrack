export function WhatsAppFloat() {
  const phone = '59177291715'; // reemplaza con tu número real
  const message = 'Hola, quiero cotizar una carga con ALIANTRACK';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-[999] flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-8 w-8"
        >
          <path d="M19.11 17.2c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.91 1.12-.17.19-.33.22-.62.07-.29-.14-1.21-.45-2.31-1.45-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.44.12-.58.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.44.02 1.44 1.03 2.83 1.17 3.03.14.19 2.01 3.07 4.87 4.3.68.29 1.21.46 1.63.58.68.22 1.29.19 1.78.12.54-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z" />
          <path d="M16.03 3.2C9.01 3.2 3.3 8.9 3.3 15.93c0 2.25.59 4.45 1.71 6.38L3.2 28.8l6.66-1.75a12.68 12.68 0 0 0 6.17 1.58h.01c7.02 0 12.73-5.7 12.73-12.73 0-3.41-1.33-6.61-3.74-9.02A12.63 12.63 0 0 0 16.03 3.2Zm0 23.27h-.01a10.5 10.5 0 0 1-5.35-1.46l-.38-.23-3.95 1.04 1.05-3.85-.25-.4a10.51 10.51 0 0 1-1.62-5.64c0-5.81 4.72-10.54 10.52-10.54 2.81 0 5.45 1.09 7.43 3.08a10.45 10.45 0 0 1 3.08 7.45c0 5.8-4.72 10.53-10.52 10.53Z" />
        </svg>
      </div>
    </a>
  );
}