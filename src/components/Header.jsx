import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/Stroke_logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  /*
   * =====================================================
   * ACTIVE ROUTE CHECK
   * =====================================================
   */

  const isServicesActive =
    location.pathname === "/services" ||
    location.pathname.startsWith("/services/");

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  /*
   * =====================================================
   * DESKTOP NAV LINK CLASS
   * =====================================================
   */

  const desktopNavClass = (active) => `
    relative
    whitespace-nowrap
    py-2
    font-serif
    text-[18px]
    font-bold
    transition-colors
    duration-200

    ${active ? "text-[#d6bc22]" : "text-[#f3f1f1] hover:text-[#d6bc22]"}
  `;

  /*
   * =====================================================
   * MOBILE NAV LINK CLASS
   * =====================================================
   */

  const mobileNavClass = (active) => `
    block
    border-b
    border-white/10
    py-4
    font-serif
    text-[17px]
    font-bold
    transition-colors
    duration-200

    ${active ? "text-[#d6bc22]" : "text-white hover:text-[#d6bc22]"}
  `;

  return (
    <header className="sticky top-0 z-[100] w-full bg-[#302e2e]">
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav
        className="
          mx-auto
          flex
          min-h-[81px]
          w-full
          max-w-[1421px]
          items-center
          px-5
          sm:px-8
          lg:px-9
          xl:px-10
        "
      >
        {/* =====================================================
            LOGO
        ====================================================== */}

        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center"
          aria-label="Strokes Design Studio Home"
        >
          <img
            src={logo}
            alt="Strokes Design Studio"
            className="
              h-[50px]
              w-auto
              object-contain

              sm:h-[52px]
            "
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <div className="ml-auto hidden items-center xl:flex">
          <div className="flex items-center gap-x-7 xl:gap-x-8">
            {/* =================================================
                HOME
            ================================================== */}

            <NavLink to="/" className={() => desktopNavClass(isActive("/"))}>
              Home
              {/* ACTIVE UNDERLINE */}
              {isActive("/") && (
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    bg-[#d6bc22]
                  "
                />
              )}
            </NavLink>

            {/* =================================================
                ABOUT
            ================================================== */}

            <NavLink
              to="/about"
              className={() => desktopNavClass(isActive("/about"))}
            >
              About us
              {isActive("/about") && (
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    bg-[#d6bc22]
                  "
                />
              )}
            </NavLink>

            {/* =================================================
                SERVICES
                PAGE LINK + DROPDOWN
            ================================================== */}

            <div className="group relative flex items-center">

              <NavLink
                to="/services"
                className={() => desktopNavClass(isServicesActive)}
              >
                Services
                {isServicesActive && (
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-full
                      bg-[#d6bc22]
                    "
                  />
                )}
              </NavLink>

              <button
                type="button"
                aria-label="Open Services menu"
                className="
                  ml-1
                  flex
                  h-8
                  w-6
                  cursor-pointer
                  items-center
                  justify-center
                  text-[#f3f1f1]
                  transition-colors
                  duration-200
                  hover:text-[#d6bc22]
                "
              >
                <svg
                  className="
                    h-3
                    w-3
                    fill-current
                    transition-transform
                    duration-200
                    group-hover:rotate-180
                  "
                  viewBox="0 0 12 8"
                  aria-hidden="true"
                >
                  <path d="M1 1.5L6 6.5L11 1.5" />
                </svg>
              </button>

              {/* =================================================
                  DESKTOP SERVICES DROPDOWN
              ================================================== */}

              <div
                className="
                  invisible
                  absolute
                  left-0
                  top-full
                  z-[200]
                  mt-2
                  w-56
                  translate-y-2
                  rounded-md
                  bg-[#302e2e]
                  p-2
                  opacity-0
                  shadow-xl
                  transition-all
                  duration-200
                  group-hover:visible
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <NavLink
                  to="/services/commercial"
                  className={({ isActive }) => `
                    block
                    rounded
                    px-4
                    py-3
                    font-serif
                    text-[16px]
                    font-semibold
                    transition-colors
                    duration-200

                    ${
                      isActive
                        ? "bg-white/10 text-[#d6bc22]"
                        : "text-white hover:bg-white/10 hover:text-[#d6bc22]"
                    }
                  `}
                >
                  Commercial
                </NavLink>

                <NavLink
                  to="/services/residential"
                  className={({ isActive }) => `
                    block
                    rounded
                    px-4
                    py-3
                    font-serif
                    text-[16px]
                    font-semibold
                    transition-colors
                    duration-200

                    ${
                      isActive
                        ? "bg-white/10 text-[#d6bc22]"
                        : "text-white hover:bg-white/10 hover:text-[#d6bc22]"
                    }
                  `}
                >
                  Residential
                </NavLink>

                <NavLink
                  to="/services/exterior"
                  className={({ isActive }) => `
                    block
                    rounded
                    px-4
                    py-3
                    font-serif
                    text-[16px]
                    font-semibold
                    transition-colors
                    duration-200

                    ${
                      isActive
                        ? "bg-white/10 text-[#d6bc22]"
                        : "text-white hover:bg-white/10 hover:text-[#d6bc22]"
                    }
                  `}
                >
                  Exterior
                </NavLink>
                <NavLink
                  to="/services/interior"
                  className={({ isActive }) => `
                    block
                    rounded
                    px-4
                    py-3
                    font-serif
                    text-[16px]
                    font-semibold
                    transition-colors
                    duration-200

                    ${
                      isActive
                        ? "bg-white/10 text-[#d6bc22]"
                        : "text-white hover:bg-white/10 hover:text-[#d6bc22]"
                    }
                  `}
                >
                  Interior
                </NavLink>
              </div>
            </div>

            {/* =================================================
                BLOG
            ================================================== */}

            <NavLink
              to="/blog"
              className={() => desktopNavClass(isActive("/blog"))}
            >
              Blog
              {isActive("/blog") && (
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    bg-[#d6bc22]
                  "
                />
              )}
            </NavLink>

            {/* =================================================
                AWARDS
            ================================================== */}

            <NavLink
              to="/awardpublication"
              className={() => desktopNavClass(isActive("/awardpublication"))}
            >
              Awards & Publication
              {isActive("/awardpublication") && (
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    bg-[#d6bc22]
                  "
                />
              )}
            </NavLink>

            {/* =================================================
                PROJECTS
            ================================================== */}

            <NavLink
              to="/projects"
              className={() => desktopNavClass(isActive("/projects"))}
            >
              Projects
              {isActive("/projects") && (
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    bg-[#d6bc22]
                  "
                />
              )}
            </NavLink>

            {/* =================================================
                GALLERY
            ================================================== */}

            <NavLink
              to="/gallery"
              className={() => desktopNavClass(isActive("/gallery"))}
            >
              Gallery
              {isActive("/gallery") && (
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    bg-[#d6bc22]
                  "
                />
              )}
            </NavLink>

            {/* =================================================
                CONTACT
            ================================================== */}

            <NavLink
              to="/contact"
              className={() => desktopNavClass(isActive("/contact"))}
            >
              Contact
              {isActive("/contact") && (
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    bg-[#d6bc22]
                  "
                />
              )}
            </NavLink>
          </div>

          {/* =================================================
              GET A QUOTE
          ================================================== */}

          <Link
            to="/contact"
            className="
              ml-8
              flex
              h-[39px]
              items-center
              gap-2
              whitespace-nowrap
              rounded-full
              bg-[#DAC322]
              px-4
              text-[16px]
              font-bold
              text-black
              shadow-sm
              transition-all
              duration-200
              hover:bg-[#46c45e]
              hover:shadow-md
              xl:ml-9
            "
          >
            <span>Get A Quote</span>

            <span
              className="
                flex
                h-[18px]
                w-[18px]
                items-center
                justify-center
                rounded-full
                bg-black/20
              "
            >
              <svg
                viewBox="0 0 20 20"
                className="
                  h-[15px]
                  w-[15px]
                  fill-none
                  stroke-black
                  stroke-[2]
                "
              >
                <path d="M4 10h11" />
                <path d="M11 6l4 4-4 4" />
              </svg>
            </span>
          </Link>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="
            ml-auto
            flex
            h-11
            w-11
            cursor-pointer
            items-center
            justify-center
            rounded-md
            text-white
            xl:hidden
          "
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <div className="flex w-6 flex-col gap-[5px]">
            <span
              className={`
                h-[2px]
                w-full
                bg-white
                transition-transform
                duration-300

                ${mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""}
              `}
            />

            <span
              className={`
                h-[2px]
                w-full
                bg-white
                transition-opacity
                duration-300

                ${mobileMenuOpen ? "opacity-0" : "opacity-100"}
              `}
            />

            <span
              className={`
                h-[2px]
                w-full
                bg-white
                transition-transform
                duration-300

                ${mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""}
              `}
            />
          </div>
        </button>
      </nav>

      {/* =======================================================
          MOBILE MENU
      ======================================================== */}

      <div
        className={`
          overflow-hidden
          border-t
          border-white/10
          bg-[#302e2e]
          transition-all
          duration-300
          xl:hidden

          ${mobileMenuOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-5 pb-6 pt-3 sm:px-8">
          {/* =================================================
              HOME
          ================================================== */}

          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className={() => mobileNavClass(isActive("/"))}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMobileMenu}
            className={() => mobileNavClass(isActive("/about"))}
          >
            About us
          </NavLink>

          <div className="border-b border-white/10">
            <div className="flex items-center">
              {/* SERVICES PAGE LINK */}

              <NavLink
                to="/services"
                onClick={closeMobileMenu}
                className={`
                  flex-1
                  py-4
                  font-serif
                  text-[17px]
                  font-bold
                  transition-colors
                  duration-200

                  ${
                    isServicesActive
                      ? "text-[#d6bc22]"
                      : "text-white hover:text-[#d6bc22]"
                  }
                `}
              >
                Services
              </NavLink>

              {/* MOBILE DROPDOWN BUTTON */}

              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                aria-label="Open Services submenu"
                className="
                  flex
                  h-10
                  w-10
                  cursor-pointer
                  items-center
                  justify-center
                  text-white
                "
              >
                <svg
                  className={`
                    h-3
                    w-3
                    fill-current
                    transition-transform
                    duration-200

                    ${servicesOpen ? "rotate-180" : ""}
                  `}
                  viewBox="0 0 12 8"
                >
                  <path d="M1 1.5L6 6.5L11 1.5" />
                </svg>
              </button>
            </div>

            <div
              className={`
                overflow-hidden
                transition-all
                duration-300

                ${
                  servicesOpen
                    ? "max-h-60 pb-2 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <NavLink
                to="/services/commercial"
                onClick={closeMobileMenu}
                className={({ isActive }) => `
                  block
                  px-4
                  py-3
                  font-serif
                  text-[15px]
                  transition-colors
                  duration-200

                  ${
                    isActive
                      ? "text-[#d6bc22]"
                      : "text-white/80 hover:text-[#d6bc22]"
                  }
                `}
              >
                Commercial
              </NavLink>

              <NavLink
                to="/services/residential"
                onClick={closeMobileMenu}
                className={({ isActive }) => `
                  block
                  px-4
                  py-3
                  font-serif
                  text-[15px]
                  transition-colors
                  duration-200

                  ${
                    isActive
                      ? "text-[#d6bc22]"
                      : "text-white/80 hover:text-[#d6bc22]"
                  }
                `}
              >
                Residential
              </NavLink>

              <NavLink
                to="/services/Exterior"
                onClick={closeMobileMenu}
                className={({ isActive }) => `
                  block
                  px-4
                  py-3
                  font-serif
                  text-[15px]
                  transition-colors
                  duration-200

                  ${
                    isActive
                      ? "text-[#d6bc22]"
                      : "text-white/80 hover:text-[#d6bc22]"
                  }
                `}
              >
                Exterior
              </NavLink>

              <NavLink
                to="/services/Interior"
                onClick={closeMobileMenu}
                className={({ isActive }) => `
                  block
                  px-4
                  py-3
                  font-serif
                  text-[15px]
                  transition-colors
                  duration-200

                  ${
                    isActive
                      ? "text-[#d6bc22]"
                      : "text-white/80 hover:text-[#d6bc22]"
                  }
                `}
              >
                Interior
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/blog"
            onClick={closeMobileMenu}
            className={() => mobileNavClass(isActive("/blog"))}
          >
            Blog
          </NavLink>

          <NavLink
            to="/awardpublication"
            onClick={closeMobileMenu}
            className={() => mobileNavClass(isActive("/awardpublication"))}
          >
            Awards & Publication
          </NavLink>

          {/* =================================================
              PROJECTS
          ================================================== */}

          <NavLink
            to="/projects"
            onClick={closeMobileMenu}
            className={() => mobileNavClass(isActive("/projects"))}
          >
            Projects
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={closeMobileMenu}
            className={() => mobileNavClass(isActive("/gallery"))}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMobileMenu}
            className={() => mobileNavClass(isActive("/contact"))}
          >
            Contact
          </NavLink>

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="
              mt-5
              flex
              h-11
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#DAC322]
              font-bold
              text-black
              transition-colors
              duration-200
              hover:bg-[#46c45e]
            "
          >
            <span>Get A Quote</span>

            <span
              className="
                flex
                h-[19px]
                w-[19px]
                items-center
                justify-center
                rounded-full
                bg-black/20
              "
            >
              <svg
                viewBox="0 0 20 20"
                className="
                  h-[15px]
                  w-[15px]
                  fill-none
                  stroke-black
                  stroke-[2]
                "
              >
                <path d="M4 10h11" />
                <path d="M11 6l4 4-4 4" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
