// import { Routes, Route } from "react-router-dom";
// import Home from "./components/HeroSection";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Clubs from "./components/Clubs.jsx";
// import Blog from "./components/Blog";
// import Contact from "./components/Contact";
import { useState } from "react";

// const style = {
//   wrapper: ``,
// };

function App() {
  const [loading, setLoading] = useState(true);

  // hide loading page after page fully loads and an additional 1 second
  window.addEventListener("load", () => {
    setTimeout(() => {
      setLoading((prevState) => !prevState);
    }, 1000);
  });

  return (
    <div className="App w-full scroll-smooth font-NotoSerifKhojki">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <About />
          <Clubs />
        </>
      )}
      {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/clubs' element={<Clubs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes> */}
    </div>
  );
}

export default App;
