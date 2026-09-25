import React from "react";

const OurPrivacy = () => {
  return (
    <main className="w-full bg-white text-[#2E2E2E]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-8 md:py-16 lg:px-10 lg:py-20">

        {/* Page Title */}
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
            Privacy Policy
          </h1>

          <p
            className="
              mt-4
              max-w-[850px]
              font-['Arial',Helvetica,sans-serif]
              text-[15px]
              leading-7
              text-[#666666]
              sm:text-[16px]
              md:text-[17px]
            "
          >
            Strokes Design Studio respects your privacy and is committed to
            handling personal information responsibly.
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div
          className="
            font-['Arial',Helvetica,sans-serif]
            text-[15px]
            leading-7
            text-[#444444]
            sm:text-[16px]
          "
        >

          {/* 1 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              1. About Strokes Design Studio
            </h2>

            <p>
              Strokes Design Studio is a multidisciplinary architecture,
              interior design, planning, and project execution consultancy
              based in Nagpur, Maharashtra.
            </p>

            <p>
              Our website allows visitors to learn about our services,
              explore our projects and portfolio, read our content, contact
              our team, and submit enquiries regarding architecture and
              interior design services.
            </p>
          </section>

          {/* 2 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              2. Information We May Collect
            </h2>

            <p>
              We collect information that you voluntarily provide to us and
              certain technical information that may be generated when you
              interact with our website.
            </p>

            <p>
              When you contact us, submit an enquiry, or request a
              consultation, we may collect information such as:
            </p>

            <PrivacyList
              items={[
                "Full name",
                "Phone number",
                "Email address",
                "Message or enquiry details",
                "Project type",
                "Property type",
                "Project location",
                "Estimated budget",
                "Design requirements",
                "Preferred consultation details",
                "Information you choose to provide about your project",
              ]}
            />

            <p>
              If communication continues after your initial enquiry, we may
              also receive additional information necessary to understand and
              manage your project requirements.
            </p>
          </section>

          {/* 3 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              3. Project-Related Information
            </h2>

            <p>
              If you engage Strokes Design Studio for architecture, interior
              design, consultation, planning, or execution services, we may
              collect additional project-related information such as:
            </p>

            <PrivacyList
              items={[
                "Property details",
                "Site location",
                "Floor plans",
                "Measurements",
                "Site photographs",
                "Design preferences",
                "Material preferences",
                "Budget information",
                "Project timelines",
                "Drawings and documents",
                "Billing information",
                "Communication records",
                "Client approvals",
                "Vendor or contractor information relevant to the project",
              ]}
            />

            <p>
              Such information will primarily be used for providing,
              planning, coordinating, and managing the requested services.
            </p>
          </section>

          {/* 4 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              4. Information Collected Automatically
            </h2>

            <p>
              When you visit our website, certain information may be collected
              automatically by our website, hosting provider, security tools,
              cookies, or analytics services, where such services are enabled.
            </p>

            <p>This information may include:</p>

            <PrivacyList
              items={[
                "IP address",
                "Browser type",
                "Device type",
                "Operating system",
                "Approximate geographic location",
                "Date and time of visit",
                "Pages viewed",
                "Referral source",
                "Time spent on pages",
                "Website interaction information",
                "Technical logs and error information",
              ]}
            />

            <p>
              We generally use this information to understand website
              performance, maintain website security, and improve the user
              experience.
            </p>
          </section>

          {/* 5 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              5. How We Use Your Information
            </h2>

            <p>
              We may use the information we collect for purposes including:
            </p>

            <PrivacyList
              items={[
                "Responding to your enquiries",
                "Arranging consultation or discovery calls",
                "Understanding your project requirements",
                "Preparing quotations or proposals",
                "Providing architecture and interior design services",
                "Communicating regarding ongoing projects",
                "Scheduling meetings and site visits",
                "Providing project updates",
                "Coordinating with relevant contractors, vendors, or consultants",
                "Improving our website and services",
                "Maintaining website functionality and security",
                "Responding to customer service requests",
                "Maintaining business and project records",
                "Complying with legal and regulatory obligations",
                "Preventing fraud, misuse, or security threats",
                "Sending service-related communications",
              ]}
            />

            <p>
              Where required by applicable law, we will seek appropriate
              consent before using your personal information for purposes that
              require such consent.
            </p>
          </section>

          {/* 6 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              6. Communication With You
            </h2>

            <p>
              When you submit an enquiry or provide your contact details, we
              may contact you through channels such as:
            </p>

            <PrivacyList
              items={[
                "Telephone",
                "Email",
                "WhatsApp",
                "SMS",
                "Other communication channels you have requested or agreed to use",
              ]}
            />

            <p>These communications may relate to:</p>

            <PrivacyList
              items={[
                "Your enquiry",
                "Consultation scheduling",
                "Project discussions",
                "Quotations",
                "Project updates",
                "Site visits",
                "Service information",
                "Follow-up communication",
              ]}
            />

            <p>
              You may request that we stop sending non-essential promotional
              communication at any time.
            </p>

            <p>
              Operational or project-related communication may still be
              required where you have an active engagement with us.
            </p>
          </section>

          {/* 7 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              7. Cookies and Similar Technologies
            </h2>

            <p>
              Our website may use cookies and similar technologies to provide
              essential website functionality and improve visitor experience.
            </p>

            <p>
              Cookies are small files stored on your device when you visit a
              website.
            </p>

            <p>Cookies may be used for purposes such as:</p>

            <PrivacyList
              items={[
                "Remembering website preferences",
                "Maintaining website functionality",
                "Website security",
                "Understanding website traffic",
                "Analysing website performance",
                "Improving navigation and user experience",
              ]}
            />

            <p>
              Depending on the technologies installed on our website, certain
              third-party services may also place cookies.
            </p>

            <p>
              You can control or disable cookies through your browser
              settings. However, disabling certain cookies may affect the
              functionality of some parts of the website.
            </p>
          </section>

          {/* 8 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              8. Website Analytics
            </h2>

            <p>
              We may use analytics services to better understand how visitors
              interact with our website.
            </p>

            <p>Analytics information may include:</p>

            <PrivacyList
              items={[
                "Pages visited",
                "Time spent on the website",
                "Device and browser information",
                "General traffic sources",
                "Website interactions",
              ]}
            />

            <p>
              Such information may be aggregated or otherwise processed to
              help us improve website content, navigation, performance, and
              user experience.
            </p>

            <p>
              Where required, analytics technologies will be used subject to
              applicable consent requirements.
            </p>
          </section>

          {/* 9 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              9. Third-Party Services
            </h2>

            <p>
              Our website or business operations may use third-party service
              providers for functions such as:
            </p>

            <PrivacyList
              items={[
                "Website hosting",
                "Website security",
                "Email communication",
                "Contact forms",
                "Website analytics",
                "Maps and location services",
                "Social media",
                "Cloud storage",
                "Project communication",
                "Technical support",
              ]}
            />

            <p>
              These providers may process certain information only to the
              extent necessary to provide their respective services, subject
              to their own privacy practices and applicable agreements.
            </p>

            <p>
              We encourage users to review the privacy policies of third-party
              platforms before providing personal information directly to them.
            </p>
          </section>

          {/* 10 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              10. Social Media Links
            </h2>

            <p>
              Our website may contain links to platforms such as Facebook,
              Instagram, LinkedIn, or other social networks.
            </p>

            <p>
              When you click on a social media link, you may be redirected to
              a third-party platform.
            </p>

            <p>
              Strokes Design Studio does not control how those platforms
              collect or process your information.
            </p>

            <p>
              Your interaction with such platforms will be governed by their
              respective privacy policies and terms.
            </p>
          </section>

          {/* 11 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              11. Google Maps and Location Services
            </h2>

            <p>
              Our website may display maps or location information using
              third-party mapping services.
            </p>

            <p>
              When you interact with such services, the third-party service
              provider may collect information such as your IP address, device
              information, or location-related data according to its own
              privacy practices.
            </p>

            <p>
              We recommend reviewing the relevant service provider's privacy
              policy if you use these features.
            </p>
          </section>

          {/* 12 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              12. How We Share Personal Information
            </h2>

            <p>
              We do not sell or rent your personal information to third parties.
            </p>

            <p>
              We may share information where reasonably necessary with:
            </p>

            <PrivacyList
              items={[
                "Employees and authorized team members",
                "Architects and designers involved in your project",
                "Contractors",
                "Consultants",
                "Vendors",
                "Material suppliers",
                "Installation teams",
                "Technical service providers",
                "Website hosting or IT providers",
                "Professional advisers",
                "Government authorities where legally required",
              ]}
            />

            <p>
              Project-related information will generally only be shared where
              reasonably necessary for providing the requested services,
              coordinating the project, or fulfilling legal obligations.
            </p>
          </section>

          {/* 13 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              13. Contractors, Vendors and Project Partners
            </h2>

            <p>
              Architecture and interior design projects may require
              coordination with third parties such as contractors, carpenters,
              manufacturers, suppliers, electricians, plumbers, consultants,
              and installation teams.
            </p>

            <p>
              Where necessary for your project, relevant information may be
              shared for purposes including:
            </p>

            <PrivacyList
              items={[
                "Obtaining quotations",
                "Procurement",
                "Manufacturing",
                "Scheduling work",
                "Site coordination",
                "Installation",
                "Delivery",
                "Project execution",
              ]}
            />

            <p>
              We aim to limit information shared with such parties to what is
              reasonably necessary for the relevant purpose.
            </p>
          </section>

          {/* 14 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              14. Legal Disclosure
            </h2>

            <p>
              We may disclose personal information where disclosure is
              reasonably necessary to:
            </p>

            <PrivacyList
              items={[
                "Comply with applicable laws",
                "Respond to lawful government requests",
                "Comply with court orders",
                "Protect our legal rights",
                "Investigate fraud or misuse",
                "Protect the safety of our clients, staff, or others",
                "Prevent or investigate cybersecurity incidents",
              ]}
            />
          </section>

          {/* 15 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              15. Data Security
            </h2>

            <p>
              We take reasonable administrative, organizational, and technical
              measures to protect personal information against:
            </p>

            <PrivacyList
              items={[
                "Unauthorized access",
                "Loss",
                "Misuse",
                "Alteration",
                "Disclosure",
                "Destruction",
                "Cybersecurity threats",
              ]}
            />

            <p>
              However, no website, internet transmission, or electronic storage
              system can be guaranteed to be completely secure.
            </p>

            <p>
              Users should therefore exercise appropriate care when sharing
              personal or sensitive information online.
            </p>
          </section>

          {/* 16 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              16. Data Retention
            </h2>

            <p>
              We retain personal information only for as long as reasonably
              necessary for the purposes for which it was collected, including:
            </p>

            <PrivacyList
              items={[
                "Responding to enquiries",
                "Managing client relationships",
                "Completing projects",
                "Maintaining business records",
                "Handling warranties or post-project matters",
                "Meeting accounting and taxation requirements",
                "Complying with legal obligations",
                "Resolving disputes",
              ]}
            />

            <p>
              The retention period may vary depending on the type of
              information and the nature of our relationship with you.
            </p>

            <p>
              When personal information is no longer reasonably required, we
              may securely delete, anonymize, or archive it as permitted by
              applicable law.
            </p>
          </section>

          {/* 17 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              17. Your Privacy Rights
            </h2>

            <p>
              Subject to applicable Indian data protection laws and the
              circumstances in which your information is processed, you may
              have rights relating to your personal information.
            </p>

            <p>
              These may include the ability to request:
            </p>

            <PrivacyList
              items={[
                "Information about personal data processed about you",
                "Correction of inaccurate information",
                "Updating incomplete or outdated information",
                "Erasure of eligible personal information",
                "Withdrawal of consent where processing is based on consent",
                "Grievance redressal regarding the handling of your personal data",
              ]}
            />

            <p>
              Certain requests may be subject to legal, regulatory,
              contractual, or record-keeping requirements.
            </p>

            <p>
              To exercise an applicable privacy right, you may contact us using
              the details provided in this Privacy Policy.
            </p>
          </section>

          {/* 18 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              18. Withdrawal of Consent
            </h2>

            <p>
              Where we process personal information based on your consent, you
              may withdraw that consent by contacting us.
            </p>

            <p>
              Withdrawal of consent will apply to future processing, subject
              to applicable laws and any processing that may lawfully continue
              for another permitted purpose.
            </p>

            <p>
              Withdrawal of consent may affect our ability to provide certain
              services where the information is necessary for those services.
            </p>
          </section>

          {/* 19 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              19. Accuracy and Correction of Information
            </h2>

            <p>
              We encourage you to provide accurate and current information.
            </p>

            <p>
              If you believe the personal information we hold about you is
              inaccurate, incomplete, or outdated, you may contact us to
              request an appropriate correction or update.
            </p>

            <p>
              We may ask for reasonable information to verify your identity
              before processing certain privacy requests.
            </p>
          </section>

          {/* 20 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              20. Children's Privacy
            </h2>

            <p>
              Our architecture and interior design services are primarily
              intended for adults and persons capable of entering into service
              arrangements.
            </p>

            <p>
              We do not knowingly seek to collect personal information from
              children through the website for marketing purposes.
            </p>

            <p>
              If we become aware that personal information relating to a child
              has been collected in circumstances where parental or lawful
              guardian authorization is required, we will take appropriate
              steps in accordance with applicable law.
            </p>
          </section>

          {/* 21 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              21. Cross-Border Processing
            </h2>

            <p>
              Some website hosting, cloud, communication, analytics, or
              technology service providers may operate infrastructure outside
              India.
            </p>

            <p>
              Where personal information is processed outside India through
              such service providers, we will seek to handle such processing
              in accordance with applicable Indian data protection
              requirements and any restrictions imposed by law.
            </p>
          </section>

          {/* 22 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              22. External Websites
            </h2>

            <p>
              Our website may contain links to websites operated by third
              parties.
            </p>

            <p>
              Once you leave the Strokes Design Studio website, this Privacy
              Policy no longer governs how another website handles your
              information.
            </p>

            <p>
              We are not responsible for the privacy practices, content, or
              security of external websites.
            </p>

            <p>
              We encourage you to review their privacy policies before
              submitting personal information.
            </p>
          </section>

          {/* 23 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              23. Portfolio and Project Photography
            </h2>

            <p>
              With appropriate authorization or in accordance with applicable
              project arrangements, Strokes Design Studio may photograph or
              document completed projects for purposes such as:
            </p>

            <PrivacyList
              items={[
                "Portfolio presentation",
                "Website content",
                "Social media",
                "Awards",
                "Publications",
                "Design presentations",
                "Marketing materials",
              ]}
            />

            <p>
              Where necessary, specific arrangements concerning project
              photography, client identification, property location, or
              confidentiality may be agreed separately with the client.
            </p>

            <p>
              We aim to avoid publishing personal or sensitive client
              information without an appropriate basis for doing so.
            </p>
          </section>

          {/* 24 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              24. Marketing Communications
            </h2>

            <p>
              Where legally permitted and appropriate, we may occasionally send
              information regarding:
            </p>

            <PrivacyList
              items={[
                "Our services",
                "New projects",
                "Design insights",
                "Offers",
                "Company updates",
                "Relevant announcements",
              ]}
            />

            <p>
              You may request to stop receiving promotional communications at
              any time by contacting us or using an available unsubscribe
              mechanism.
            </p>

            <p>
              Your decision to stop promotional communication will not prevent
              us from sending communications necessary for an active enquiry
              or project.
            </p>
          </section>

          {/* 25 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              25. Changes to This Privacy Policy
            </h2>

            <p>
              We may update this Privacy Policy from time to time to reflect:
            </p>

            <PrivacyList
              items={[
                "Changes to our website",
                "Changes to our services",
                "Changes in technology",
                "Changes in our information practices",
                "Changes in applicable laws and regulations",
                "Relevant announcements",
              ]}
            />

            <p>
              The latest version will be published on this page with an
              updated “Last Updated” date.
            </p>

            <p>
              We encourage visitors to review this Privacy Policy periodically.
            </p>
          </section>

          {/* 26 */}
          <section className="mb-10">
            <h2 className="privacy-heading">
              26. Applicable Data Protection Law
            </h2>

            <p>
              We intend to handle personal information in accordance with
              applicable laws and regulations in India, including applicable
              provisions of the Digital Personal Data Protection Act, 2023,
              the Digital Personal Data Protection Rules, 2025, and other
              applicable legal requirements, as and when relevant provisions
              are in force.
            </p>

            <p>
              Nothing in this Privacy Policy is intended to limit any rights
              available to an individual under applicable law.
            </p>
          </section>

          {/* 27 */}
          <section className="mb-0">
            <h2 className="privacy-heading">
              27. Grievances and Privacy Requests
            </h2>

            <p>
              If you have a question, concern, complaint, or request regarding
              your personal information or this Privacy Policy, please contact
              Strokes Design Studio using the contact information below.
            </p>

            <p>
              Please provide sufficient information for us to understand and
              appropriately respond to your request.
            </p>

            <p>
              We may need to verify your identity before acting on requests
              relating to personal information.
            </p>
          </section>

        </div>
      </div>

      {/* Local component styles */}
      <style>{`
        .privacy-heading {
          margin: 0 0 18px;
          font-family: "Playfair Display", Georgia, "Times New Roman", serif;
          font-size: 27px;
          font-weight: 600;
          line-height: 1.25;
          color: #1e1e1e;
        }

        .privacy-heading::after {
          content: "";
          display: block;
          width: 45px;
          height: 1px;
          margin-top: 10px;
          background: #CAA05C;
        }

        .privacy-heading + p {
          margin-top: 0;
        }

        .privacy-heading ~ p {
          margin-bottom: 16px;
        }

        @media (min-width: 768px) {
          .privacy-heading {
            font-size: 30px;
          }
        }

        @media (max-width: 640px) {
          .privacy-heading {
            font-size: 23px;
          }
        }
      `}</style>
    </main>
  );
};

/* Reusable bullet-list component */
const PrivacyList = ({ items }) => {
  return (
    <ul
      className="
        my-4
        list-disc
        space-y-2
        pl-6
        marker:text-[#CAA05C]
      "
    >
      {items.map((item, index) => (
        <li
          key={index}
          className="pl-1 leading-7"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default OurPrivacy;