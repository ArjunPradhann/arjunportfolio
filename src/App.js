import ExperienceSection from "./pages/ExperienceSection";
import HeroSection from "./pages/HeroSection";
import Navbar from "./pages/Navbar";
import Qualification from "./pages/Qualification";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Resume from "./pages/Resume";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <div style={{ background: "#F8F9FB" }}>
          <HeroSection />
          <ExperienceSection />
          <Qualification />
          <Resume />
        </div>
      </div>
    </Provider>
  );
}

export default App;
