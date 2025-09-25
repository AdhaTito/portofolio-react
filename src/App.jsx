// import { Routes, Route } from "react-router-dom";
// import { Navbar } from "flowbite-react";
import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Portofolio from "./Sections/Porrtofolio";
import Sertifikat from "./Sections/Sertifikat";
import Skiils from "./Sections/Skills";
import Experience from "./Sections/Experience";
import Contacts from "./Sections/Contacts";
import Footer from "./Sections/Footer";

function App() {
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
