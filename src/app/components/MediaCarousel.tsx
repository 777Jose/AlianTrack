import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, PlayCircle, X, Expand } from "lucide-react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  thumbnail?: string;
};

type MediaCarouselProps = {
  items: MediaItem[];
  autoPlayInterval?: number;
};

export function MediaCarousel({
  items,
  autoPlayInterval = 4500,
}: MediaCarouselProps) {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const currentItem = useMemo(() => items[current], [items, current]);

  const isCurrentVideo = currentItem?.type === "video";

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!items.length) return;
    if (items.length <= 1) return;
    if (isCurrentVideo) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [items.length, current, isCurrentVideo, autoPlayInterval]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }

      if (isModalOpen) {
        if (e.key === "ArrowLeft") prevSlide();
        if (e.key === "ArrowRight") nextSlide();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen, items.length]);

  if (!items.length) return null;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();

    touchStartX.current = null;
  };

  return (
    <>
      <div className="rounded-[28px] border border-slate-200 bg-white p-3 shadow-xl sm:p-4">
        <div
          className="group relative flex w-full items-center justify-center overflow-hidden rounded-[24px] bg-slate-950"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative flex aspect-video w-full items-center justify-center bg-slate-950">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {currentItem.type === "image" ? (
                  <img
                    src={currentItem.src}
                    alt={currentItem.alt || "Imagen de ALIANTRACK"}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src={currentItem.src}
                    controls
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    onEnded={nextSlide}
                    className="max-h-full max-w-full object-contain"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />

            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur-sm">
                {currentItem.type === "video" ? "Video" : "Galería"}
              </span>

              {currentItem.type === "video" && (
                <span className="flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  <PlayCircle className="h-4 w-4" />
                  Multimedia
                </span>
              )}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-slate-900 shadow-md backdrop-blur-sm transition hover:scale-105"
              aria-label="Ampliar galería"
            >
              <Expand className="h-4 w-4" />
              Ver grande
            </button>

            {items.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-800 shadow-lg transition hover:scale-105 md:opacity-0 md:group-hover:opacity-100"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-800 shadow-lg transition hover:scale-105 md:opacity-0 md:group-hover:opacity-100"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {currentItem.alt || `Elemento ${current + 1}`}
            </p>
            <p className="text-xs text-slate-500">
              {current + 1} de {items.length}
            </p>
          </div>

          {!isCurrentVideo && items.length > 1 && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Reproducción automática
            </span>
          )}

          {isCurrentVideo && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              Video pausado en carrusel
            </span>
          )}
        </div>

        {items.length > 1 && (
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
            {items.map((item, index) => (
              <button
                key={`${item.src}-${index}`}
                onClick={() => setCurrent(index)}
                className={`group relative overflow-hidden rounded-2xl border transition ${
                  current === index
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-slate-200 hover:border-primary/50"
                }`}
                aria-label={`Ir al elemento ${index + 1}`}
              >
                <div className="flex aspect-video items-center justify-center bg-slate-100">
                  {item.type === "image" ? (
                    <img
                      src={item.thumbnail || item.src}
                      alt={item.alt || `Miniatura ${index + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="relative flex h-full w-full items-center justify-center bg-slate-950">
                      <video
                        src={item.src}
                        muted
                        preload="metadata"
                        className="max-h-full max-w-full object-contain opacity-80"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="rounded-full bg-white/90 p-2 shadow-md">
                          <PlayCircle className="h-5 w-5 text-slate-900" />
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-6xl overflow-hidden rounded-[28px] bg-slate-950 shadow-2xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 z-20 rounded-full bg-white/90 p-2 text-slate-900 shadow-lg transition hover:scale-105"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>

              {items.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-900 shadow-lg transition hover:scale-105"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-900 shadow-lg transition hover:scale-105"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              <div className="flex aspect-video w-full items-center justify-center bg-slate-950 p-4 sm:p-8">
                {currentItem.type === "image" ? (
                  <img
                    src={currentItem.src}
                    alt={currentItem.alt || "Vista ampliada"}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <video
                    src={currentItem.src}
                    controls
                    autoPlay
                    className="max-h-full max-w-full object-contain"
                  />
                )}
              </div>

              <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 text-white">
                <p className="text-sm font-semibold">
                  {currentItem.alt || `Elemento ${current + 1}`}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  {current + 1} de {items.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
