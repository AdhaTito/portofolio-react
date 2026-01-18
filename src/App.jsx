// import { Routes, Route } from "react-router-dom";
// import { Navbar } from "flowbite-react";
// import { Sertifikat } from "flowbite-react";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Portofolio from "./Sections/Portofolio";
import Sertifikat from "./Sections/Sertifikat";
import Skiils from "./Sections/Skills";
import Experience from "./Sections/Experience";
import Contacts from "./Sections/Contacts";
import Footer from "./Sections/Footer";

function App() {
    useEffect(() => {
        // Fungsi ini akan menjalankan script Flowbite setelah komponen selesai dimuat
        initFlowbite();
    }, []); // [] artinya hanya dijalankan sekali saat aplikasi start
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Portofolio />
            <Skiils />
            <Sertifikat />
            <Experience />
            <Contacts />
            <Footer />
        </>
    );
}

export default App;
