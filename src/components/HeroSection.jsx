import { Suspense, useEffect } from "react";
import { useState } from "react";
import About from "./About";

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
    // <div>
      
      //   {
      //   loading ? <h1>Loading....</h1> 
      //   : (
      //     <div className="">
      //       <h2>{news.title}</h2>
      //       <p>{news.description}</p>
      //       <a href={news.url}>{news.url}</a>
      //     </div>
      //   )}

      //   <div className="CTAs" style={{display: "flex", justifyContent: "space-between", marginTop: "1em"}}>
      //     <button onClick={handlePrev} style={{backgroundColor: "blueviolet", padding:".8rem"}}>Prev</button>
      //     <button onClick={handleNext} style={{backgroundColor: "blueviolet", padding:".8rem"}}>Next</button>
      //   </div>
      // </section> */}
      <div className="relative top-16 bg-black bg-hero-bg-6 bg-cover bg-no-repeat bg-center w-full h-screen ">
        {/* Hero section */}
        <div className="absolute w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center gap-6 items-center text-center z-10 h-screen text-base md:text-lg backdrop-brightness-50 backdrop-blur-[3px]">
          <section>
            <p className="text-white font-semibold">
              DON'T LOOK FURTHER
            </p>
            <h1 className="font-bold text-white max-w-2xl px-4 text-3xl md:text-4xl">
              Welcome to the Future of Social Connection
            </h1>
          </section>
          <a href="#about-us" className="px-4 py-2 bg-yellow-500/90 border-0 font-semibold transition-colors rounded-lg text-white hover:bg-yellow-500/60">
            GET STARTED
          </a>
        </div>
      </div>
    // </div>
  );
}
