import { Destinations } from "./components/Destinations";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="relative livvic-regular">
      <Navbar />
      <HeroSection />
      <Destinations />
    </div>
  );
}

export default App;
