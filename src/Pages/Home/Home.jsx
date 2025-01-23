import Faq from "components/Home/Faq/Faq";
import FeatureThatEmpower from "components/Home/FeatureThatEmpower/FeatureThatEmpower";
import HeroSection from "components/Home/HeroSection/HeroSection";
import ReadyForTakeOff from "components/Home/ReadyForTakeOff/ReadyForTakeOff";
import SuperCharge from "components/Home/SuperCharger/SuperCharge";
import Navbar from "components/Navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureThatEmpower />
      <SuperCharge />
      <Faq />
      <ReadyForTakeOff />
    </>
  );
};
export default Home;
