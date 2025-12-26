import Navbar from "./components/layout/Navbar.jsx";
import AboutSumary from "./sections/AboutSummary.jsx";
import Hero from "./sections/Hero.jsx";
import ResidencesSummary from "./sections/ResidencesSummary.jsx";
import TeamSummary from "./sections/TeamSummary.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSumary />
      <TeamSummary />
      <ResidencesSummary />

      
    </div>
  );
}
