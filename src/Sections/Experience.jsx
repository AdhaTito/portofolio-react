function Experience() {
    return (
        <section
            id="experience"
            className="pt-28 pb-28 bg-slate-700 dark:bg-slate-500 bg-[url('../img/pattern2.png')] bg-contain bg-repeat"
        >
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto mb-16 text-center">
                        <h3 className="mb-4 text-2xl font-semibold text-mainColor">
                            My Experience
                        </h3>
                        <p className="font-semibold text-slate-100 dark:text-white">
                            Pengalaman yang pernah saya lakukan selama saya
                            belajar di Universitas Bina Sarana Informatika
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-10 p-4 text-secondaryColor">
                    <div className="overflow-hidden font-semibold text-center transition-all duration-500 shadow-lg w-96 lg:w-96 md:w-80 sm:w-64 rounded-xl dark:bg-white bg-slate-100 hover:bg-mainColor hover:scale-105 hover:text-slate-100 dark:hover:bg-mainColor">
                        <a>
                            <img
                                src="/serti-micromentor.jpg"
                                className="object-cover w-full"
                                alt=""
                            ></img>
                        </a>

                        <h3 className="mt-4 text-xl lg:text-2xl me-4">
                            Micromentor
                        </h3>
                        <p className="p-4 mb-4 text-sm font-medium">
                            {" "}
                            Disini Saya terhubung menjadi Mentor yang membantu
                            para UMKM di Indonesia agar membantu dalam usahannya
                            dalam perkembangan Industri 4.0
                        </p>
                    </div>
                    <div className="overflow-hidden font-semibold text-center transition-all duration-500 shadow-lg w-96 lg:w-96 md:w-80 sm:w-64 rounded-xl dark:bg-white bg-slate-100 hover:bg-mainColor hover:scale-105 hover:text-slate-100 dark:hover:bg-mainColor">
                        <a>
                            <img
                                src="/serti-uiux.jpg"
                                className="object-cover w-full"
                                alt=""
                            ></img>
                        </a>

                        <h3 className="mt-4 text-xl lg:text-2xl me-4">
                            UI/UX Design
                        </h3>
                        <p className="p-4 mb-4 text-sm font-medium">
                            Menyelesaikan Ujian Sertifikat Intuit Design For
                            Delight atau UI/UX Design pada program Studi
                            Independen di{" "}
                            <span className="text-blue-500 underline">
                                <a
                                    href="https://myedusolve.com/"
                                    target="_blank"
                                >
                                    MyEduSolve
                                </a>
                            </span>
                        </p>
                    </div>
                    <div className="overflow-hidden font-semibold text-center transition-all duration-500 shadow-lg w-96 lg:w-96 md:w-80 sm:w-64 rounded-xl dark:bg-white bg-slate-100 hover:bg-mainColor hover:scale-105 hover:text-slate-100 dark:hover:bg-mainColor">
                        <a>
                            <img
                                src="/serti-Infinite-learning.png"
                                className="object-cover w-full"
                                alt=""
                            ></img>
                        </a>
                        <h3 className="mt-4 text-xl lg:text-2xl me-4">
                            Bootcamp FrontEnd
                        </h3>
                        <p className="p-4 mb-4 text-sm font-medium">
                            {" "}
                            Menyelesaikan Bootcamp FrontEnd Web Development di{" "}
                            <span className="text-blue-500 underline">
                                <a
                                    href="https://www.infinitelearning.id/"
                                    target="_blank"
                                >
                                    Infinite Learning
                                </a>
                            </span>
                        </p>
                    </div>
                    <div className="overflow-hidden font-semibold text-center transition-all duration-500 shadow-lg w-96 lg:w-96 md:w-80 sm:w-64 rounded-xl dark:bg-white bg-slate-100 hover:bg-mainColor hover:scale-105 hover:text-slate-100 dark:hover:bg-mainColor">
                        <a>
                            <img
                                src="/dashboard-kibana.png"
                                className="object-cover w-full"
                                alt=""
                            ></img>
                        </a>
                        <h3 className="mt-4 text-xl lg:text-2xl me-4">
                            Application Service L2
                        </h3>
                        <p className="p-4 mb-4 text-sm font-medium">
                            {" "}
                            Bekerja dibidang IT Perbank-an pada divisi APS-L2
                            yaitu divisi yang menangani terkait tiket issue pada
                            APP Wondr-BNI dan melakukan tracing terkait kendala
                            error dan monitoring aplikasi untuk kelancaran
                            pengguna user/Nasabah{" "}
                            <span className="text-blue-500 underline">
                                <a
                                    href="https://wondr.bni.co.id/"
                                    target="_blank"
                                >
                                    Wondr BNI
                                </a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
