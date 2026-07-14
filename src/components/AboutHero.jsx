function AboutHero() {
  return (
    <div className="w-full px-6 py-12 md:px-[195px] md:py-24">
      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
        {/* Sol: metin */}
        <div className="flex max-w-md flex-col items-center gap-8 text-center md:items-start md:text-left">
          <span className="text-base font-bold tracking-wider text-[#252B42]">
            ABOUT COMPANY
          </span>
          <h1 className="text-[58px] font-bold text-[#252B42] md:text-5xl">ABOUT US</h1>
          <p className="text-xl leading-relaxed text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="rounded bg-[#23A6F0] px-9 py-4 text-sm font-bold text-white transition hover:cursor-pointer hover:bg-[#1a8fd1]">
            Get Quote Now
          </button>
        </div>

        {/* Sağ: görsel */}
        <div className="w-full md:w-1/2 flex justify-center overflow-hidden">
          <div className="relative mx-auto w-full max-w-[632px] aspect-[632/612] bg-white overflow-hidden">
            <div className="absolute left-[15.35%] top-[7.84%] w-[82.28%] aspect-square rounded-full bg-[#FDEAEA]" />
            <div className="absolute left-[5.54%] top-[9.48%] w-[13.13%] aspect-square rounded-full bg-[#FDEAEA]" />
            <div className="absolute right-[3.8%] top-[50.32%] w-[4.9%] aspect-square rounded-full bg-[#FDEAEA]" />
            <div className="absolute right-[1.9%] top-[28.59%] w-[2.53%] aspect-square rounded-full bg-[#8B7CF6]" />
            <div className="absolute left-[9.65%] bottom-[32.03%] w-[2.53%] aspect-square rounded-full bg-[#8B7CF6]" />

            <img
              src="/about-hero.png"
              alt="About us"
              className="absolute bottom-0 left-1/2 z-10 w-[125%] sm:w-[132%] md:w-[141.77%] max-w-none -translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;