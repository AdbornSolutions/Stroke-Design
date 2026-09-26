import { useState } from "react";
import quoteImage from "../assets/about-Interior-Design.png";

const QuotePopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    projectType: "",
    budget: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Quote Request:", formData);

    // Add your API / email submission here
  };

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/40
        px-[15px]
        py-[20px]
        backdrop-blur-[2px]
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          w-full
          max-w-[580px]
          overflow-hidden
          border
          border-[#222]
          bg-white
          shadow-[0_15px_50px_rgba(0,0,0,0.20)]

          sm:max-w-[620px]
          md:max-w-[720px]
          lg:max-w-[900px]
          xl:max-w-[950px]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* =================================================
            CLOSE BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="
            absolute
            right-[12px]
            top-[12px]
            z-20
            flex
            h-[18px]
            w-[18px]
            items-center
            justify-center
            text-[18px]
            font-normal
            leading-none
            text-[#222]
            transition-colors
            duration-200
            hover:text-black
          "
        >
          ×
        </button>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1

            lg:grid-cols-2
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div
            className="
              flex
              flex-col
              justify-between
              px-[28px]
              pb-[28px]
              pt-[52px]

              sm:px-[32px]
              sm:pb-[32px]
              sm:pt-[52px]

              md:px-[40px]
              md:pb-[40px]

              lg:px-[28px]
              lg:pb-[36px]
              lg:pt-[58px]

              xl:px-[40px]
              xl:pb-[40px]
            "
          >
            {/* TOP CONTENT */}

            <div>
              <p
                className="
                  m-0
                  font-['Arial',Helvetica,sans-serif]
                  text-[13px]
                  font-normal
                  leading-[1.4]
                  text-[#111]

                  sm:text-[14px]
                "
              >
                Enquiry
              </p>

              <h2
                className="
                  mt-[20px]
                  max-w-[260px]
                  font-['Arial',Helvetica,sans-serif]
                  text-[22px]
                  font-semibold
                  leading-[1.35]
                  tracking-[-0.4px]
                  text-[#111]

                  sm:mt-[22px]
                  sm:text-[24px]

                  lg:text-[23px]

                  xl:text-[24px]
                "
              >
                Get Your Free Quote
                <br />
                Today
              </h2>

              <p
                className="
                  mt-[20px]
                  max-w-[275px]
                  font-['Arial',Helvetica,sans-serif]
                  text-[14px]
                  font-normal
                  leading-[1.6]
                  text-[#777]

                  sm:mt-[22px]
                  sm:text-[15px]

                  lg:text-[14px]
                "
              >
                Fill out the form with details about your upcoming project. Our
                team will review your requirements and reach out to discuss the
                next steps realizing your vision.
              </p>
            </div>

            {/* =================================================
                LEFT IMAGE
            ================================================== */}

            <div
              className="
                mt-[28px]
                h-[150px]
                w-full
                overflow-hidden

                sm:mt-[32px]
                sm:h-[170px]

                md:h-[185px]

                lg:mt-[28px]
                lg:h-[135px]

                xl:h-[150px]
              "
            >
              <img
                src={quoteImage}
                alt="Interior Design"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </div>
          </div>

          {/* =================================================
              RIGHT FORM
          ================================================== */}

          <div
            className="
              px-[28px]
              pb-[32px]
              pt-[20px]

              sm:px-[32px]
              sm:pb-[35px]

              md:px-[40px]

              lg:px-[28px]
              lg:pb-[35px]
              lg:pt-[45px]

              xl:px-[40px]
            "
          >
            <form onSubmit={handleSubmit}>
              {/* =================================================
                  NAME + PHONE
              ================================================== */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-[20px]

                  sm:grid-cols-2
                  sm:gap-[12px]
                "
              >
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="
                      h-[42px]
                      w-full
                      border-0
                      border-b
                      border-[#8c96a3]
                      bg-transparent
                      px-[12px]
                      pb-[8px]
                      pt-[5px]
                      font-['Arial',Helvetica,sans-serif]
                      text-[14px]
                      text-[#333]
                      outline-none
                      placeholder:text-[#b4b4b4]
                      focus:border-[#555]
                    "
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    required
                    className="
                      h-[42px]
                      w-full
                      border-0
                      border-b
                      border-[#8c96a3]
                      bg-transparent
                      px-[12px]
                      pb-[8px]
                      pt-[5px]
                      font-['Arial',Helvetica,sans-serif]
                      text-[14px]
                      text-[#333]
                      outline-none
                      placeholder:text-[#b4b4b4]
                      focus:border-[#555]
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  EMAIL
              ================================================== */}

              <div className="mt-[20px]">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="
                    h-[42px]
                    w-full
                    border-0
                    border-b
                    border-[#8c96a3]
                    bg-transparent
                    px-[12px]
                    pb-[8px]
                    pt-[5px]
                    font-['Arial',Helvetica,sans-serif]
                    text-[14px]
                    text-[#333]
                    outline-none
                    placeholder:text-[#b4b4b4]
                    focus:border-[#555]
                  "
                />
              </div>

              {/* =================================================
                  PROJECT TYPE + BUDGET
              ================================================== */}

              <div
                className="
                  mt-[20px]
                  grid
                  grid-cols-1
                  gap-[20px]

                  sm:grid-cols-2
                  sm:gap-[12px]
                "
              >
                <div className="relative">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="
                      h-[42px]
                      w-full
                      appearance-none
                      border-0
                      border-b
                      border-[#8c96a3]
                      bg-transparent
                      px-[12px]
                      pb-[8px]
                      pt-[5px]
                      font-['Arial',Helvetica,sans-serif]
                      text-[14px]
                      text-[#999]
                      outline-none
                      focus:border-[#555]
                    "
                  >
                    <option value="" selected>Project Type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                  </select>

                  <span
                    className="
                      pointer-events-none
                      absolute
                      right-[10px]
                      top-[16px]
                      h-0
                      w-0
                      border-l-[5px]
                      border-r-[5px]
                      border-t-[6px]
                      border-l-transparent
                      border-r-transparent
                      border-t-[#888]
                    "
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Approximate Budget"
                    className="
                      h-[42px]
                      w-full
                      border-0
                      border-b
                      border-[#8c96a3]
                      bg-transparent
                      px-[12px]
                      pb-[8px]
                      pt-[5px]
                      font-['Arial',Helvetica,sans-serif]
                      text-[14px]
                      text-[#333]
                      outline-none
                      placeholder:text-[#b4b4b4]
                      focus:border-[#555]
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  PROJECT LOCATION
              ================================================== */}

              <div className="mt-[20px]">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Project Location *"
                  required
                  className="
                    h-[42px]
                    w-full
                    border-0
                    border-b
                    border-[#8c96a3]
                    bg-transparent
                    px-[12px]
                    pb-[8px]
                    pt-[5px]
                    font-['Arial',Helvetica,sans-serif]
                    text-[14px]
                    text-[#333]
                    outline-none
                    placeholder:text-[#b4b4b4]
                    focus:border-[#555]
                  "
                />
              </div>

              {/* =================================================
                  MESSAGE
              ================================================== */}

              <div className="mt-[20px]">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell Us About Your Project"
                  rows="3"
                  className="
                    block
                    min-h-[80px]
                    w-full
                    resize-none
                    border-0
                    border-b
                    border-[#8c96a3]
                    bg-transparent
                    px-[12px]
                    pb-[8px]
                    pt-[5px]
                    font-['Arial',Helvetica,sans-serif]
                    text-[14px]
                    leading-[1.5]
                    text-[#333]
                    outline-none
                    placeholder:text-[#b4b4b4]
                    focus:border-[#555]
                  "
                />
              </div>

              {/* =================================================
                  SUBMIT BUTTON
              ================================================== */}

              <button
                type="submit"
                className="
                  mt-[28px]
                  flex
                  h-[51px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-[#5dcc6d]
                  px-[20px]
                  font-['Arial',Helvetica,sans-serif]
                  text-[14px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#4fbd60]
                  hover:shadow-[0_5px_15px_rgba(93,204,109,0.25)]
                  active:scale-[0.98]

                  sm:mt-[30px]
                  sm:h-[52px]

                  lg:mt-[28px]
                "
              >
                Request My Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePopup;
