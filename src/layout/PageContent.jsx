import BestSellers from "../components/BestSellers";
import Carousel from "../components/Carousel";
import EditorsPick from "../components/EditorsPick";
import FeaturedPosts from "../components/FeaturedPosts";
import NeuralUniverse from "../components/NeuralUniverse";

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

const heroSlides2 = [
  {
    id: 1,
    bgColor: "#23856D",
    image: "./carouselModel2.png",
    subtitle: "SUMMER 2020",
    title: "Vita Classic Product",
    description: "We know how large objects will act, but things on a small scale.",
    price: "16.48",
    ctaText: "ADD TO CART",
  },
  {
    id: 2,
    bgColor: "#23856D",
    image: "./carouselModel2.png",
    subtitle: "SUMMER 2020",
    title: "Vita Classic Product",
    description: "We know how large objects will act, but things on a small scale.",
    price: "16.48",
    ctaText: "ADD TO CART",
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

const renderHero2 = (item) => (
  <div
    className="relative flex flex-col items-center md:block md:h-[700px] w-full overflow-hidden"
    style={{ backgroundColor: item.bgColor }}
  >
    <div className="flex h-full w-full pt-[240px] md:pt-0 md:max-w-8/10 flex-col items-center md:items-start justify-center gap-8 px-6 md:px-[200px] text-base">
      <span className="text-xl font-bold tracking-widest text-white">
        {item.subtitle}
      </span>
      <h1 className="text-[40px] text-center md:text-left font-bold leading-tight text-white md:max-w-45/100 md:text-[58px]">
        {item.title}
      </h1>
      <p className="text-xl w-full text-center md:text-left max-w-80/100 md:max-w-45/100 leading-relaxed text-white">
        {item.description}
      </p>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <span className="text-2xl font-bold text-white">${item.price}</span>
        <button className="rounded bg-[#2DC071] px-[40px] py-[15px] text-base font-bold text-white transition hover:bg-[#26a862] md:text-sm">
          {item.ctaText}
        </button>
      </div> 
      <img
        src={item.image}
        alt={item.title}
        className="w-full object-contain object-bottom md:absolute md:bottom-[-82px] md:right-[-368px] md:h-full object-contain object-bottom md:block"
      />
    </div>
  </div>
);

function PageContent() {
  return (
    <div className="w-full">
      <Carousel items={heroSlides} renderItem={renderHero} autoPlay interval={5000} />
      <EditorsPick/>
      <BestSellers/>
      <Carousel items={heroSlides2} renderItem={renderHero2} autoPlay interval={5000} />
      <NeuralUniverse/>
      <FeaturedPosts/>
    </div>
  );
}

export default PageContent;