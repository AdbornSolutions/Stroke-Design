import { preloadGallery } from "../pages/loadGallery";
import { lazy, Suspense, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/optimized/Stroke_logo.webp";
const QuotePopup = lazy(() => import("./QuotePopup"));

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const location = useLocation();

  const [previousPathname, setPreviousPathname] = useState(location.pathname);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  if (previousPathname !== location.pathname) {
    setPreviousPathname(location.pathname);
    closeMobileMenu();
  }

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
      {/* =================================================
          DESKTOP / MAIN NAVBAR
      ================================================== */}

      <nav
        className="
          mx-auto
          grid
          min-h-[81px]
          w-full
          max-w-[1421px]

          grid-cols-[1fr_auto]
          items-center

          px-5
          sm:px-8
          lg:px-9
          xl:px-10

          xl:grid-cols-[auto_auto_auto]
        "
      >
        {/* =================================================
            LOGO
        ================================================== */}

        <Link
          to="/"
          onClick={closeMobileMenu}
          className="
            flex
            shrink-0
            items-center
            justify-self-start
          "
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

        {/* =================================================
            DESKTOP NAVIGATION
            PERFECT CENTER
        ================================================== */}

        <div
          className="
            hidden
            items-center
            justify-self-center
            xl:flex
          "
        >
          <div
            className="
              flex
              items-center
              gap-x-[20px]
              whitespace-nowrap
            "
          >
            {/* HOME */}

            <NavLink to="/" className={() => desktopNavClass(isActive("/"))}>
              Home
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

            {/* ABOUT US */}

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

            {/* SERVICES */}

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

              {/* SERVICES DROPDOWN */}

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
                {/* COMMERCIAL */}

                <NavLink
                  to="/commercial"
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

                {/* RESIDENTIAL */}

                <NavLink
                  to="/residential"
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

                {/* EXTERIOR */}

                <NavLink
                  to="/exterior"
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

                {/* INTERIOR */}

                <NavLink
                  to="/interior"
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

            {/* BLOG */}

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

            {/* AWARDS & PUBLICATION */}

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

            {/* PROJECTS */}

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

            {/* GALLERY */}

            <NavLink
              to="/gallery"
              onPointerEnter={preloadGallery}
              onFocus={preloadGallery}
              onPointerDown={preloadGallery}
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

            {/* CONTACT */}

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
        </div>

        {/* =================================================
            DESKTOP QUOTE BUTTON
        ================================================== */}

        <div
          className="
            hidden
            items-center
            justify-self-end
            xl:flex
          "
        >
          <button
            type="button"
            onClick={() => setIsQuoteOpen(true)}
            className="
              group
              flex
              cursor-pointer
              items-center
              whitespace-nowrap
            "
          >
            {/* TEXT BUTTON */}

            <span
              className="
                flex
                h-[34px]
                items-center
                rounded-full
                bg-[#C99B43]
                px-[16px]
                font-['Playfair_Display']
                text-[19px]
                font-normal
                leading-none
                text-white
                transition-all
                duration-200
                group-hover:bg-[#B88A38]
              "
            >
              Get A Quote
            </span>

            {/* ARROW CIRCLE */}

            <span
              className="
                ml-[4px]
                flex
                h-[34px]
                w-[34px]
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-full
                bg-white
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="
                  h-[29px]
                  w-[29px]
                  rotate-[-45deg]
                  fill-none
                  stroke-black
                  stroke-[2]
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:rotate-0
                "
              >
                <path d="M5 12h13" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </button>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-controls="mobile-navigation"
          className="
            ml-auto
            flex
            h-11
            w-11
            cursor-pointer
            items-center
            justify-between
            justify-self-end
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

      {/* =================================================
          MOBILE MENU
      ================================================== */}

      <div
        id="mobile-navigation"
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
          {/* HOME */}

          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className={() => mobileNavClass(isActive("/"))}
          >
            Home
          </NavLink>

          {/* ABOUT */}

          <NavLink
            to="/about"
            onClick={closeMobileMenu}
            className={() => mobileNavClass(isActive("/about"))}
          >
            About us
          </NavLink>

          {/* MOBILE SERVICES */}

          <div className="border-b border-white/10">
            <div className="flex items-center">
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

        <button
          type="button"
          onClick={() => setServicesOpen((prev) => !prev)}
          aria-label="Open Services submenu"
          aria-expanded={servicesOpen}
          aria-controls="mobile-services-submenu"
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

            {/* MOBILE SERVICES SUBMENU */}

            <div
              id="mobile-services-submenu"
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

          {/* BLOG */}

          <NavLink
            to="/blog"
            onClick={closeMobileMenu}
            className={() => mobileNavClass(isActive("/blog"))}
          >
            Blog
          </NavLink>

          {/* AWARDS & PUBLICATION */}

          <NavLink
            to="/awardpublication"
            onClick={closeMobileMenu}
            className={() => mobileNavClass(isActive("/awardpublication"))}
          >
            Awards & Publication
          </NavLink>

          {/* PROJECTS */}

          <NavLink
            to="/projects"
            onClick={closeMobileMenu}
            className={() => mobileNavClass(isActive("/projects"))}
          >
            Projects
          </NavLink>

          {/* GALLERY */}

          <NavLink
            to="/gallery"
              onPointerEnter={preloadGallery}
              onFocus={preloadGallery}
              onPointerDown={preloadGallery}
            onClick={closeMobileMenu}
            className={() => mobileNavClass(isActive("/gallery"))}
          >
            Gallery
          </NavLink>

          {/* CONTACT */}

          <NavLink
            to="/contact"
            onClick={closeMobileMenu}
            className={() => mobileNavClass(isActive("/contact"))}
          >
            Contact
          </NavLink>

          {/* MOBILE QUOTE BUTTON */}

          <button
            type="button"
            onClick={() => {
              closeMobileMenu();
              setIsQuoteOpen(true);
            }}
            className="
              group
              mt-5
              flex
              w-full
              cursor-pointer
              items-center
              justify-center
              whitespace-nowrap
            "
          >
            <span
              className="
                flex
                h-[47px]
                items-center
                rounded-full
                bg-[#D6A84F]
                px-[22px]
                font-['Playfair_Display']
                text-[20px]
                font-normal
                leading-none
                text-white
                transition-all
                duration-200
                group-hover:bg-[#c99b43]
              "
            >
              Get A Quote
            </span>

            <span
              className="
                ml-[4px]
                flex
                h-[39px]
                w-[39px]
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-full
                bg-white
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="
                  h-[27px]
                  w-[27px]
                  rotate-[-45deg]
                  fill-none
                  stroke-black
                  stroke-[2]
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:rotate-0
                "
              >
                <path d="M5 12h13" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* =================================================
          QUOTE POPUP
      ================================================== */}

      {isQuoteOpen && <Suspense fallback={null}><QuotePopup isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} /></Suspense>}
    </header>
  );
};

export default Header;
