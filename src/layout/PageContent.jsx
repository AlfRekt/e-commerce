import BestSellers from "../components/BestSellers";
import Carousel from "../components/Carousel";
import EditorsPick from "../components/EditorsPick";

const heroSlides = [
  {
    id: 1,
    bg: "./summerCollection.jpg",
    subtitle: "SUMMER 2020",
    title: "NEW COLLECTION",
    description: "We know how large objects will act, but things on a small scale.",
    ctaText: "SHOP NOW",
  },
  {
    id: 2,
    bg: "./summerCollection.jpg",
    subtitle: "SUMMER 2020",
    title: "NEW COLLECTION",
    description: "We know how large objects will act, but things on a small scale.",
    ctaText: "SHOP NOW",
  },
  
];

// Bandage hero slide'ı: arka plan görsel + sol tarafta yazı/buton
const renderHero = (item) => (
  <div
    className="relative h-[792px] w-full bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${item.bg})` }}
  >
    <div className="flex h-full w-full md:max-w-8/10 flex-col items-center md:items-start justify-center gap-8 px-6 md:px-[200px] text-base">
      <span className="text-sm font-bold tracking-widest text-white">
        {item.subtitle}
      </span>
      <h1 className="text-[40px] text-center md:text-left font-bold leading-tight text-white md:text-[58px]">
        {item.title}
      </h1>
      <p className="text-lg w-full text-center md:text-left max-w-80/100 md:max-w-45/100 leading-relaxed text-white text-[20px]">
        {item.description}
      </p>
      <button className="rounded bg-[#2DC071] px-[40px] py-[15px] text-base font-bold text-white transition hover:bg-[#26a862] md:text-2xl">
        {item.ctaText}
      </button>
    </div>
  </div>
);

function PageContent() {
  return (
    <div className="w-full">
      <Carousel items={heroSlides} renderItem={renderHero} autoPlay interval={5000} />
      <EditorsPick/>
      <BestSellers/>
    </div>
  );
}

export default PageContent;