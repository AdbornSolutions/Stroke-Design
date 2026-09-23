const ContactInformation = () => {
  return (
    <section className="w-full bg-transparent px-4 py-8 sm:px-6 md:px-8 lg:px-[6.2%]">
      <h2
        className="
          mb-10
          font-['Arial',Helvetica,sans-serif]
          text-[22px]
          font-normal
          leading-[1.2]
          text-black

          sm:text-[23px]
          md:text-[24px]
        "
      >
        Contact Information
      </h2>

      <div
        className="
          grid
          w-full
          grid-cols-1

          border
          border-[#333333]

          md:grid-cols-3
        "
      >
        <div
          className="
            min-h-[150px]
            border-b
            border-[#333333]
            p-4

            sm:p-5

            md:min-h-[152px]
            md:border-b-0
            md:border-r
            md:p-[12px]
          "
        >
          <div
            className="
              flex
              items-center
              gap-[10px]

              font-['Arial',Helvetica,sans-serif]
              text-[13px]
              font-normal
              leading-none
              text-black
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d21f2f"
              strokeWidth="1.5"
              className="h-[18px] w-[18px] shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"
              />

              <circle cx="12" cy="10" r="2.2" />
            </svg>

            <span>LOCATION</span>
          </div>

          {/* LOCATION CONTENT */}

          <p
            className="
              m-0
              mt-[25px]

              pl-[24px]

              font-['Arial',Helvetica,sans-serif]
              text-[13px]
              font-normal
              leading-[1.85]

              text-[#071b3b]

              sm:text-[13px]
              md:text-[13px]
            "
          >
            Plot No. 18, Ground Floor, Mahalaxmi Society, Manish Nagar, Near
            Narendra Nagar, Somalwada, Nagpur, Maharashtra – 440015, India
          </p>
        </div>

        <div
          className="
            min-h-[150px]
            border-b
            border-[#333333]
            p-4

            sm:p-5

            md:min-h-[152px]
            md:border-b-0
            md:border-r
            md:p-[12px]
          "
        >

          <div
            className="
              flex
              items-center
              gap-[10px]

              font-['Arial',Helvetica,sans-serif]
              text-[13px]
              font-normal
              leading-none
              text-black
            "
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d21f2f"
              strokeWidth="1.4"
              className="h-[18px] w-[18px] shrink-0"
            >
              <rect x="3" y="5" width="18" height="14" />

              <path d="M4 7l8 6 8-6" />
            </svg>

            <span>Email</span>
          </div>

          <p
            className="
              m-0
              mt-[25px]

              pl-[34px]

              font-['Arial',Helvetica,sans-serif]
              text-[13px]
              font-normal
              leading-[1.5]

              text-[#071b3b]
            "
          >
            strokedesign@gmail.com
          </p>
        </div>

        <div
          className="
            min-h-[150px]
            p-4

            sm:p-5

            md:min-h-[152px]
            md:p-[12px]
          "
        >
          <div
            className="
              flex
              items-center
              gap-[10px]

              font-['Arial',Helvetica,sans-serif]
              text-[13px]
              font-normal
              leading-none
              text-black
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d21f2f"
              strokeWidth="1.5"
              className="h-[18px] w-[18px] shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.7 3.5l2.5-.7c.7-.2 1.4.2 1.7.9l1.2 2.9c.2.5.1 1.1-.3 1.5L10.3 9.6a14.5 14.5 0 0 0 4.1 4.1l1.5-1.5c.4-.4 1-.5 1.5-.3l2.9 1.2c.7.3 1.1 1 .9 1.7l-.7 2.5c-.2.8-1 1.3-1.8 1.2C10.5 17.5 6.5 13.5 5.5 5.3c-.1-.8.4-1.6 1.2-1.8Z"
              />

              <path strokeLinecap="round" d="M14.5 4.5c2.2.5 4 2.3 4.5 4.5" />

              <path strokeLinecap="round" d="M14.5 1.5c3.8.6 6.9 3.7 7.5 7.5" />
            </svg>

            <span>Phone</span>
          </div>

          <p
            className="
              m-0
              mt-[25px]

              pl-[34px]

              font-['Arial',Helvetica,sans-serif]
              text-[13px]
              font-normal
              leading-[1.5]

              text-[#071b3b]
            "
          >
            +91 9325054113 / +91 9860344023
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
