import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Carousel({
  items = [],            // [{ src, altText, caption, header, key }]
  autoPlay = false,      // 🔴 otomatik geçiş default KAPALI
  interval = 5000,       // autoPlay açıksa kaç ms'de bir geçsin
  showControls = true,   // sağ/sol oklar
  showIndicators = true, // alttaki noktalar
  pauseOnHover = true,   // üstüne gelince otomatik geçiş dursun
  renderItem,            // opsiyonel: özel slide içeriği
  className = "",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const next = () =>
    setActiveIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  const prev = () =>
    setActiveIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const goTo = (i) => setActiveIndex(i);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;
    if (pauseOnHover && isHovering) return;

    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, items.length, isHovering, pauseOnHover]);

  if (items.length === 0) return null;

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Kayan şerit: translateX ile aktif slide'a göre kayar */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={item.id ?? item.src ?? index} className="w-full shrink-0">
            {renderItem ? (
              renderItem(item, index)
            ) : (
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.altText}
                  className="w-full object-cover"
                />
                {(item.header || item.caption) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
                    {item.header && (
                      <h3 className="text-3xl font-bold">{item.header}</h3>
                    )}
                    {item.caption && <p className="mt-2">{item.caption}</p>}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sağ/sol oklar */}
      {showControls && items.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white rounded-full p-2 transition"
          >
            <ChevronLeft size={44} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white rounded-full p-2 transition"
          >
            <ChevronRight size={44} />
          </button>
        </>
      )}

      {/* Alttaki noktalar */}
      {showIndicators && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              type="button"
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;