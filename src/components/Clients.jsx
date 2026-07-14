import { SiLyft, SiStripe, SiReddit } from "@icons-pack/react-simple-icons";

const clients = [
  { id: 1, name: "Hooli",     logo: "/hooli.svg" },
  { id: 2, name: "Lyft",      Icon: SiLyft },
  { id: 3, name: "Hat", logo: "/hat.svg" },
  { id: 4, name: "Stripe",    Icon: SiStripe },
  { id: 5, name: "AWS",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { id: 6, name: "Reddit",    Icon: SiReddit },
];

function Clients({ title, description }) {
  return (
    <div className="w-full bg-[#FAFAFA] px-6 py-10 md:px-[195px]">
      {/* Opsiyonel başlık — sadece prop verilirse */}
      {(title || description) && (
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          {title && (
            <h2 className="text-3xl font-bold text-[#252B42] pb-6 md:text-4xl">{title}</h2>
          )}
          {description && (
            <p className="max-w-lg text-sm text-[#737373]">{description}</p>
          )}
        </div>
      )}

      <div className="flex flex-col flex-wrap items-center justify-center gap-x-16 gap-y-8 md:flex-row md:justify-between">
        {clients.map(({ id, name, Icon, logo }) =>
          Icon ? (
            <Icon
              key={id}
              size={75}
              color="#BCBCBC"
              title={name}
              className="transition-transform duration-300 hover:scale-[1.05] hover:cursor-pointer"
            />
          ) : (
            <img
              key={id}
              src={logo}
              alt={name}
              className="h-[150px] w-auto max-w-[110px] object-contain opacity-60 grayscale transition-transform duration-300 hover:scale-[1.05] hover:cursor-pointer"
            />
          )
        )}
      </div>
    </div>
  );
}

export default Clients;