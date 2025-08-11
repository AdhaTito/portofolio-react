function Hero() {
  return (
    <>
      <section id="hero" className="mt-32 md:mt-20 ">
        <div className="relative">
          <div className="absolute w-32 h-32 rounded-full -z-10 right-4 md:top-24 md:right-24 bg-mainColor/20 md:bg-mainColor/40 blur-xl"></div>
        </div>

        <div className="relative">
          <div className="absolute w-32 h-32 rounded-full top-40 left-20 -z-10 bg-mainColor/30 blur-xl"></div>
        </div>

        <div className="fixed bottom-4 right-4 md:bottom-10 md:right-20 ">
          <a href="#">
            <i className="z-50 w-12 h-12 p-1 text-center text-white border-4 rounded-full border-mainColor bg-slate-600 dark:text-mainColor fa-solid fa-arrow-up fa-2x"></i>
          </a>
        </div>

        <div className="container flex justify-center">
          <div className="flex flex-wrap w-full max-w-7xl">
            <div className="self-center px-4 md:w-1/2">
              <h1 className="text-3xl font-medium text-mainColor md:text-4xl">
                Hello,
                <span className="block font-bold dark:text-white text-secondaryColor md:text-5xl">
                  I'am Adha Mastito
                </span>
              </h1>
              <h1 className="mb-4 font-semibold dark:text-slate-200 text-secondaryColor md:text-2xl">
                UI/UX Design | Front end Developer | Officer
              </h1>
              <p className="text-base font-light text-secondaryColor mb-7 dark:text-slate-100">
                "Kegagalan adalah kesempatan untuk memulai lagi dengan
                <span className="font-medium text-mainColor"> cerdas</span>."
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=6282124509598"
                target="_blank"
                className="tracking-wide font-bold text-white bg-mainColor py-[10px] px-8 rounded-lg hover:bg-white hover:border-2 border-2 border-transparent hover:border-mainColor hover:text-mainColor shadow-md shadow-slate-400 duration-500 ease-in-out"
              >
                Let's Talk <i className="fas fa-arrow-right "></i>
              </a>
            </div>
            <div className="self-end px-4 md:w-1/2 ">
              <div className="mt-10">
                <img
                  src="/public/assets/Image Hero Portofolio.png"
                  alt=""
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  className=" mx-auto w-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
