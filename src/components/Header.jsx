import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Stroke_logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-[100] w-full bg-[#302e2e]">
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
            {/* HOME */}

            <Link
              to="/"
              className="
                relative
                py-2
                font-serif
                text-[18px]
                font-bold
                text-[#f3f1f1]
                transition-colors
                duration-200
                hover:text-[#d6bc22]
              "
            >
              Home
              {/* Active underline */}
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
            </Link>

            {/* ABOUT */}

            <Link
              to="/about"
              className="
                py-2
                font-serif
                text-[18px]
                font-bold
                text-[#f3f1f1]
                transition-colors
                duration-200
                hover:text-[#d6bc22]
              "
            >
              About us
            </Link>

            {/* =================================================
    SERVICES DROPDOWN + PAGE LINK
================================================== */}

            <div className="group relative flex items-center">
              {/* SERVICES PAGE LINK */}

              <Link
                to="/services"
                className="
      flex
      cursor-pointer
      items-center
      py-2
      font-serif
      text-[18px]
      font-bold
      text-[#f3f1f1]

      transition-colors
      duration-200

      hover:text-[#d6bc22]
    "
              >
                Services
              </Link>

              {/* DROPDOWN ARROW */}

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
      DESKTOP DROPDOWN
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
                {/* Interior Design */}

                <Link
                  to="/services/interior-design"
                  className="
        block
        rounded

        px-4
        py-3

        font-serif
        text-[16px]
        font-semibold

        text-white

        transition-colors
        duration-200

        hover:bg-white/10
        hover:text-[#d6bc22]
      "
                >
                  Interior Design
                </Link>

                {/* Architecture */}

                <Link
                  to="/services/architecture"
                  className="
        block
        rounded

        px-4
        py-3

        font-serif
        text-[16px]
        font-semibold

        text-white

        transition-colors
        duration-200

        hover:bg-white/10
        hover:text-[#d6bc22]
      "
                >
                  Architecture
                </Link>

                {/* Project Management */}

                <Link
                  to="/services/project-management"
                  className="
        block
        rounded

        px-4
        py-3

        font-serif
        text-[16px]
        font-semibold

        text-white

        transition-colors
        duration-200

        hover:bg-white/10
        hover:text-[#d6bc22]
      "
                >
                  Project Management
                </Link>
              </div>
            </div>

            {/* =================================================
                BLOG
            ================================================== */}

            <Link
              to="/blog"
              className="
                whitespace-nowrap
                py-2
                font-serif
                text-[18px]
                font-bold
                text-[#f3f1f1]
                transition-colors
                duration-200
                hover:text-[#d6bc22]
              "
            >
              Blog
            </Link>

            {/* =================================================
                AWARDS
            ================================================== */}

            <Link
              to="/awardpublication"
              className="
                whitespace-nowrap
                py-2
                font-serif
                text-[18px]
                font-bold
                text-[#f3f1f1]
                transition-colors
                duration-200
                hover:text-[#d6bc22]
              "
            >
              Awards & Publication
            </Link>

            {/* =================================================
                PROJECTS
            ================================================== */}

            <Link
              to="/projects"
              className="
                whitespace-nowrap
                py-2
                font-serif
                text-[18px]
                font-bold
                text-[#f3f1f1]
                transition-colors
                duration-200
                hover:text-[#d6bc22]
              "
            >
              Projects
            </Link>

            {/* =================================================
                GALLERY
            ================================================== */}

            <Link
              to="/gallery"
              className="
                whitespace-nowrap
                py-2
                font-serif
                text-[18px]
                font-bold
                text-[#f3f1f1]
                transition-colors
                duration-200
                hover:text-[#d6bc22]
              "
            >
              Gallery
            </Link>

            {/* =================================================
                CONTACT
            ================================================== */}

            <Link
              to="/contact"
              className="
                whitespace-nowrap
                py-2
                font-serif
                text-[18px]
                font-bold
                text-[#f3f1f1]
                transition-colors
                duration-200
                hover:text-[#d6bc22]
              "
            >
              Contact
            </Link>
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
          {/* HOME */}

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="
              block
              border-b
              border-white/10
              py-4
              font-serif
              text-[17px]
              font-bold
              text-[#d6bc22]
            "
          >
            Home
          </Link>

          {/* ABOUT */}

          <Link
            to="/about"
            onClick={closeMobileMenu}
            className="
              block
              border-b
              border-white/10
              py-4
              font-serif
              text-[17px]
              font-bold
              text-white

              hover:text-[#d6bc22]
            "
          >
            About us
          </Link>

          {/* =================================================
              MOBILE SERVICES
          ================================================== */}

          <div className="border-b border-white/10">
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              className="
                flex
                w-full
                cursor-pointer
                items-center
                justify-between
                py-4
                font-serif
                text-[17px]
                font-bold
                text-white
              "
            >
              <span>Services</span>

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

            {/* Services Submenu */}

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
              <Link
                to="/services"
                onClick={closeMobileMenu}
                className="
                  block
                  px-4
                  py-3
                  font-serif
                  text-[15px]
                  text-white/80
                  hover:text-[#d6bc22]
                "
              >
                Interior Design
              </Link>

              <Link
                to="/services"
                onClick={closeMobileMenu}
                className="
                  block
                  px-4
                  py-3
                  font-serif
                  text-[15px]
                  text-white/80
                  hover:text-[#d6bc22]
                "
              >
                Architecture
              </Link>

              <Link
                to="/services"
                onClick={closeMobileMenu}
                className="
                  block
                  px-4
                  py-3
                  font-serif
                  text-[15px]
                  text-white/80
                  hover:text-[#d6bc22]
                "
              >
                Project Management
              </Link>
            </div>
          </div>

          {/* =================================================
              BLOG
          ================================================== */}

          <Link
            to="/blog"
            onClick={closeMobileMenu}
            className="
              block
              border-b
              border-white/10
              py-4
              font-serif
              text-[17px]
              font-bold
              text-white
              hover:text-[#d6bc22]
            "
          >
            Blog
          </Link>

          {/* =================================================
              AWARDS
          ================================================== */}

          <Link
            to="/awardpublication"
            onClick={closeMobileMenu}
            className="
              block
              border-b
              border-white/10
              py-4
              font-serif
              text-[17px]
              font-bold
              text-white
              hover:text-[#d6bc22]
            "
          >
            Awards & Publication
          </Link>

          {/* =================================================
              PROJECTS
          ================================================== */}

          <Link
            to="/projects"
            onClick={closeMobileMenu}
            className="
              block
              border-b
              border-white/10
              py-4
              font-serif
              text-[17px]
              font-bold
              text-white
              hover:text-[#d6bc22]
            "
          >
            Projects
          </Link>

          {/* =================================================
              GALLERY
          ================================================== */}

          <Link
            to="/gallery"
            onClick={closeMobileMenu}
            className="
              block
              border-b
              border-white/10
              py-4
              font-serif
              text-[17px]
              font-bold
              text-white
              hover:text-[#d6bc22]
            "
          >
            Gallery
          </Link>

          {/* =================================================
              CONTACT
          ================================================== */}

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="
              block
              border-b
              border-white/10
              py-4
              font-serif
              text-[17px]
              font-bold
              text-white
              hover:text-[#d6bc22]
            "
          >
            Contact
          </Link>

          {/* =================================================
              MOBILE QUOTE BUTTON
          ================================================== */}

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
