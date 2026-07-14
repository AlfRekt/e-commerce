function NeuralUniverse() {
  return (
    <section className="flex w-full flex-col md:flex-row">
      {/* Sol: görsel (sol kenara dayalı) */}
      <div className="md:w-1/2">
        <img
          src="/NeuralUniverse.png"
          alt="Part of the Neural Universe"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Sağ: metin bloğu */}
      <div className="flex order-first md:order-last mt-20 md:mt-0 flex-col items-center gap-6 px-6 py-12 text-center md:w-1/2 md:items-start md:px-48 md:py-60 md:text-left">
        <span className="text-sm font-bold text-[#BDBDBD]">SUMMER 2020</span>
        <h2 className="max-w-[260px] md:max-w-md text-4xl font-bold leading-snug text-[#252B42]">
          Part of the Neural Universe
        </h2>
        <p className="max-w-[200px] md:max-w-[396px] text-xl font-normal text-[#737373]">
          We know how large objects will act, but things on a small scale.
        </p>

        {/* İki buton: mobilde alt alta, sm'den itibaren yan yana */}
        <div className="flex flex-col gap-5 md:gap-3 sm:flex-row">
          <button className="rounded bg-[#2DC071] px-9 py-4 text-sm font-bold text-white transition hover:cursor-pointer hover:bg-[#26a862]">
            BUY NOW
          </button>
          <button className="rounded border border-[#2DC071] px-9 py-4 text-sm font-bold text-[#2DC071] transition hover:cursor-pointer hover:bg-[#2DC071] hover:text-white">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}

export default NeuralUniverse;