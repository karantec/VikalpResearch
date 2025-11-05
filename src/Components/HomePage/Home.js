import ZolvitHeroSection from "./HomePage";
import StartupToScaleUp from "./StartupToScaleJourney";
import EffortlessComplianceAI from "./EffortlessComplianceAI";
import Zolvit360CommandCenter from "./ZolvitCommandCenter";
import ProfessionalSupportSection from "./ProfessionalSupport";
import SuccessPrioritySection from "./SuccessPriority";
import ValidatedVisionSection from "./Vision";
import InfoCards from "./StickeyBar";
import RelatedBlogSection from "./BlogCard";

const Home = () => {
  return (
    <div className="mt-14">
      <ZolvitHeroSection />
      <StartupToScaleUp />
      <EffortlessComplianceAI />
      <Zolvit360CommandCenter />
      {/* <BusinessGrowthSection /> */}
      <ProfessionalSupportSection />
      <SuccessPrioritySection />
      <ValidatedVisionSection />
      <InfoCards />
      <RelatedBlogSection />
    </div>
  );
};

export default Home;
