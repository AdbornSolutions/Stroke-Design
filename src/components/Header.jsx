import { useState } from "react";
import logo from "../assets/Stroke_logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Awards & Publication", href: "#awards" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full bg-[#302e2e]">
      <nav className="mx-auto flex min-h-[81px] w-full max-w-[1421px] items-center px-5 sm:px-8 lg:px-9 xl:px-10">
        {/* Logo */}
        <a
          href="#home"
          className="flex shrink-0 items-center"
          aria-label="Home"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-[50px] w-auto object-contain sm:h-[52px]"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden items-center xl:flex">
          <div className="flex items-center gap-x-7 xl:gap-x-8">
            {/* Home */}
            <a
              href="#home"
              className="relative py-2 font-serif text-[18px] font-bold text-[#f3f1f1] transition-colors duration-200 hover:text-[#d6bc22]"
            >
              Home
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#d6bc22]" />
            </a>

            {/* About */}
            <a
              href="#about"
              className="py-2 font-serif text-[18px] font-bold text-[#f3f1f1] transition-colors duration-200 hover:text-[#d6bc22]"
            >
              About us
            </a>

            {/* Services */}
            <div className="group relative">
              <button
                type="button"
                className="flex cursor-pointer items-center gap-1 py-2 font-serif text-[18px] font-bold text-[#f3f1f1] transition-colors duration-200 hover:text-[#d6bc22]"
              >
                Services
                <svg
                  className="mt-[2px] h-3 w-3 fill-current transition-transform duration-200 group-hover:rotate-180"
                  viewBox="0 0 12 8"
                  aria-hidden="true"
                >
                  <path d="M1 1.5L6 6.5L11 1.5" />
                </svg>
              </button>

              {/* Desktop Dropdown */}
              <div className="invisible absolute left-0 top-full z-50 mt-2 w-56 translate-y-2 rounded-md bg-[#302e2e] p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <a
                  href="#service-1"
                  className="block rounded px-4 py-3 font-serif text-[16px] font-semibold text-white hover:bg-white/10 hover:text-[#d6bc22]"
                >
                  Service One
                </a>

                <a
                  href="#service-2"
                  className="block rounded px-4 py-3 font-serif text-[16px] font-semibold text-white hover:bg-white/10 hover:text-[#d6bc22]"
                >
                  Service Two
                </a>

                <a
                  href="#service-3"
                  className="block rounded px-4 py-3 font-serif text-[16px] font-semibold text-white hover:bg-white/10 hover:text-[#d6bc22]"
                >
                  Service Three
                </a>
              </div>
            </div>

            {/* Remaining Links */}
            {navLinks.slice(2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap py-2 font-serif text-[18px] font-bold text-[#f3f1f1] transition-colors duration-200 hover:text-[#d6bc22]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Quote Button */}
          <a
            href="#quote"
            className="ml-8 flex h-[39px] items-center gap-2 whitespace-nowrap rounded-full bg-[#DAC322] px-4 text-[16px] font-bold text-black shadow-sm transition-all duration-200 hover:bg-[#46c45e] hover:shadow-md xl:ml-9"
          >
            <span>Get A Quote</span>

            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black/20">
              <svg
                viewBox="0 0 20 20"
                className="h-[15px] w-[15px] fill-none stroke-black stroke-[2]"
              >
                <path d="M4 10h11" />
                <path d="M11 6l4 4-4 4" />
              </svg>
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="ml-auto flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-white xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <div className="flex w-6 flex-col gap-[5px]">
            <span
              className={`h-[2px] w-full bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-white transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#302e2e] transition-all duration-300 xl:hidden ${
          mobileMenuOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 pt-3 sm:px-8">
          {/* Home */}
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block border-b border-white/10 py-4 font-serif text-[17px] font-bold text-[#d6bc22]"
          >
            Home
          </a>

          {/* About */}
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block border-b border-white/10 py-4 font-serif text-[17px] font-bold text-white"
          >
            About us
          </a>

          {/* Mobile Services */}
          <div className="border-b border-white/10">
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex w-full cursor-pointer items-center justify-between py-4 font-serif text-[17px] font-bold text-white"
            >
              <span>Services</span>

              <svg
                className={`h-3 w-3 fill-current transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 12 8"
              >
                <path d="M1 1.5L6 6.5L11 1.5" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                servicesOpen ? "max-h-60 pb-2 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <a
                href="#service-1"
                className="block px-4 py-3 font-serif text-[15px] text-white/80 hover:text-[#d6bc22]"
              >
                Service One
              </a>

              <a
                href="#service-2"
                className="block px-4 py-3 font-serif text-[15px] text-white/80 hover:text-[#d6bc22]"
              >
                Service Two
              </a>

              <a
                href="#service-3"
                className="block px-4 py-3 font-serif text-[15px] text-white/80 hover:text-[#d6bc22]"
              >
                Service Three
              </a>
            </div>
          </div>

          {/* Other Links */}
          {navLinks.slice(2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block border-b border-white/10 py-4 font-serif text-[17px] font-bold text-white hover:text-[#d6bc22]"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Quote Button */}
          <a
            href="#quote"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#DAC322] font-bold text-black transition-colors hover:bg-[#46c45e]"
          >
            <span>Get A Quote</span>

            <span className="flex h-[19px] w-[19px] items-center justify-center rounded-full bg-black/20">
              <svg
                viewBox="0 0 20 20"
                className="h-[15px] w-[15px] fill-none stroke-black stroke-[2]"
              >
                <path d="M4 10h11" />
                <path d="M11 6l4 4-4 4" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
