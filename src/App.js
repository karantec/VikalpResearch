import { Routes, Route } from "react-router-dom";
import PersonalWebsiteDevelopment from "./Components/SectionDesign/ITDesign";

import Navbar from "./Components/HomePage/Navbar";
import Footer from "./Components/Foot/Footer";
import Home from "./Components/HomePage/Home";
import BusinessWebsiteDevelopment from "./Components/SectionDesign/Business";
import EcommerceWebsiteDevelopment from "./Components/SectionDesign/Ecommerce";
import MobileAppDevelopment from "./Components/SectionDesign/MobileApp";
import LandingPageFunnelDesign from "./Components/SectionDesign/LandingPage";
import WebsiteMaintenanceSecurity from "./Components/SectionDesign/WebsiteSecurity";
import PublicityPRServices from "./Components/SectionDesign/Publicity";
import MediaPRCoverage from "./Components/SectionDesign/MediaCoverage";
import PodcastProductionMarketing from "./Components/SectionDesign/PodCast";
import FilmEventPublicity from "./Components/SectionDesign/FilmActivity";
import WikipediaORM from "./Components/SectionDesign/Wikipedia";
import SocialMediaManagement from "./Components/SectionDesign/SocialMedia";
import BrandFilms from "./Components/SectionDesign/DigitalMarketing/BrandFilms";
import VoiceOver from "./Components/SectionDesign/DigitalMarketing/Voice";
import Scripting from "./Components/SectionDesign/DigitalMarketing/Scripting";
import VideoEditing from "./Components/SectionDesign/DigitalMarketing/VideoEditing";
import Graphic from "./Components/SectionDesign/DigitalMarketing/GraphicDesign";
import Photography from "./Components/SectionDesign/DigitalMarketing/Photo";
import ContentCreating from "./Components/SectionDesign/DigitalMarketing/ContentCreating";
import GoogleMyBusiness from "./Components/SectionDesign/ContentCreation/GoogleMyBusiness";
import InfluencerMarketing from "./Components/SectionDesign/ContentCreation/InfluenceMarket";
import WhatsappApi from "./Components/SectionDesign/ContentCreation/WhatsappApi";
import Seo from "./Components/SectionDesign/ContentCreation/Seo";
import MarketAuto from "./Components/SectionDesign/ContentCreation/MarketAutomation";
import PerformanceMarketing from "./Components/SectionDesign/ContentCreation/PerformanceMarketing";
import AIToolAndIntegration from "./Components/SectionDesign/Others/AIToolAndIntegration";
import FreeLearning from "./Components/SectionDesign/Others/Freelearnings";
import Marketing from "./Components/SectionDesign/Others/Marketing";
import SalesConsultancy from "./Components/SectionDesign/Others/Saleconsultancy";
import TrainingAndWorkshop from "./Components/SectionDesign/Others/TrainingandWorkshop";
import CubeAboutPage from "./Components/SectionDesign/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        //Web it
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<CubeAboutPage />} />
        <Route path="/it-design" element={<PersonalWebsiteDevelopment />} />
        <Route path="/business" element={<BusinessWebsiteDevelopment />} />
        <Route path="/ecommerce" element={<EcommerceWebsiteDevelopment />} />
        <Route path="/mobile-app" element={<MobileAppDevelopment />} />
        <Route path="/landingPage" element={<LandingPageFunnelDesign />} />
        <Route
          path="/website-security"
          element={<WebsiteMaintenanceSecurity />}
        />
        // New Routes Added Below
        <Route path="/publicity" element={<PublicityPRServices />} />
        <Route path="/media-coverage" element={<MediaPRCoverage />} />
        <Route path="/podcast" element={<PodcastProductionMarketing />} />
        <Route path="/film-activity" element={<FilmEventPublicity />} />
        <Route path="/wikipedia" element={<WikipediaORM />} />
        <Route path="/social-media" element={<SocialMediaManagement />} />
        <Route path="/content-creation" element={<ContentCreating />} />
        <Route path="/Photography" element={<Photography />} />
        <Route path="/Graphic" element={<Graphic />} />
        <Route path="/VideoEditing" element={<VideoEditing />} />
        <Route path="/Scripting" element={<Scripting />} />
        <Route path="/voice" element={<VoiceOver />} />
        <Route path="/Films" element={<BrandFilms />} />
        // New Routes Added Below
        <Route path="/Social" element={<SocialMediaManagement />} />
        <Route path="/GoogleMyBusiness" element={<GoogleMyBusiness />} />
        <Route path="/Influence" element={<InfluencerMarketing />} />
        <Route path="/WhatsappApi" element={<WhatsappApi />} />
        <Route path="/Seo" element={<Seo />} />
        <Route path="/marketing" element={<MarketAuto />} />
        <Route path="/Performance" element={<PerformanceMarketing />} />
        <Route path="/marketing" element={<MarketAuto />} />
        // others
        <Route path="/AITool" element={<AIToolAndIntegration />} />
        <Route path="/FreeLearning" element={<FreeLearning />} />
        <Route path="/Marketing" element={<Marketing />} />
        <Route path="/SalesConsult" element={<SalesConsultancy />} />
        <Route path="/Training" element={<TrainingAndWorkshop />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
