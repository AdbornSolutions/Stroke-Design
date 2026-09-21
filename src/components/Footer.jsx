import React from "react";
import logo from "../assets/Stroke_logo.png";

const Footer = () => {
  const menuLinks = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "Awards & Publication", href: "#awards" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const policyLinks = [
    { name: "Terms & Condition", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
  ];

  return (
    <footer className="w-full bg-[#302e2e] font-serif text-white">
      {/* =========================
          MAIN FOOTER
      ========================== */}
      <div className="mx-auto w-full max-w-[1250px] px-6 py-12 sm:px-8 md:py-14 lg:px-10 lg:py-14 xl:px-0">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1.45fr] lg:gap-12 xl:gap-16">

          {/* =========================
              BRAND SECTION
          ========================== */}
          <div className="flex flex-col">
            {/* Logo */}
            <a
              href="#home"
              className="mb-5 flex h-[50px] w-[43px] items-center"
            >
              <img
                src={logo}
                alt="Stroke Design Studio"
                className="block h-full w-full object-contain"
              />
            </a>

            {/* Tagline */}
            <p className="max-w-[230px] text-[17px] font-bold leading-7 text-white">
              We build Your comfortable
              <br />
              space
            </p>

            {/* Social Icons */}
            <div className="mt-4 flex items-center gap-2">
              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a348] text-white transition-all duration-300 hover:bg-[#c9a348] hover:text-[#302e2e]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[16px] w-[16px] fill-current"
                >
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a348] text-white transition-all duration-300 hover:bg-[#c9a348] hover:text-[#302e2e]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px] fill-none stroke-current stroke-[1.7]"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    className="fill-current stroke-none"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a348] text-white transition-all duration-300 hover:bg-[#c9a348] hover:text-[#302e2e]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[16px] w-[16px] fill-current"
                >
                  <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.5v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8v6.1h-3.6v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.5H9.2V9Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* =========================
              MENU
          ========================== */}
          <div>
            <h3 className="mb-5 text-[28px] leading-none font-normal">
              Menu
            </h3>

            <ul className="space-y-1">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block text-[18px] leading-6 text-white transition-colors duration-200 hover:text-[#d1af48]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              POLICY
          ========================== */}
          <div>
            <h3 className="mb-5 text-[28px] leading-none font-normal">
              policy
            </h3>

            <ul className="space-y-1">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block text-[18px] leading-6 text-white transition-colors duration-200 hover:text-[#d1af48]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              CONTACT DETAILS
          ========================== */}
          <div>
            <h3 className="mb-5 text-[28px] leading-none font-normal">
              Contact Details
            </h3>

            <div className="space-y-3">

              {/* Phone 1 */}
              <a
                href="tel:+919325054113"
                className="flex items-start gap-3 text-[16px] leading-5 text-white transition-colors hover:text-[#d1af48]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="mt-[1px] h-[17px] w-[17px] shrink-0 fill-none stroke-current stroke-[1.6]"
                >
                  <path d="M6.6 2.8 9 2.2c.6-.2 1.2.1 1.4.7l1.2 3.2c.2.5 0 1.1-.4 1.4L9.7 9c1.1 2.3 3 4.2 5.3 5.3l1.5-1.5c.4-.4.9-.5 1.4-.3l3.2 1.2c.6.2.9.8.7 1.4l-.6 2.4c-.2.8-.9 1.4-1.7 1.4C10.8 18.9 5.1 13.2 5.1 6.5c0-.8.6-1.5 1.5-1.7Z" />
                </svg>

                <span>+91 9325054113</span>
              </a>

              {/* Phone 2 */}
              <a
                href="tel:+919860344023"
                className="flex items-start gap-3 text-[16px] leading-5 text-white transition-colors hover:text-[#d1af48]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="mt-[1px] h-[17px] w-[17px] shrink-0 fill-none stroke-current stroke-[1.6]"
                >
                  <path d="M6.6 2.8 9 2.2c.6-.2 1.2.1 1.4.7l1.2 3.2c.2.5 0 1.1-.4 1.4L9.7 9c1.1 2.3 3 4.2 5.3 5.3l1.5-1.5c.4-.4.9-.5 1.4-.3l3.2 1.2c.6.2.9.8.7 1.4l-.6 2.4c-.2.8-.9 1.4-1.7 1.4C10.8 18.9 5.1 13.2 5.1 6.5c0-.8.6-1.5 1.5-1.7Z" />
                </svg>

                <span>+91 9860344023</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 text-[16px] leading-6 text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-[3px] h-[17px] w-[17px] shrink-0 fill-none stroke-current stroke-[1.6]"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <p className="m-0 max-w-[260px]">
                  Plot No. 18, Ground Floor,
                  <br />
                  Mahalaxmi Society, Manish
                  <br />
                  Nagar, Near Narendra Nagar,
                  <br />
                  Somalwada, Nagpur,
                  <br />
                  Maharashtra – 440015, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          COPYRIGHT
      ========================== */}
      <div className="border-t border-black/70">
        <div className="mx-auto flex min-h-[47px] w-full max-w-[1250px] items-center justify-center px-5 py-3 text-center">
          <p className="m-0 text-[16px] leading-6 text-white sm:text-[17px]">
            Copyright © 2026 Stroke design studio | Designed by{" "}
            <a
              href="#adborn"
              className="transition-colors hover:text-[#d1af48]"
            >
              Adborn Solutions
            </a>
          </p>
        </div>
      </div>

      {/* =========================
          WHATSAPP BUTTON
      ========================== */}
      {/* <a
        href="https://wa.me/919325054113"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-4 right-4 z-[100] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:bottom-5 sm:right-5 sm:h-[62px] sm:w-[62px]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[34px] w-[34px] fill-white"
        >
          <path d="M20.5 3.5A11.9 11.9 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.87 11.87 0 0 0 5.78 1.48h.01c6.56 0 11.91-5.35 11.91-11.92 0-3.18-1.24-6.17-3.46-8.42ZM12.05 21.7h-.01a9.8 9.8 0 0 1-5-.?  "
        />
        <path
          d="M17.47 14.27c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
        />
      </a> */}
    </footer>
  );
};

export default Footer;