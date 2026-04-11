import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Components/Navbar/Navbar";
import About from "@/Components/About/About";
import Wwd from "@/Components/Wwd/Wwd";
import Purpose from "@/Components/Purpose/Purpose";
import Hww from "@/Components/Hww/Hww";
import Getin from "@/Components/Getin/Getin";


export default function Home() {
  return (
  <div>

      <div id="navbar">
      <Navbar/>
    </div>


  <div id="hero">
      <Hero/>
    </div>



<div id="about">
  <About/>
</div>




<div id="purpose">
  <Purpose/>
</div>



<div id="wwd">
  <Wwd/>
</div>



<div id="hww">
  <Hww/>
</div>



<div id="getin">
  <Getin/>
</div>




  </div>

  );
}
