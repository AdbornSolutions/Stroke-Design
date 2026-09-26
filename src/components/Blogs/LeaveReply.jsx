import { useState } from "react";

const LeaveReply = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="w-full bg-white px-5 py-8 sm:px-8 md:px-10 lg:px-[7%]">
      <div className="mx-auto w-full max-w-[1285px] border-t border-[#d0d0d0] pt-7 sm:pt-8 md:pt-9">
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-8

            lg:grid-cols-[1fr_570px]
            lg:gap-x-10
            xl:grid-cols-[1fr_570px]
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="w-full">
            <h2
              className="
                m-0

                font-['Arial',Helvetica,sans-serif]
                text-[26px]
                font-bold
                leading-[1.2]

                text-[#111827]

                sm:text-[27px]
                md:text-[28px]
              "
            >
              Leave A Reply
            </h2>

            <p
              className="
                m-0
                mt-5

                font-['Arial',Helvetica,sans-serif]
                text-[15px]
                font-normal
                leading-[1.5]

                text-black

                sm:text-[15px]
              "
            >
              Your email address will not be published. Required fields are
              marked <span className="font-semibold">*</span>
            </p>
          </div>

          {/* =====================================================
              RIGHT FORM
          ===================================================== */}

          <form onSubmit={handleSubmit} className="w-full">
            {/* NAME + EMAIL */}

            <div
              className="
                grid
                grid-cols-1
                gap-4

                sm:grid-cols-2
              "
            >
              {/* NAME */}

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
                required
                className="
                  h-[43px]
                  w-full

                  rounded-[5px]

                  border
                  border-[#7d8792]

                  bg-white

                  px-[12px]

                  font-['Arial',Helvetica,sans-serif]
                  text-[14px]
                  font-normal

                  text-black

                  outline-none

                  placeholder:text-[#a7a7a7]

                  transition-all
                  duration-200

                  focus:border-[#CAA05C]
                  focus:ring-1
                  focus:ring-[#CAA05C]
                "
              />

              {/* EMAIL */}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                className="
                  h-[43px]
                  w-full

                  rounded-[5px]

                  border
                  border-[#7d8792]

                  bg-white

                  px-[12px]

                  font-['Arial',Helvetica,sans-serif]
                  text-[14px]
                  font-normal

                  text-black

                  outline-none

                  placeholder:text-[#a7a7a7]

                  transition-all
                  duration-200

                  focus:border-[#CAA05C]
                  focus:ring-1
                  focus:ring-[#CAA05C]
                "
              />
            </div>

            {/* MESSAGE */}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message Here *"
              required
              rows={5}
              className="
                mt-4
                block

                h-[96px]
                w-full

                resize-none

                rounded-[5px]

                border
                border-[#7d8792]

                bg-white

                px-[12px]
                py-[8px]

                font-['Arial',Helvetica,sans-serif]
                text-[14px]
                font-normal
                leading-[1.4]

                text-black

                outline-none

                placeholder:text-[#a7a7a7]

                transition-all
                duration-200

                focus:border-[#CAA05C]
                focus:ring-1
                focus:ring-[#CAA05C]
              "
            />

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              className="
                mt-4

                inline-flex
                h-[55px]

                items-center
                justify-center
                gap-2

                rounded-full

                border
                border-[#CAA05C]

                bg-white

                px-[18px]

                font-['Arial',Helvetica,sans-serif]
                text-[15px]
                font-semibold

                text-black

                transition-all
                duration-300

                hover:bg-[#CAA05C]
                hover:text-white

                active:scale-[0.98]

                sm:px-[18px]
              "
            >
              <span>Post the comment</span>

              {/* Arrow Circle */}

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
            </button>

            {/* SUCCESS MESSAGE */}

            {submitted && (
              <p
                className="
                  mt-3

                  font-['Arial',Helvetica,sans-serif]
                  text-[13px]
                  text-[#6b7280]
                "
              >
                Your comment has been submitted.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeaveReply;
