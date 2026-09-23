const ContactForm = () => {
  return (
    <section className="w-full overflow-hidden bg-[#F7F7F7]">
      <section className="relative w-full overflow-hidden px-5 pb-8 pt-7 sm:px-8 md:px-[38px] lg:px-10">
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1400px]
            grid-cols-1
            items-start
            lg:grid-cols-[clamp(220px,22%,305px)_minmax(500px,1fr)_clamp(280px,30%,390px)]
          "
        >
          <div
            className="
              relative
              h-[75px]
              w-[150px]

              lg:h-[115px]
              lg:w-full

              before:absolute
              before:left-[-20px]
              before:top-[21px]
              before:h-px
              before:w-[170px]
              before:bg-[#BDBDBD]

              after:absolute
              after:left-[106px]
              after:top-0
              after:h-[67px]
              after:w-px
              after:bg-[#C6C6C6]

              lg:before:left-0
              lg:before:top-[33px]
              lg:before:w-full

              lg:after:left-[72%]
              lg:after:top-0
              lg:after:h-[112px]
            "
          >
            <div
              className="
                absolute
                left-0
                top-[32px]
                z-10
                inline-flex
                items-center
                justify-center
                gap-[5px]
                whitespace-nowrap
                rounded-full
                border
                border-[#CAA05C]
                bg-white
                px-[8px]
                py-[4px]

                font-['Playfair_Display',Georgia,serif]
                text-[11px]
                font-semibold
                leading-none
                text-[#1E1E1E]

                lg:left-[1px]
                lg:top-[42px]
                lg:px-[9px]
                lg:py-[5px]
                lg:pl-[6px]
                lg:text-[14px]
              "
            >
              <span
                className="
                  block
                  h-[7px]
                  w-[7px]
                  shrink-0
                  rounded-full
                  bg-[#111111]

                  lg:h-[8px]
                  lg:w-[8px]
                "
              />

              <span>Contact us</span>
            </div>
          </div>

          <div
            className="
              w-full
              pt-[11px]

              lg:pt-[43px]
            "
          >
            <h2
              className="
                m-0
                p-0

                font-['Playfair_Display',Georgia,'Times_New_Roman',serif]
                text-[27px]
                font-bold
                leading-[1.12]
                tracking-normal
                text-black

                sm:text-[30px]

                lg:text-[clamp(34px,3.15vw,48px)]
              "
            >
              <span className="block whitespace-normal lg:whitespace-nowrap">
                Do You <span className="text-[#CAA05C]">Need Any Help ?</span>
              </span>

              <span className="mt-1 block whitespace-normal lg:whitespace-nowrap">
                Send <span className="text-[#CAA05C]">Message.</span>
              </span>
            </h2>
          </div>
        </div>
      </section>

      <section
        className="
          w-full
          px-5
          pb-12
          pt-2

          sm:px-8
          md:px-[42px]

          lg:px-[42px]
          lg:pb-[56px]
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1400px]
            grid-cols-1
            gap-8

            lg:grid-cols-2
            lg:gap-10
          "
        >
          <div className="w-full">
            <form className="w-full">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  required
                  className="
                    h-[59px]
                    w-full
                    rounded-[5px]
                    border-0
                    border-b
                    border-[#7D8790]
                    bg-white
                    px-5

                    font-['Arial',Helvetica,sans-serif]
                    text-[16px]
                    font-normal
                    text-black

                    outline-none
                    transition-all
                    duration-200

                    placeholder:text-[#A8A8A8]

                    focus:border-[#CAA05C]
                    focus:ring-1
                    focus:ring-[#CAA05C]
                  "
                />
              </div>

              <div
                className="
                  mb-4
                  grid
                  grid-cols-1
                  gap-4

                  sm:grid-cols-2
                "
              >
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No. *"
                  required
                  className="
                    h-[59px]
                    w-full
                    rounded-[5px]
                    border-0
                    border-b
                    border-[#7D8790]
                    bg-white
                    px-5

                    font-['Arial',Helvetica,sans-serif]
                    text-[16px]
                    text-black

                    outline-none

                    placeholder:text-[#A8A8A8]

                    focus:border-[#CAA05C]
                    focus:ring-1
                    focus:ring-[#CAA05C]
                  "
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="
                    h-[59px]
                    w-full
                    rounded-[5px]
                    border-0
                    border-b
                    border-[#7D8790]
                    bg-white
                    px-5

                    font-['Arial',Helvetica,sans-serif]
                    text-[16px]
                    text-black

                    outline-none

                    placeholder:text-[#A8A8A8]

                    focus:border-[#CAA05C]
                    focus:ring-1
                    focus:ring-[#CAA05C]
                  "
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  className="
                    h-[59px]
                    w-full
                    rounded-[5px]
                    border-0
                    border-b
                    border-[#7D8790]
                    bg-white
                    px-5

                    font-['Arial',Helvetica,sans-serif]
                    text-[16px]
                    text-black

                    outline-none

                    placeholder:text-[#A8A8A8]

                    focus:border-[#CAA05C]
                    focus:ring-1
                    focus:ring-[#CAA05C]
                  "
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Write a Comment"
                  rows={5}
                  className="
                    min-h-[116px]
                    w-full
                    resize-none
                    rounded-[5px]
                    border-0
                    border-b
                    border-[#7D8790]
                    bg-white
                    px-5
                    py-3

                    font-['Arial',Helvetica,sans-serif]
                    text-[16px]
                    leading-[1.5]
                    text-black

                    outline-none

                    placeholder:text-[#A8A8A8]

                    focus:border-[#CAA05C]
                    focus:ring-1
                    focus:ring-[#CAA05C]
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  mt-0
                  inline-flex
                  h-[55px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#CAA05C]
                  bg-transparent
                  px-[19px]

                  font-['Arial',Helvetica,sans-serif]
                  text-[15px]
                  font-semibold
                  text-black

                  transition-all
                  duration-200

                  hover:bg-[#CAA05C]
                  hover:text-white
                "
              >
                <span>Send message</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[17px] w-[17px]"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <path
                    d="M9 12h6M12.5 9.5L15 12l-2.5 2.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>

          <div
            className="
              relative
              h-[380px]
              w-full
              overflow-hidden

              sm:h-[430px]

              md:h-[480px]

              lg:h-[540px]
          "
          >
            <iframe
              title="Location Map"
              src="https://www.google.com/maps?q=Mahalaxmi%20Nagar,%20Nagpur,%20Maharashtra&output=embed"
              className="
                h-full
                w-full
                border-0
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactForm;
