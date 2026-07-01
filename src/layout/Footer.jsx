import { SiInstagram, SiFacebook, SiX } from "@icons-pack/react-simple-icons";

const footerColumns = [
  { title: "Company Info", links: ["About Us", "Carrier", "We are hiring", "Blog"] },
  { title: "Legal", links: ["About Us", "Carrier", "We are hiring", "Blog"] },
  { title: "Features", links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"] },
  { title: "Resources", links: ["IOS & Android", "Watch a Demo", "Customers", "API"] },
];

function Footer() {
  return (
    <footer className="w-full">
      {/* Üst bar: logo + sosyal ikonlar */}
      <div className="bg-[#FAFAFA]">
        <div className="flex flex-col gap-4 px-8 py-8 md:flex-row md:justify-between md:px-[195px]">
          <a href="#" className="text-2xl font-bold text-[#252B42]">Bandage</a>
          <div className="flex items-center gap-5 text-[#23A6F0]">
            <a href="#" aria-label="Facebook"><SiFacebook size={24} /></a>
            <a href="#" aria-label="Instagram"><SiInstagram size={24} /></a>
            <a href="#" aria-label="Twitter"><SiX size={24} /></a>
          </div>
        </div>
        <div className="mx-6 border-t border-[#ECECEC] md:mx-[195px]" />
      </div>

      {/* Orta: link kolonları + Get In Touch */}
      <div className="bg-white px-8 py-12 md:px-[195px]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Link kolonları */}
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-5">
              <h4 className="text-base font-bold text-[#252B42]">{col.title}</h4>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm font-bold text-[#737373] transition-colors hover:text-[#252B42]"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}

          {/* Get In Touch */}
          <div className="flex flex-col gap-5">
            <h4 className="text-base font-bold text-[#252B42]">Get In Touch</h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex"
            >
              <input
                type="email"
                placeholder="Your Email"
                className="rounded-l border border-[#E6E6E6] bg-[#F9F9F9] px-4 py-3 text-sm text-[#737373] outline-none"
              />
              <button
                type="submit"
                className="rounded-r bg-[#23A6F0] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1a8fd1]"
              >
                Subscribe
              </button>
            </form>
            <span className="text-xs text-[#737373]">Lore imp sum dolor Amit</span>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] px-6 py-6 md:px-[195px]">
        <p className="text-sm text-center md:text-left font-bold text-[#737373]">
          Made With Love By Turkey All Right Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;