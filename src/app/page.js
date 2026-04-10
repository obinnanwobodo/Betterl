import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
  <div>
      <div>
      <Navbar/>
    </div>


  <div>
      <Hero/>
    </div>
  </div>
  );
}
