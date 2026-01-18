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
            <p className="font-semibold text-secondaryColor dark:text-slate-200">
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
                  src="/portofolio-pustaka-booking.png"
                  alt="Zoomable"
                  className="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-mainColor/80">
              Pustaka Booking CI3
            </h3>
            <p className="font-light dark:text-slate-400">
              website peminjaman Buku untuk perpustakaan menggunakan bahasa
              pemrograman PHP dan Framework CodeIgniter 3
            </p>
          </div>
          <div className="p-4 mb-12">
            <div className="object-cover overflow-hidden rounded-md shadow-md">
              <Zoom>
                <img
                  src="/portofolio-Daftar-KomiK.png"
                  alt="Zoomable"
                  className="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-mainColor/80">
              Daftar Komik CI4 (CRUD)
            </h3>
            <p className="font-light dark:text-slate-400">
              Membuat Website daftar komik dengan sistem sederhana CRUD
              menggunakan Framework CodeIgniter 4
            </p>
          </div>
          <div className="p-4 mb-12">
            <div className="object-cover overflow-hidden rounded-md shadow-md">
              <Zoom>
                <img
                  src="/Portofolio-silicing-figma-code-2.png"
                  alt="Zoomable"
                  className="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-mainColor/80">
              Slicing Design Web Bootcamp
            </h3>
            <p className="font-light dark:text-slate-400">
              Membuat website dengan tema Promosi Bootcamp dari design Figma
              yang sudah dibuat dan menerapkan menjadi code HTML, CSS, dan
              Bootstrap 4
            </p>
          </div>
          <div className="p-4 mb-12">
            <div className="object-cover overflow-hidden rounded-md shadow-md">
              <Zoom>
                <img
                  src="/portofolio-silicing-figma-code.png"
                  alt="Zoomable"
                  className="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-mainColor/80">
              Slicing Design Web Properti
            </h3>
            <p className="font-light dark:text-slate-400">
              Membuat website dengan tema Penjualan Properti dari design Figma
              yang sudah dibuat dan menerapkan menjadi code HTML, CSS, dan
              Bootstrap 4
            </p>
          </div>
          <div className="p-4 mb-12">
            <div className="object-cover overflow-hidden rounded-md shadow-md">
              <Zoom>
                <img
                  src="/Portofolio-prototype-design.png"
                  alt="Zoomable"
                  className="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-mainColor/80">
              Design Prototype Figma (Aplikasi Traveling)
            </h3>
            <p className="font-light dark:text-slate-400">
              Membuat Desiggn Figma beserta Prototype nya dengan sistem design
              UI/UX.
            </p>
          </div>
          <div className="p-4 mb-12">
            <div className="object-cover overflow-hidden rounded-md shadow-md">
              <Zoom>
                <img
                  src="/Portofolio-prototype-design-2.png"
                  alt="Zoomable"
                  className="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-mainColor/80">
              Design Prototype Figma (Aplikasi Lamaran Kerja)
            </h3>
            <p className="font-light dark:text-slate-400">
              Membuat Desiggn Figma beserta Prototype nya dengan sistem design
              UI/UX.
            </p>
          </div>
          <div className="p-4 mb-12">
            <div className="object-cover overflow-hidden rounded-md shadow-md">
              <Zoom>
                <img
                  src="/portofolio-dashboards-kibana.png"
                  alt="Zoomable"
                  className="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-mainColor/80">
              Tracing Aplikasi PerBankan menggunakan Elastic Kibana
            </h3>
            <p className="font-light dark:text-slate-400">
              Melakukan troubleshooting dan problem mapping pada aplikasi Wondr
              by BNI serta melakukan monitoring dari dashboard Kibana dan
              melakukan Reporting untuk kebutuhan Bisnis maupun Teknis.
            </p>
          </div>
          <div className="p-4 mb-12">
            <div className="object-cover overflow-hidden rounded-md shadow-md">
              <Zoom>
                <img
                  src="/portofolio-dynatrace-dashboard-2.jpg"
                  alt="Zoomable"
                  className="rounded-md shadow-md"
                />
              </Zoom>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-secondaryColor dark:text-mainColor/80">
              Monitoring Dynatrace
            </h3>
            <p className="font-light dark:text-slate-400">
              Melakukan monitoring kinerja aplikasi (APM) yang menggunakan
              kecerdasan buatan (AI) dan pembelajaran mesin untuk memantau dan
              menganalisis kinerja aplikasi, layanan mikro, dan infrastruktur
              cloud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portofolio;
