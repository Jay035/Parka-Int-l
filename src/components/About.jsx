
const style = {
  aboutUsContainer: `p-4 mt-20 flex flex-col gap-4 mt-8 mb-12`,
  aboutUsTitle: `text-xl md:text-2xl text-center font-bold uppercase my-2`,
  subTitles: `font-semibold text-lg`
}

export default function About() {
  return (
    <section className={style.aboutUsContainer} id="about-us">
      <h1 className={style.aboutUsTitle}>About Us</h1>
      <div className="">
        <p>
          Parka International Ltd is a premium lifestyle management company with
          a focus on creating memorable and amazing experiences for members of
          it's clubs. Our clubs are impact driven communities with a focus on
          improving the lives of its members socially, academically, financially
          and otherwise. We are creating the next chapter of social connection.
        </p>
      </div>

      {/* Mission  */}
      <div className="">
        <h3 className={style.subTitles}>Our Mission</h3>
        <p>
          Parka International as a premium lifestyle management company aims to
          improve the lifestyle of the members of it's clubs. We aim to create
          the future of social connection where people get to connect, learn,
          party and have fun while impacting positively in the lives of one
          another
        </p>
      </div>

      {/* Vision */}
      <div className="">
        <h3 className={style.subTitles}>Our Vision</h3>
        <p>
          We have the vision to advance social connectivity while inspiring true
          values which are friendship, love and unity in our communities.
        </p>
      </div>
    </section>
  );
}
