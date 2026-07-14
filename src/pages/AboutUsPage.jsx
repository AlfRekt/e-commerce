import AboutHero from "../components/AboutHero";
import AboutIntro from "../components/AboutIntro";
import Stats from "../components/Stats";
import TeamMembers from "../components/TeamMembers";
import VideoSection from "../components/VideoSection";
import Clients from "../components/Clients";
import WorkWithUs from "../components/WorkWithUs";

function AboutUsPage() {
  return (
    <div className="w-full">
      <AboutHero />
      <AboutIntro />
      <Stats />
      <VideoSection />
      <TeamMembers />
      <Clients 
        title="Big Companies Are Here"
        description="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics" 
      />
      <WorkWithUs />
    </div>
  );
}

export default AboutUsPage;