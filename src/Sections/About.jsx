function About() {
  return (
    <section id="about" className="pt-20 pb-28">
      <div className="container flex justify-center">
        <div className="flex flex-wrap w-full max-w-7xl">
          <div className="px-4 mb-10 md:w-1/2">
            <h3 className="mb-3 text-2xl font-semibold text-orange-500">
              About Me
            </h3>
            <h4 className="mb-3 text-2xl font-semibold dark:text-white text-secondaryColor">
              Ilmu yang paling hebat adalah ilmu yang bermanfaat
            </h4>
            <h4 className="text-justify text-secondaryColor dark:text-slate-100">
              “Saya merupakan mahasiswa semester 8 Program Studi Sistem
              Informasi dengan keahlian yang saya miliki yaitu Front-End
              Developer, UI/UX Design dan berpengalaman sebagai Mentor Online di
              Micromentor. Sertifikat-sertifikat yang sudah saya selesaikan
              adalah Programming Essentials in Python, Design For Delight
              (UI/UX), Adobe Ilustrator, lalu saya juga mengikuti bootcamp dari
              Infinite Learning (Front-End Development), Soft Skill yang saya
              miliki Problem Solving, Detail Oriented, Kreative, kemampuan
              belajar mandiri, kerjasama tim, dan Mudah beradaptasi."
            </h4>
          </div>
          <div className="px-4 mb-10 md:w-1/2">
            <h3 className="mb-3 text-xl font-semibold text-secondaryColor mt-11 dark:text-white">
              Let's be Friends
            </h3>
            <h4 className="text-secondaryColor dark:text-slate-100">
              Mari terhubung dengan Saya
            </h4>
            <div className="flex gap-8 mt-5 ">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/adha-mastito-32005826a"
              >
                <i className="duration-300 ease-in-out fa-brands fa-linkedin fa-2x text-secondaryColor dark:text-white hover:text-orange-500 dark:hover:text-orange-500"></i>
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=6282124509598"
              >
                <i className="duration-300 ease-in-out fa-brands fa-square-whatsapp fa-2x text-secondaryColor dark:text-white hover:text-orange-500 dark:hover:text-orange-500"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/adhatito_001/">
                <i className="duration-300 ease-in-out fa-brands fa-square-instagram fa-2x text-secondaryColor dark:text-white hover:text-orange-500 dark:hover:text-orange-500"></i>
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/zitcheron.zitcheron/"
              >
                <i className="duration-300 ease-in-out fa-brands fa-square-facebook fa-2x text-secondaryColor dark:text-white hover:text-orange-500 dark:hover:text-orange-500"></i>
              </a>
              <a target="_blank" href="https://github.com/AdhaTito">
                <i className="duration-300 ease-in-out fab fa-github-square fa-2x text-secondaryColor dark:text-white hover:text-orange-500 dark:hover:text-orange-500"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
