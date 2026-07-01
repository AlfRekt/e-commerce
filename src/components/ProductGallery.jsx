import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ProductGallery({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="flex w-full flex-col gap-4 md:max-w-[400px]">
        {/* Ana görsel — kayan şerit */}
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out transform-gpu"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    width={600}
                    height={900}
                    alt={`Ürün görseli ${index + 1}`}
                    className="aspect-[2/3] w-full shrink-0 object-cover"
                />
                ))}
            </div>

            {/* Oklar — şeridin dışında, sabit */}
            <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-[#252B42] transition hover:bg-white"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={next}
                aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-[#252B42] transition hover:bg-white"
            >
                <ChevronRight size={24} />
            </button>
        </div>

        {/* Thumbnail'lar */}
        <div className="flex gap-4">
        {images.map((img, index) => (
            <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="relative overflow-hidden"
            >
            <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="aspect-[2/3] w-20 object-cover"
            />
            <span
                className={`pointer-events-none absolute inset-0 bg-white transition-opacity duration-300 ${
                index === activeIndex ? "opacity-50" : "opacity-0"
                }`}
            />
            </button>
        ))}
        </div>
    </div>
  );
}

export default ProductGallery;