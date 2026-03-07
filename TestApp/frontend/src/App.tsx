import "./App.css";
import teamData from "./CollegeBasketballTeams.json";

const teams = teamData.teams;

function App() {
  return (
    <>
      <h1>College Basketball Teams</h1>
      <TeamList teams={teams} />
    </>
  );
}

function TeamCard({
  school,
  mascot: name,
  city,
  state,
}: {
  school: string;
  mascot: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <h2>{school}</h2>
      <p>Team Mascot: {name}</p>
      <p>
        Location: {city}, {state}
      </p>
    </>
  );
}

function TeamList({ teams }: { teams: typeof teamData.teams }) {
  return (
    <>
      {teams.map((team) => (
        <TeamCard
          key={team.tid}
          school={team.school}
          mascot={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </>
  );
}

export default App;
