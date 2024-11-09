

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center text-white gap-7 min-h-screen px-4 bg-hero-bg bg-cover">
      <h1 className="text-4xl livvic-semibold">Explore the world </h1>
      <p>
        We are a reliable travel company, ready to take on the organizational
        chores so you can enjoy your trips and adventures{" "}
      </p>

      <div className="mt-8 bg-gray-300 py-6 rounded-[50px]">
       
        <div className="mt-4 flex justify-center gap-4 px-4 flex-wrap">
          <input className="w-full outline-none bg-gray-100 p-2" type="text" placeholder="City" />
         
        </div>
      </div>
    </section>
  );
}
