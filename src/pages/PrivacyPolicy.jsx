import ContactInformation from "../components/Contact/ContactInformation";
import OurPrivacy from "../components/Privacy Policy/OurPrivacy";
import PrivacyHero from "../components/Privacy Policy/PrivacyHero";

const PrivacyPolicy = () => {
  return (
    <div>
      <PrivacyHero />
      <OurPrivacy />
      <ContactInformation />
    </div>
  );
};

export default PrivacyPolicy;
