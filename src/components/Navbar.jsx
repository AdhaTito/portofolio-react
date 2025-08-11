import React from "react";
// function Navbar() {
//   return (
//     <nav className="fixed top-0 z-50 w-full border-gray-200 shadow-lg dark:shadow-sm dark:shadow-slate-500 bg-white/50 backdrop-blur-sm dark:bg-black/40 dark:backdrop-blur-sm">
//       <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
//         <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <span className="self-center text-xl font-semibold text-mainColor whitespace-nowrap">
//             Adha Mastito
//           </span>
//         </a>
//         <button
//           data-collapse-toggle="navbar-default"
//           type="button"
//           className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-default"
//           aria-expanded="false"
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//           <ul className="flex flex-col p-2 mt-4 text-sm font-medium border rounded-lg bg-white/80 dark:bg-black/60 md:bg-transparent md:dark:bg-transparent md:gap-4 md:p-0 border-x-gray-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-600 ">
//             <li>
//               <a
//                 href="#hero"
//                 className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mainColor md:border-0 md:hover:text-mainColor md:p-0 dark:text-white md:dark:hover:text-mainColor dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent"
//                 aria-current="page"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#about"
//                 className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mainColor md:border-0 md:hover:text-mainColor md:p-0 dark:text-white md:dark:hover:text-mainColor dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent"
//               >
//                 About Me
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#portofolio"
//                 className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mainColor md:border-0 md:hover:text-mainColor md:p-0 dark:text-white md:dark:hover:text-mainColor dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent"
//               >
//                 Portofolio
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#skills"
//                 className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mainColor md:border-0 md:hover:text-mainColor md:p-0 dark:text-white md:dark:hover:text-mainColor dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent"
//               >
//                 Skills
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#sertifikat"
//                 className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mainColor md:border-0 md:hover:text-mainColor md:p-0 dark:text-white md:dark:hover:text-mainColor dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent"
//               >
//                 Certificate
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#prestasi"
//                 className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mainColor md:border-0 md:hover:text-mainColor md:p-0 dark:text-white md:dark:hover:text-mainColor dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent"
//               >
//                 Experience
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mainColor md:border-0 md:hover:text-mainColor md:p-0 dark:text-white md:dark:hover:text-mainColor dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { useState, useEffect } from "react";

function Navbar() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-gray-200 shadow-lg dark:shadow-sm dark:shadow-slate-500 transition-colors duration-300 
        ${isTop ? "bg-slate-950" : "bg-transparent"} 
        ${!isTop ? "backdrop-blur-sm bg-white/40 dark:bg-black/40" : ""}`}
    >
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl font-semibold text-mainColor whitespace-nowrap">
            Adha Mastito
          </span>
        </a>
        {/* tombol menu */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* menu navigasi */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-2 mt-4 text-sm font-medium border rounded-lg bg-white/80 dark:bg-black/60 md:bg-transparent md:dark:bg-transparent md:gap-4 md:p-0 border-x-gray-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-600">
            <li>
              <a
                href="#hero"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mainColor md:border-0 md:hover:text-mainColor md:p-0 dark:text-white md:dark:hover:text-mainColor dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mainColor md:border-0 md:hover:text-mainColor md:p-0 dark:text-white md:dark:hover:text-mainColor dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#portofolio"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mainColor md:border-0 md:hover:text-mainColor md:p-0 dark:text-white md:dark:hover:text-mainColor dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent"
              >
                Portofolio
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mainColor md:border-0 md:hover:text-mainColor md:p-0 dark:text-white md:dark:hover:text-mainColor dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#sertifikat"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mainColor md:border-0 md:hover:text-mainColor md:p-0 dark:text-white md:dark:hover:text-mainColor dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent"
              >
                Certificate
              </a>
            </li>
            <li>
              <a
                href="#prestasi"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mainColor md:border-0 md:hover:text-mainColor md:p-0 dark:text-white md:dark:hover:text-mainColor dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mainColor md:border-0 md:hover:text-mainColor md:p-0 dark:text-white md:dark:hover:text-mainColor dark:hover:bg-gray-700 dark:hover:text-mainColor md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
            {/* tambahkan link lainnya seperti di kode kamu */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
