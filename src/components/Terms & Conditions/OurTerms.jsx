import React from "react";

const OurTerms = () => {
  return (
    <main className="w-full bg-white text-[#2E2E2E]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="mb-12 border-b border-[#CAA05C]/30 pb-8 md:mb-16">
          <h1
            className="
              m-0
              font-['Playfair_Display',Georgia,'Times_New_Roman',serif]
              text-[36px]
              font-semibold
              leading-tight
              text-[#1E1E1E]
              sm:text-[42px]
              md:text-[50px]
              lg:text-[56px]
            "
          >
            Terms & Conditions
          </h1>
        </div>

        <div
          className="
            font-['Arial',Helvetica,sans-serif]
            text-[15px]
            leading-7
            text-[#444444]
            sm:text-[16px]
          "
        >
          <section id="section-1" className="mb-10 scroll-mt-28">
            <SectionTitle number="1">About Strokes Design Studio</SectionTitle>

            <p>
              Strokes Design Studio (“SDS”, “we”, “our”, or “us”) is an
              architecture, interior design, planning, and design consultancy
              firm based in Nagpur, Maharashtra.
            </p>

            <p className="mt-5">
              We provide services that may include, but are not limited to:
            </p>

            <BulletList
              items={[
                "Architecture and space planning",
                "Residential interior design",
                "Commercial interior design",
                "Retail and hospitality design",
                "Modular kitchen design",
                "Furniture and spatial planning",
                "Design consultation",
                "Project planning",
                "Material and finish selection",
                "Project execution and installation",
                "Other architecture and interior-related services",
              ]}
            />

            <p className="mt-5">
              The exact scope of services for an individual client will be
              defined separately through a quotation, proposal, work order,
              agreement, or other written communication.
            </p>
          </section>

          <section id="section-2" className="mb-10 scroll-mt-28">
            <SectionTitle number="2">Use of Website</SectionTitle>

            <p>
              You may use this website for lawful purposes, including:
            </p>

            <BulletList
              items={[
                "Learning about Strokes Design Studio",
                "Viewing our services and portfolio",
                "Reviewing information about our design process",
                "Submitting an enquiry",
                "Requesting a consultation",
                "Contacting our team regarding a potential project",
              ]}
            />

            <p className="mt-5">
              You agree not to use this website:
            </p>

            <BulletList
              items={[
                "For any unlawful or fraudulent activity",
                "To attempt unauthorized access to the website or its systems",
                "To introduce viruses, malware, malicious code, or other harmful material",
                "To copy or misuse website content without authorization",
                "To interfere with the website's normal operation",
                "To impersonate another person or provide intentionally false information",
              ]}
            />

            <p className="mt-5">
              We reserve the right to restrict or terminate access to the website
              if we believe it is being misused.
            </p>
          </section>

          <section id="section-3" className="mb-10 scroll-mt-28">
            <SectionTitle number="3">
              Information Provided on the Website
            </SectionTitle>

            <BulletList
              items={[
                "We aim to ensure that the information published on our website is accurate and up to date. However, information regarding services, materials, designs, pricing, timelines, specifications, availability, offers, or other details may change without prior notice.",
                "Information displayed on this website is provided for general informational purposes and should not automatically be considered a final professional recommendation, quotation, project commitment, or contractual obligation.",
                "Final project details will be confirmed through direct discussions and written documentation between Strokes Design Studio and the client.",
              ]}
            />
          </section>

          <section id="section-4" className="mb-10 scroll-mt-28">
            <SectionTitle number="4">
              Consultation Requests and Enquiries
            </SectionTitle>

            <BulletList
              items={[
                "Users may submit enquiries or consultation requests through forms, telephone, email, WhatsApp, or other communication channels provided on the website.",
                "Submitting an enquiry does not automatically create a client-consultant relationship or guarantee acceptance of a project.",
                "We reserve the right to accept or decline any enquiry or project based on factors including:",
              ]}
            />

            <BulletList
              nested
              items={[
                "Project requirements",
                "Location",
                "Budget",
                "Scope of work",
                "Availability",
                "Project timeline",
                "Technical feasibility",
                "Resource availability",
              ]}
            />

            <p className="mt-5">
              A project engagement will begin only after the applicable scope,
              commercial terms, responsibilities, and other conditions have been
              mutually agreed upon.
            </p>
          </section>

          <section id="section-5" className="mb-10 scroll-mt-28">
            <SectionTitle number="5">
              Project Quotations and Pricing
            </SectionTitle>

            <BulletList
              items={[
                "Any prices, starting prices, project packages, consultation fees, estimates, promotional prices, or approximate budgets displayed on the website are intended for general guidance unless specifically stated otherwise.",
                "Actual project pricing may vary depending on factors including:",
              ]}
            />

            <BulletList
              nested
              items={[
                "Size and condition of the property",
                "Scope of work",
                "Design requirements",
                "Selected materials",
                "Furniture and fixtures",
                "Civil or structural work",
                "Electrical and plumbing requirements",
                "Labour costs",
                "Transportation",
                "Site location",
                "Taxes and statutory charges",
                "Vendor pricing",
                "Client-requested modifications",
                "Project timelines",
              ]}
            />

            <BulletList
              items={[
                "A detailed quotation or proposal will be provided after understanding the client's requirements.",
                "The final agreed quotation, proposal, or contract will take precedence over any general pricing displayed on this website.",
              ]}
            />
          </section>

          <section id="section-6" className="mb-10 scroll-mt-28">
            <SectionTitle number="6">
              Project Scope and Agreements
            </SectionTitle>

            <BulletList
              items={[
                "Architecture and interior design projects involve requirements specific to each property and client.",
                "Before commencement of a project, Strokes Design Studio may issue documents including a:",
              ]}
            />

            <BulletList
              nested
              items={[
                "Design proposal",
                "Cost estimate",
                "Quotation",
                "Scope of work",
                "Project schedule",
                "Payment schedule",
                "Work order",
                "Design agreement",
                "Execution agreement",
              ]}
            />

            <p className="mt-5">
              Where the terms of such a signed or accepted project-specific
              agreement differ from these website Terms and Conditions, the
              project-specific agreement will apply to that particular project.
            </p>
          </section>

          <section id="section-7" className="mb-10 scroll-mt-28">
            <SectionTitle number="7">Project Timelines</SectionTitle>

            <BulletList
              items={[
                "Any project duration or completion timeline communicated through the website or during preliminary discussions is an estimate unless specifically confirmed in writing.",
                "Project timelines may be affected by circumstances including:",
              ]}
            />

            <BulletList
              nested
              items={[
                "Client approvals",
                "Design revisions",
                "Material availability",
                "Vendor delays",
                "Site conditions",
                "Labour availability",
                "Government permissions",
                "Building or society restrictions",
                "Transportation delays",
                "Changes in project scope",
                "Events outside our reasonable control",
              ]}
            />

            <p className="mt-5">
              Strokes Design Studio will make reasonable efforts to complete
              projects according to agreed timelines but cannot guarantee
              timelines affected by circumstances beyond our reasonable control.
            </p>
          </section>

          <section id="section-8" className="mb-10 scroll-mt-28">
            <SectionTitle number="8">
              Design Changes and Revisions
            </SectionTitle>

            <BulletList
              items={[
                "The number and extent of design revisions included in a project may depend on the applicable proposal or project agreement.",
                "Significant changes requested after approval of a concept, drawing, material, specification, or work stage may:",
              ]}
            />

            <BulletList
              nested
              items={[
                "Increase project costs",
                "Affect completion timelines",
                "Require additional design or professional fees",
                "Require revised quotations or approvals",
              ]}
            />

            <p className="mt-5">
              Any additional charges will be communicated wherever reasonably
              applicable before carrying out additional work.
            </p>
          </section>

          <section id="section-9" className="mb-10 scroll-mt-28">
            <SectionTitle number="9">Client Responsibilities</SectionTitle>

            <p>
              Clients are expected to provide accurate and complete information
              relevant to their project.
            </p>

            <p className="mt-5">This may include:</p>

            <BulletList
              items={[
                "Property measurements",
                "Ownership information",
                "Existing drawings",
                "Site conditions",
                "Building or society regulations",
                "Required permissions",
                "Budget expectations",
                "Functional requirements",
                "Timely design approvals",
              ]}
            />

            <p className="mt-5">
              Strokes Design Studio will not be responsible for issues caused by
              inaccurate, incomplete, or misleading information provided by a
              client or third party.
            </p>
          </section>

          <section id="section-10" className="mb-10 scroll-mt-28">
            <SectionTitle number="10">
              Materials, Finishes and Product Variations
            </SectionTitle>

            <BulletList
              items={[
                "Images, samples, renders, photographs, catalogues, or digital representations of materials and finishes are intended to help clients understand the proposed design.",
                "Actual materials, colours, textures, patterns, finishes, dimensions, and appearance may vary slightly due to:",
              ]}
            />

            <BulletList
              nested
              items={[
                "Manufacturing variations",
                "Natural characteristics of materials",
                "Lighting conditions",
                "Require revised quotations or approvals",
                "Screen or display settings",
                "Batch variations",
                "Availability of products",
                "Supplier modifications",
              ]}
            />

            <p className="mt-5">
              Where an originally selected product or material becomes
              unavailable, suitable alternatives may be proposed for client
              approval.
            </p>
          </section>

          <section id="section-11" className="mb-10 scroll-mt-28">
            <SectionTitle number="11">
              Third-Party Vendors and Contractors
            </SectionTitle>

            <BulletList
              items={[
                "Certain parts of a project may involve independent manufacturers, contractors, suppliers, consultants, installers, or other third-party service providers.",
                "Their products and services may be subject to their own terms, warranties, availability, and policies.",
                "Where appropriate, Strokes Design Studio will coordinate with such parties as part of the agreed project scope. However, warranties or guarantees provided directly by manufacturers or independent vendors will remain subject to the respective provider's terms.",
              ]}
            />
          </section>

          <section id="section-12" className="mb-10 scroll-mt-28">
            <SectionTitle number="12">
              Portfolio Images and Design Representation
            </SectionTitle>

            <BulletList
              items={[
                "Images displayed in our portfolio may include completed projects, design concepts, visualizations, styling photographs, reference images, or other visual materials intended to communicate our design approach.",
                "Photographs and visuals may appear different depending on lighting, photography, styling, screen settings, or subsequent modifications made to a property.",
                "Portfolio content should therefore not be interpreted as a guarantee that another project will produce an identical result.",
                "Each project is designed according to its individual site conditions, requirements, budget, and client preferences.",
              ]}
            />
          </section>

          <section id="section-13" className="mb-10 scroll-mt-28">
            <SectionTitle number="13">
              Intellectual Property Rights
            </SectionTitle>

            <p>
              Unless otherwise stated, the website and its content, including:
            </p>

            <BulletList
              items={[
                "Website design",
                "Text",
                "Graphics",
                "Logos",
                "Branding",
                "Project photographs",
                "Drawings",
                "Design concepts",
                "Illustrations",
                "Presentations",
                "Videos",
                "Renderings",
                "Layouts",
              ]}
            />

            <p className="mt-5">
              Website content are owned by, licensed to, or otherwise lawfully
              used by Strokes Design Studio and are protected by applicable
              intellectual property laws.
            </p>

            <p className="mt-5">
              You may view website content for personal and informational
              purposes.
            </p>

            <p className="mt-5">
              You may not reproduce, copy, modify, publish, commercially
              exploit, redistribute, sell, or use our content without prior
              written permission.
            </p>
          </section>

          <section id="section-14" className="mb-10 scroll-mt-28">
            <SectionTitle number="14">
              Architectural and Interior Design Intellectual Property
            </SectionTitle>

            <BulletList
              items={[
                "Design concepts, layouts, drawings, plans, presentations, 3D visualizations, specifications, and other creative material prepared by Strokes Design Studio remain subject to the intellectual property provisions contained in the applicable project agreement.",
                "Providing a client with drawings or design material does not automatically transfer all intellectual property rights unless such transfer is expressly agreed upon in writing.",
              ]}
            />
          </section>

          <section id="section-15" className="mb-10 scroll-mt-28">
            <SectionTitle number="15">User-Submitted Information</SectionTitle>

            <p>When you submit information through our website, you confirm that:</p>

            <BulletList
              items={[
                "The information is accurate to the best of your knowledge.",
                "You are authorized to provide the information.",
                "The information does not violate another person's rights.",
              ]}
            />

            <p className="mt-5">
              Information submitted through our website may be used to respond to
              your enquiry, understand your project requirements, provide
              quotations, arrange consultations, and communicate about our
              services.
            </p>

            <p className="mt-5">
              For information concerning personal data, please refer to our
              Privacy Policy.
            </p>
          </section>

          <section id="section-16" className="mb-10 scroll-mt-28">
            <SectionTitle number="16">Third-Party Links</SectionTitle>

            <BulletList
              items={[
                "Our website may contain links to external websites or platforms such as social media services, maps, suppliers, vendors, or other third-party websites.",
                "These websites operate independently from Strokes Design Studio.",
                "We do not control and are not responsible for the content, security, availability, privacy practices, products, or services offered by third-party websites.",
                "Accessing third-party websites is at your own discretion.",
              ]}
            />
          </section>

          <section id="section-17" className="mb-10 scroll-mt-28">
            <SectionTitle number="17">Website Availability</SectionTitle>

            <BulletList
              items={[
                "We make reasonable efforts to keep our website available and functioning properly.",
                "However, we do not guarantee that access will always be continuous, uninterrupted, secure, or error-free.",
                "The website may occasionally be unavailable due to:",
              ]}
            />

            <BulletList
              nested
              items={[
                "Maintenance",
                "Server issues",
                "Software updates",
                "Hosting problems",
                "Cybersecurity incidents",
                "Technical errors",
                "Circumstances outside our control",
              ]}
            />

            <p className="mt-5">
              We may modify, suspend, or discontinue any website feature without
              prior notice.
            </p>
          </section>

          <section id="section-18" className="mb-10 scroll-mt-28">
            <SectionTitle number="18">Disclaimer</SectionTitle>

            <BulletList
              items={[
                "Information on this website is provided for general information about Strokes Design Studio and our services.",
                "While reasonable care is taken when preparing the website's content, we do not warrant that all information will always be complete, accurate, current, or suitable for every individual project.",
                "Architecture and interior projects require professional assessment based on actual site conditions, applicable regulations, technical considerations, budget, and client requirements.",
                "Users should not make significant financial, construction, structural, or technical decisions solely on the basis of general information provided on this website.",
              ]}
            />
          </section>

          <section id="section-19" className="mb-10 scroll-mt-28">
            <SectionTitle number="19">Limitation of Liability</SectionTitle>

            <BulletList
              items={[
                "To the maximum extent permitted under applicable law, Strokes Design Studio will not be responsible for indirect, incidental, consequential, or special losses resulting solely from the use of, or inability to use, this website.",
                "Nothing in these Terms is intended to exclude or limit any liability that cannot legally be excluded under applicable law.",
                "Liability relating to an individual design or execution project will be governed by the applicable project agreement entered into with the client.",
              ]}
            />
          </section>

          <section id="section-20" className="mb-10 scroll-mt-28">
            <SectionTitle number="20">Force Majeure</SectionTitle>

            <BulletList
              items={[
                "Strokes Design Studio will not be responsible for delays or inability to perform obligations caused by circumstances beyond our reasonable control.",
                "Such circumstances may include natural disasters, extreme weather, fire, floods, epidemics, pandemics, strikes, supply-chain disruptions, government restrictions, civil disturbances, transportation interruptions, power failures, or other force majeure events.",
                "Project timelines may be reasonably extended where such circumstances affect the project.",
              ]}
            />
          </section>

          <section id="section-21" className="mb-10 scroll-mt-28">
            <SectionTitle number="21">Changes to These Terms</SectionTitle>

            <p>
              We may revise these Terms and Conditions from time to time to
              reflect changes in our:
            </p>

            <BulletList
              items={[
                "Website",
                "Services",
                "Business practices",
                "Legal obligations",
                "Operational requirements",
              ]}
            />

            <p className="mt-5">
              Updated Terms will be published on this page with a revised Last
              Updated date.
            </p>

            <p className="mt-5">
              Your continued use of the website following publication of revised
              Terms constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section id="section-22" className="mb-10 scroll-mt-28">
            <SectionTitle number="22">
              Governing Law and Jurisdiction
            </SectionTitle>

            <BulletList
              items={[
                "These Terms and Conditions will be governed by and interpreted according to the applicable laws of India.",
                "Subject to applicable law and any project-specific agreement between Strokes Design Studio and a client, disputes relating to the use of this website will be subject to the jurisdiction of the competent courts in Nagpur, Maharashtra, India.",
              ]}
            />
          </section>

          <section id="section-23" className="mb-0 scroll-mt-28">
            <SectionTitle number="23">Severability</SectionTitle>

            <p>
              If any provision of these Terms and Conditions is found to be
              invalid, unlawful, or unenforceable, the remaining provisions will
              continue to remain valid and enforceable to the maximum extent
              permitted by law.
            </p>
          </section>
        </div>
      </div>

      <style>{`
        .terms-heading {
          margin: 0 0 18px;
          font-family: "Playfair Display", Georgia, "Times New Roman", serif;
          font-size: 27px;
          font-weight: 600;
          line-height: 1.25;
          color: #1e1e1e;
        }

        .terms-heading::after {
          content: "";
          display: block;
          width: 45px;
          height: 1px;
          margin-top: 10px;
          background: #CAA05C;
        }

        .terms-heading + p {
          margin-top: 0;
        }

        .terms-heading ~ p {
          margin-bottom: 16px;
        }

        @media (min-width: 768px) {
          .terms-heading {
            font-size: 30px;
          }
        }

        @media (max-width: 640px) {
          .terms-heading {
            font-size: 23px;
          }
        }
      `}</style>
    </main>
  );
};

const SectionTitle = ({ number, children }) => {
  return (
    <h2
      className="terms-heading"
    >
      <span className="mr-2 text-[#CAA05C]">{number}.</span>
      {children}
    </h2>
  );
};

const BulletList = ({ items, nested = false }) => {
  return (
    <ul
      className={`
        ${nested ? "ml-5" : "my-4"}
        list-disc
        space-y-2
        pl-6
        marker:text-[#CAA05C]
      `}
    >
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="pl-1 leading-7">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default OurTerms;