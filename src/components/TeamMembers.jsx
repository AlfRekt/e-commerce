const teamMembers = [
  { id: 1, name: "Gökhan Özdemir",    role: "Project Manager",      image: "/team/gokhan.jpg" },
  { id: 2, name: "Alfred Ali Gülkan", role: "Full Stack Developer", image: "/team/me.jpg" },
  { id: 3, name: "Ronald Richards",   role: "Mitsubishi",           image: "/team/3.jpg" },
  { id: 4, name: "Kathryn Murphy",    role: "Mitsubishi",           image: "/team/4.png" },
  { id: 5, name: "Floyd Miles",       role: "Mitsubishi",           image: "/team/5.png" },
  { id: 6, name: "Dianne Russell",    role: "Mitsubishi",           image: "/team/6.png" },
  { id: 7, name: "Eleanor Pena",      role: "Mitsubishi",           image: "/team/7.png" },
  { id: 8, name: "Jenny Wilson",      role: "Mitsubishi",           image: "/team/8.png" },
  { id: 9, name: "Devon Lane",        role: "Mitsubishi",           image: "/team/9.png" },
];

function TeamMembers() {
  return (
    <div className="px-6 py-12 md:px-[195px] md:py-24">
      <div className="mb-16 flex flex-col items-center gap-3 text-center">
        <h2 className="text-4xl font-bold text-[#252B42] md:text-5xl">Meet Our Team</h2>
        <p className="max-w-md text-sm text-[#737373]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-10 md:grid-flow-col md:grid-cols-3 md:grid-rows-3">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex w-64 items-center gap-5 hover:cursor-pointer hover:shadow">
            <img src={member.image} alt={member.name} className="h-16 w-16 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="text-base font-bold text-[#252B42]">{member.name}</span>
              <span className="text-sm text-[#737373]">{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;