import "./App.css";
import Footer from "./Components/Foot/Footer";
import InfoCards from "./Components/HomePage/BlogCard";
import BusinessGrowthSection from "./Components/HomePage/BusinessGrowth";
import EffortlessComplianceAI from "./Components/HomePage/EffortlessComplianceAI";
import ZolvitHeroSection from "./Components/HomePage/HomePage";
import ProfessionalSupportSection from "./Components/HomePage/ProfessionalSupport";
import StartupToScaleJourney from "./Components/HomePage/StartupToScaleJourney";
import StickyReferButton from "./Components/HomePage/StickeyBar";
import SuccessPrioritySection from "./Components/HomePage/SuccessPriority";
import ValidatedVisionSection from "./Components/HomePage/Vision";
import Zolvit360CommandCenter from "./Components/HomePage/ZolvitCommandCenter";

function App() {
  return (
    <div className="App">
      <ZolvitHeroSection />
      <StartupToScaleJourney />
      <EffortlessComplianceAI />
      <Zolvit360CommandCenter />
      {/* <BusinessGrowthSection /> */}
      <ProfessionalSupportSection />
      {/* <SuccessPrioritySection /> */}
      <ValidatedVisionSection />
      <InfoCards />
      <Footer />
      <StickyReferButton />
    </div>
  );
}

export default App;
