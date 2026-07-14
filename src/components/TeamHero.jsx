import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const galleryImages = [
  "/team/hero-2.jpg",
  "/team/hero-3.jpg",
  "/team/hero-4.jpg",
  "/team/hero-5.jpg",
];

function TeamHero() {
  return (
    <>
      {/* Üst başlık */}
      <div className="flex flex-col items-center gap-4 px-6 py-16 text-center">
        <span className="text-sm font-bold tracking-wider text-[#737373]">WHAT WE DO</span>
        <h1 className="text-4xl font-bold text-[#252B42] md:text-5xl">Innovation tailored for you</h1>
        <nav className="flex items-center gap-2 text-sm font-bold">
          <Link to="/" className="text-[#252B42]">Home</Link>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="text-[#BDBDBD]">Team</span>
        </nav>
      </div>

      {/* Görsel kolaj */}
      <div className="grid grid-cols-2 gap-2 md:h-[500px] md:grid-cols-4 md:grid-rows-2">
        <div className="col-span-2 aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto">
          <img src="/team/hero-big.jpg" alt="Team big" className="h-full w-full object-cover" />
        </div>
        {galleryImages.map((img, i) => (
          <div key={i} className="aspect-square md:aspect-auto">
            <img src={img} alt={`Gallery ${i + 1}`} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}

export default TeamHero;