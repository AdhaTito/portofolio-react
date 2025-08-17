import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Portofolio() {
  return (
    <section
      id="portofolio"
      className="pt-32 pb-28 bg-slate-100 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto mb-16 text-center">
            <h3 className="mb-4 text-2xl font-semibold text-mainColor ">
              Portofolio
            </h3>
            <p className="font-semibold text-secondaryColor dark:text-white">
              Dibawah ini merupakan Project Mandiri dan pengalaman saya dalam
              bidang IT yang pernah saya Kerjakan
            </p>
          </div>
        </div>
        <div className="grid justify-center grid-cols-1 px-4 md:grid-cols-2">
          <div className="p-4 mb-12">
            <div className="object-cover overflow-hidden rounded-md shadow-md">
              <Zoom>
                <img
                  src="https://picsum.photos/800/400?random=1"
                  alt="Zoomable"
                  classNameName="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-white">
              Pustaka Booking CI3
            </h3>
            <p className="font-light dark:text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
              delectus.
            </p>
          </div>
          <div className="p-4 mb-12">
            <div className="object-cover overflow-hidden rounded-md shadow-md">
              <Zoom>
                <img
                  src="https://picsum.photos/800/400?random=2"
                  alt="Zoomable"
                  classNameName="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-white">
              Portofolio Bootstrap
            </h3>
            <p className="font-light dark:text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
              delectus.
            </p>
          </div>
          <div className="p-4 mb-12">
            <div className="object-cover overflow-hidden rounded-md shadow-md">
              <Zoom>
                <img
                  src="https://picsum.photos/800/400?random=3"
                  alt="Zoomable"
                  classNameName="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-white">
              Daftar Komik CI4 (CRUD)
            </h3>
            <p className="font-light dark:text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
              delectus.
            </p>
          </div>
          <div className="p-4 mb-12">
            <div className="object-cover overflow-hidden rounded-md shadow-md">
              <Zoom>
                <img
                  src="https://picsum.photos/800/400?random=4"
                  alt="Zoomable"
                  classNameName="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-white">
              Design UI/UX Web Bootcamp
            </h3>
            <p className="font-light dark:text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
              delectus.
            </p>
          </div>
          <div className="p-4 mb-12">
            <div className="object-cover overflow-hidden rounded-md shadow-md">
              <Zoom>
                <img
                  src="https://picsum.photos/800/400?random=5"
                  alt="Zoomable"
                  classNameName="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-white">
              Design UI/UX Web Properti
            </h3>
            <p className="font-light dark:text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
              delectus.
            </p>
          </div>
          <div className="p-4 mb-12">
            <div className="object-cover overflow-hidden rounded-md shadow-md">
              <Zoom>
                <img
                  src="https://picsum.photos/800/400?random=6"
                  alt="Zoomable"
                  classNameName="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-white">
              Slicing Design Web Bootcamp
            </h3>
            <p className="font-light dark:text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
              delectus.
            </p>
          </div>
          <div className="p-4 mb-12">
            <div className="object-cover overflow-hidden rounded-md shadow-md">
              <Zoom>
                <img
                  src="https://picsum.photos/800/400?random=7"
                  alt="Zoomable"
                  classNameName="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-white">
              Design UI/UX App Recruiter Karyawan
            </h3>
            <p className="font-light dark:text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
              delectus.
            </p>
          </div>
          <div className="p-4 mb-12">
            <div className="object-cover overflow-hidden rounded-md shadow-md">
              <Zoom>
                <img
                  src="https://picsum.photos/800/400?random=8"
                  alt="Zoomable"
                  classNameName="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-white">
              Lorem ipsum dolor sit.
            </h3>
            <p className="font-light dark:text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
              delectus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portofolio;
