function WorkWithUs() {
  return (
    <div className="flex w-full flex-col md:flex-row">
      {/* Sol: mavi panel */}
      <div className="flex flex-col items-center text-center md:text-start md:items-start justify-center gap-6 bg-[#2A7CDF] px-6 py-16 text-white md:w-2/3 md:px-48 md:py-24">
        <span className="text-base font-bold tracking-wider">WORK WITH US</span>
        <h2 className="text-[40px] font-bold md:text-4xl">Now Let's grow Yours</h2>
        <p className="max-w-md text-sm leading-relaxed text-white/90">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </p>
        <button className="rounded border border-white px-9 py-4 text-sm font-bold text-white transition hover:cursor-pointer hover:bg-white hover:text-[#2A7CDF]">
          Button
        </button>
      </div>

      {/* Sağ: görsel */}
      <div className="hidden md:block h-[400px] md:h-auto md:w-1/3">
        <img
          src="/work-with-us.jpg"
          alt="Work with us"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default WorkWithUs;