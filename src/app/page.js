import Headersection from './components/Home/Header';
import InsauranceGridSection from './components/Home/InsuranceGrid';
import WhyChoose from './components/Home/whyChooseUs';
import ServicenandPartner from './components/Home/ServicesAndPartners';
import InsuranceServices from './components/Home/InsuranceServices';
import HowItWorks from './components/Home/HowItworks';
import PricingGrid from './components/Home/PricingGrid';
import ClaimBanner from './components/Home/ClaimBanner';
import FaqSection from './components/Home/Faq';
import Contact from './components/Home/Contact'
export default function Home() {
  return (
    <div>
      <Headersection />
      <InsauranceGridSection />
      <WhyChoose />
      <ServicenandPartner />
      <InsuranceServices />
      <HowItWorks />
      <PricingGrid />
      <ClaimBanner />
      <FaqSection />
      <Contact />
    </div>
  );
}
