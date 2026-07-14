import { SiX, SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";

const socials = [
  { id: 1, Icon: SiX,         color: "#23A6F0" },
  { id: 2, Icon: SiFacebook,  color: "#395185" },
  { id: 3, Icon: SiInstagram, color: "#000000" },
  { id: 4, logo: "/LinkedIn_icon.svg" },
];

function FreeTrial() {
  return (
    <div className="flex flex-col items-center gap-6 px-6 py-32 pb-48 text-center md:py-24">
      <h2 className="text-3xl font-bold text-[#252B42] md:text-4xl">Start your 14 days free trial</h2>
      <p className="max-w-md text-sm leading-relaxed text-[#737373]">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT
        official consequent.
      </p>
      <button className="rounded bg-[#23A6F0] px-9 py-4 text-sm font-bold text-white transition hover:bg-[#1a8fd1]">
        Try it free now
      </button>

      <div className="mt-2 flex items-center gap-8">
        {socials.map(({ id, Icon, color, logo }) => (
          <a key={id} href="#" aria-label="social">
            {Icon ? (
              <Icon size={24} color={color} />
            ) : (
              <img src={logo} alt="LinkedIn" className="h-6 w-6 object-contain" />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FreeTrial;