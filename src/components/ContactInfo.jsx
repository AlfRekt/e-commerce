import { Phone, MapPin, Mail, CornerRightDown } from "lucide-react";

const cards = [
  { id: 1, Icon: Phone, highlighted: false },
  { id: 2, Icon: MapPin, highlighted: true },
  { id: 3, Icon: Mail, highlighted: false },
];

function ContactInfo() {
  return (
    <div className="w-full bg-[#FAFAFA] md:bg-white py-16 md:px-[195px] md:py-24">
      {/* Başlık */}
      <div className="mb-14 mx-auto flex flex-col items-center gap-3 text-center">
        <span className="text-sm font-bold tracking-wider text-[#252B42]">
          VISIT OUR OFFICE
        </span>
        <h2 className="max-w-xs md:max-w-xl text-[40px] font-bold leading-snug text-[#252B42]">
          We help small businesses <br className="md:hidden"/> with big ideas
        </h2>
      </div>

      {/* 3 kart */}
      <div className="flex flex-col items-center gap-8 justify-center md:flex-row">
        {cards.map(({ id, Icon, highlighted }) => (
          <div
            key={id}
            className={`flex flex-col items-center gap-4 px-12 py-10 text-center ${
              highlighted ? "bg-[#252B42] text-white md:py-16" : " bg-[#FAFAFA] md:bg-white text-[#252B42]"
            }`}
          >
            <Icon size={40} className="text-[#23A6F0]" />
            <div className="flex flex-col text-sm font-bold">
              <span>georgia.young@example.com</span>
              <span>georgia.young@ple.com</span>
            </div>
            <span className="font-bold">Get Support</span>
            <button
              className={`rounded-full border border-[#23A6F0] px-8 py-3 text-sm font-bold text-[#23A6F0] transition hover:bg-[#23A6F0] ${
                highlighted ? "hover:text-[#252B42]" : "hover:text-white"
              }`}
            >
              Submit Request
            </button>
          </div>
        ))}
      </div>

      {/* Alt: Let's Talk */}
      <div className="mt-14 pt-8 pb-18 md:py-0 bg-white w-full flex flex-col items-center gap-4 text-center">
        <CornerRightDown size={40} className="text-[#23A6F0]" />
        <span className="text-base font-bold tracking-wider text-[#252B42]">
          WE Can't WAIT TO MEET YOU
        </span>
        <h2 className="text-[58px] font-bold text-[#252B42]">Let's Talk</h2>
        <button className="rounded bg-[#23A6F0] px-9 py-4 text-sm font-bold text-white transition hover:bg-[#1a8fd1]">
          Try it free now
        </button>
      </div>
    </div>
  );
}

export default ContactInfo;