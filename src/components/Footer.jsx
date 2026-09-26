import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Stroke_logo.png";

const Footer = () => {
  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Awards & Publication", path: "/awardpublication" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const policyLinks = [
    {
      name: "Terms & Condition",
      path: "/terms-and-conditions",
    },
    {
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
  ];

  return (
    <footer className="w-full bg-[#302e2e] font-serif text-white">

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="mx-auto w-full max-w-[1250px] px-6 py-12 sm:px-8 md:py-14 lg:px-10 lg:py-14 xl:px-0">

        <div
          className="
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:grid-cols-[1.25fr_1fr_1fr_1.45fr]
            lg:gap-12
            xl:gap-16
          "
        >

          {/* =====================================================
              BRAND SECTION
          ====================================================== */}

          <div className="flex flex-col">

            {/* LOGO */}

            <Link
              to="/"
              className="mb-5 flex h-[50px] w-[43px] items-center"
              aria-label="Stroke Design Studio Home"
            >
              <img
                src={logo}
                alt="Stroke Design Studio"
                className="block h-full w-full object-contain"
              />
            </Link>

            {/* TAGLINE */}

            <p className="max-w-[230px] text-[17px] font-bold leading-7 text-white">
              We build Your comfortable
              <br />
              space
            </p>

            {/* SOCIAL ICONS */}

            <div className="mt-4 flex items-center gap-2">

              {/* FACEBOOK */}

              <a
                href="https://www.facebook.com/profile.php?id=61585797359985"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#c9a348]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#c9a348]
                  hover:text-[#302e2e]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[16px] w-[16px] fill-current"
                >
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1Z" />
                </svg>
              </a>

              {/* INSTAGRAM */}

              <a
                href="https://www.instagram.com/strokesdeesignstudiio?igsi=MWN1bGNwNXpuMGQ3Zw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#c9a348]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#c9a348]
                  hover:text-[#302e2e]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="
                    h-[17px]
                    w-[17px]
                    fill-none
                    stroke-current
                    stroke-[1.7]
                  "
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    className="fill-current stroke-none"
                  />
                </svg>
              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/company/strokes-deesign-studiio/home/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#c9a348]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#c9a348]
                  hover:text-[#302e2e]
                "
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


          {/* =====================================================
              MENU
          ====================================================== */}

          <div>

            <h3 className="mb-5 text-[28px] leading-none font-normal">
              Menu
            </h3>

            <ul className="space-y-1">

              {menuLinks.map((link) => (
                <li key={link.name}>

                  <Link
                    to={link.path}
                    className="
                      inline-block
                      text-[18px]
                      leading-6
                      text-white
                      transition-colors
                      duration-200
                      hover:text-[#d1af48]
                    "
                  >
                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>
          </div>


          {/* =====================================================
              POLICY
          ====================================================== */}

          <div>

            <h3 className="mb-5 text-[28px] leading-none font-normal">
              policy
            </h3>

            <ul className="space-y-1">

              {policyLinks.map((link) => (
                <li key={link.name}>

                  <Link
                    to={link.path}
                    className="
                      inline-block
                      text-[18px]
                      leading-6
                      text-white
                      transition-colors
                      duration-200
                      hover:text-[#d1af48]
                    "
                  >
                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>
          </div>


          {/* =====================================================
              CONTACT DETAILS
          ====================================================== */}

          <div>

            <h3 className="mb-5 text-[28px] leading-none font-normal">
              Contact Details
            </h3>

            <div className="space-y-3">

              {/* PHONE 1 */}

              <a
                href="tel:+919325054113"
                className="
                  flex
                  items-start
                  gap-3
                  text-[16px]
                  leading-5
                  text-white
                  transition-colors
                  hover:text-[#d1af48]
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  className="
                    mt-[1px]
                    h-[17px]
                    w-[17px]
                    shrink-0
                    fill-none
                    stroke-current
                    stroke-[1.6]
                  "
                >
                  <path d="M6.6 2.8 9 2.2c.6-.2 1.2.1 1.4.7l1.2 3.2c.2.5 0 1.1-.4 1.4L9.7 9c1.1 2.3 3 4.2 5.3 5.3l1.5-1.5c.4-.4.9-.5 1.4-.3l3.2 1.2c.6.2.9.8.7 1.4l-.6 2.4c-.2.8-.9 1.4-1.7 1.4C10.8 18.9 5.1 13.2 5.1 6.5c0-.8.6-1.5 1.5-1.7Z" />
                </svg>

                <span>
                  +91 9325054113
                </span>

              </a>


              {/* PHONE 2 */}

              <a
                href="tel:+919860344023"
                className="
                  flex
                  items-start
                  gap-3
                  text-[16px]
                  leading-5
                  text-white
                  transition-colors
                  hover:text-[#d1af48]
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  className="
                    mt-[1px]
                    h-[17px]
                    w-[17px]
                    shrink-0
                    fill-none
                    stroke-current
                    stroke-[1.6]
                  "
                >
                  <path d="M6.6 2.8 9 2.2c.6-.2 1.2.1 1.4.7l1.2 3.2c.2.5 0 1.1-.4 1.4L9.7 9c1.1 2.3 3 4.2 5.3 5.3l1.5-1.5c.4-.4.9-.5 1.4-.3l3.2 1.2c.6.2.9.8.7 1.4l-.6 2.4c-.2.8-.9 1.4-1.7 1.4C10.8 18.9 5.1 13.2 5.1 6.5c0-.8.6-1.5 1.5-1.7Z" />
                </svg>

                <span>
                  +91 9860344023
                </span>

              </a>


              {/* ADDRESS */}

              <div className="flex items-start gap-3 text-[16px] leading-6 text-white">

                <svg
                  viewBox="0 0 24 24"
                  className="
                    mt-[3px]
                    h-[17px]
                    w-[17px]
                    shrink-0
                    fill-none
                    stroke-current
                    stroke-[1.6]
                  "
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle
                    cx="12"
                    cy="10"
                    r="2.5"
                  />
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


      {/* =====================================================
          COPYRIGHT
      ====================================================== */}

      <div className="border-t border-black/70">

        <div
          className="
            mx-auto
            flex
            min-h-[47px]
            w-full
            max-w-[1250px]
            items-center
            justify-center
            px-5
            py-3
            text-center
          "
        >

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

    </footer>
  );
};

export default Footer;