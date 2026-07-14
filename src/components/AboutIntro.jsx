function AboutIntro() {
  return (
    <div className="w-full px-10 py-12 md:px-[195px] md:py-16">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-24">
        {/* Sol: kalın ifade */}
        <div className="flex flex-col text-center mx-auto max-w-[280px] md:mx-none md:max-w-none md:text-start gap-4 md:w-1/2">
          <span className="text-sm font-bold text-[#E74040]">Problems trying</span>
          <h3 className="text-2xl font-bold leading-snug text-[#252B42]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>

        {/* Sağ: açıklama */}
        <div className="md:w-1/2">
          <p className="text-sm pt-10 leading-relaxed text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;