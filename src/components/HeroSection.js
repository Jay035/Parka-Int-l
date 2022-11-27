import { Suspense, useEffect } from "react";
import { useState } from "react";
import About from "./About";
import heroImg1 from "../assets/hero-img-1.jpg";
import heroImg2 from "../assets/hero-img-2.jpg";
import heroImg3 from "../assets/hero-img-3.jpg";
import heroImg4 from "../assets/hero-img-4.jpg";
import heroImg5 from "../assets/hero-img-5.jpg";
import heroImg6 from "../assets/hero-img-6.jpg";

export default function HeroSection() {
  // const [currentPosition, setCurrentPosition] = useState(0);
  // const [news, setNews] = useState();
  // const [loading, setLoading] = useState(true);
  // const [listItems, setListItems] = useState([]);

  // useEffect(() => {
  //   // list new items
  //   const newsItems = [
  //     {
  //       title: "BBC",
  //       description: "Lorem ipsum .....",
  //       url: "https:www.bbc.com/news"
  //     },
  //     {
  //       title: "CNN",
  //       description: "Lorem ipsum .....",
  //       url: "https:www.bbc.com/news"
  //     },
  //     {
  //       title: "HIP TV",
  //       description: "Lorem ipsum .....",
  //       url: "https:www.bbc.com/news"
  //     },
  //     {
  //       title: "FOX NEWS",
  //       description: "Lorem ipsum .....",
  //       url: "https:www.bbc.com/news"
  //     },
  //     {
  //       title: "ALJAZEERA",
  //       description: "Lorem ipsum .....",
  //       url: "https:www.bbc.com/news"
  //     }
  //   ]

  //   const item = newsItems[currentPosition];
  //   setListItems(newsItems);
  //   setNews(item);
  //   setLoading(false);
  // }, [currentPosition])

  // const handlePrev = (e) => {
  //   e.preventDefault();
  //   if(currentPosition > 0){
  //     setCurrentPosition(prev => prev - 1);
  //     console.log(currentPosition)
  //   }else{
  //     setCurrentPosition(0);
  //   }
  // }

  // const handleNext = (e) => {
  //   e.preventDefault();
  //   const length = listItems.length;
  //   const count = length - 1;
  //   if(currentPosition < count){
  //     setCurrentPosition(currentPosition + 1)
  //     console.log(currentPosition)
  //   }else{
  //     setCurrentPosition(0);
  //   }
  // }

  return (
    <div>
      {/* Parka International Ltd is a premium lifestyle management company with a
      focus on creating memorable and amazing experiences for members of it's
      clubs. Our clubs are impact driven communities with a focus on improving
      the lives of its members socially, academically, financially and
      otherwise. We are creating the next chapter of social connection. */}
      {/* <section>
        {
        loading ? <h1>Loading....</h1> 
        : (
          <div className="">
            <h2>{news.title}</h2>
            <p>{news.description}</p>
            <a href={news.url}>{news.url}</a>
          </div>
        )}

        <div className="CTAs" style={{display: "flex", justifyContent: "space-between", marginTop: "1em"}}>
          <button onClick={handlePrev} style={{backgroundColor: "blueviolet", padding:".8rem"}}>Prev</button>
          <button onClick={handleNext} style={{backgroundColor: "blueviolet", padding:".8rem"}}>Next</button>
        </div>
      </section> */}
      {/* <Suspense fallback={<div>Loading</div>}>
        <About />
      </Suspense> */}
      {/* Hero section */}
      <div className="relative bg-black bg-hero-bg-6 bg-cover bg-no-repeat bg-top w-full h-screen">
        {/* Hero image */}
        {/* <div className="">
          <img src={heroImg1} alt="hero img" />
        </div> */}
        {/* Hero content */}
        <div
          className="absolute w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-3xl flex justify-center items-center text-white text-center z-10 h-screen backdrop-blur-sm
        "
        >
          <h1 className="font-bold md:text-5xl max-w-3xl">
            Welcome to the Future of Social Connection
          </h1>
        </div>
      </div>
    </div>
  );
}
