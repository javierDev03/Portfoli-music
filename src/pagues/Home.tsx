import AlbumComponent from "../components/AlbumComponent";
import { AnimatedShinyTextDemo } from "../components/AnimatedShinyTextDemo";
import BlurInDemo from "../components/BlurInDemo";
import Navbar from "../components/Navbar";
import ParticlesDemo from "../components/ParticlesDemo";

import About from "./About";
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="pl-4 section py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
        <div className=" items-center text-center">
          <img
            src="./public/avatar.png"
            alt=""
            className=" rounded-full size-32 overflow-hidden mr-4"
          />
        </div>
        <div className="">
          <BlurInDemo />
          <p className=" font-semibold text-left mb-1 text-gray-400 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia{" "}
            <br />
            a tellus non vehicula. Sed tincidunt, lorem eget ornare <br />{" "}
            scelerisque, orci libero tempus nulla
          </p>
        </div>
        <button className=" mt-3 rounded-lg px-10 bg-gray-500 h-10">
          <a href="" className="text-indigo-50 p-3 text-xl font-semibold">
            Email
          </a>
        </button>
        
      </section>

      <section className="pl-4 section py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
        <About />
      </section>

      <section className="pl-4 section py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
        <ParticlesDemo />
        
        <div className="md:flex w-fit">
          <div className="mr-3 mt-15 md:w-1/2 mb-8">
            <div className="">
              <AlbumComponent /> 
            </div>
          </div>

          <div className="flex flex-col justify-star md:w-1/2 mr-2">
            <a
              className="hover:bg-gray-800  duration-300 bg-[#171717] p-5 rounded-lg group "
              href=""
            >
              <img
                src="https://picsum.photos/250/250"
                className="w-full rounded shadow"
                alt="Album Cover"
              />

              <div className="mt-5">
                <h3 className="text-gray-200 font-bold"> Top 50 - Global</h3>
                <p className="text-gray-400 font-light mt-2 text-xs">
                  Your daily update of the most played track from around the
                  world...
                </p>
              </div>
            </a>
            <div className="w-max pt-1">
          <AnimatedShinyTextDemo/>
          </div>
          </div>
          
        
        </div>
        
       
      
      
      </section>
     
    </>
  );
}
