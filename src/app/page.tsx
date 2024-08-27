import About from "@/components/About";
import Contact from "@/components/contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}
