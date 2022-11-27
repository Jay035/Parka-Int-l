import { Routes, Route } from 'react-router-dom';
import Home from './components/HeroSection';
import Navbar from './components/Navbar';
import About from './components/About';
import Blog from './components/Blog';
import Clubs from './components/Clubs';
import Contact from './components/Contact';
import HeroSection from './components/HeroSection';

const style = {
  wrapper: ``
}


function App() {

  return (
    <div className="App w-full">
      {/* <GlobalStyles /> */}
      {/* <Container> */}
        <Navbar />
        <HeroSection />
        <About />
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/clubs' element={<Clubs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes> */}
      {/* </Container> */}


    </div>
  );
}

export default App;
