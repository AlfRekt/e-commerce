import TeamHero from "../components/TeamHero";
import TeamMembers from "../components/TeamMembers";
import FreeTrial from "../components/FreeTrial";

function TeamPage() {
  return (
    <div className="w-full">
      <TeamHero />
      <TeamMembers />
      <FreeTrial />
    </div>
  );
}

export default TeamPage;