import { SiLyft, SiStripe, SiReddit } from "@icons-pack/react-simple-icons";

const clients = [
  { id: 1, name: "Hooli",     logo: "/hooli.svg" },
  { id: 2, name: "Lyft",      Icon: SiLyft },
  { id: 3, name: "Hat", logo: "/hat.svg" },
  { id: 4, name: "Stripe",    Icon: SiStripe },
  { id: 5, name: "AWS",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { id: 6, name: "Reddit",    Icon: SiReddit },
];

function Clients() {
  return (
    <div className="w-full bg-[#FAFAFA] px-6 py-10 md:px-[195px]">
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-x-16 gap-y-8 md:justify-between">
        {clients.map(({ id, name, Icon, logo }) =>
            Icon ? (
                <Icon className="transition-transform duration-300 hover:scale-[1.05] hover:cursor-pointer " key={id} size={75} color="#BCBCBC" title={name} />
            ) : (
                <img
                key={id}
                src={logo}
                alt={name}
                className="h-[150px] w-auto max-w-[110px] object-contain opacity-60 grayscale transition-transform duration-300 hover:scale-[1.05] hover:cursor-pointer "
                />
            )
        )}
      </div>
    </div>
  );
}

export default Clients;