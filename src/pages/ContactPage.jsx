import ContactInfo from "../components/ContactInfo";

function ContactPage() {
  return (
    <div className="w-full">
      <div
        className="flex min-h-[450px] w-full flex-col items-center justify-center gap-4 bg-cover bg-center bg-no-repeat px-6 text-center"
        style={{ backgroundImage: "url('/contact.jpg')" }}
      >
        <h2 className="text-4xl font-bold text-[#252B42] max-w-[200px] md:max-w-none md:text-5xl">
          Questions &amp; Answers
        </h2>
        <p className="max-w-xs md:max-w-md text-sm leading-relaxed text-[#737373]">
          Problems trying to resolve the conflict between the two major realms
          of <br className="md:hidden"/>Classical physics:
        </p>
        <a href="#" className="text-sm font-bold text-[#23A6F0] transition-colors hover:text-[#1a8fd1]">
          CONTACT US
        </a>
      </div>
      <ContactInfo />
    </div>
  );
}

export default ContactPage;