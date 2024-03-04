import ExperienceSection from "./pages/ExperienceSection";
import HeroSection from "./pages/HeroSection";
import Navbar from "./pages/Navbar";
import Qualification from "./pages/Qualification";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ background: "#F8F9FB" }}>
        <HeroSection />
        <ExperienceSection />
        <Qualification />
      </div>
    </div>
  );
}

export default App;
