
import AlbumComponent from "../components/AlbumComponent";
import Navbar from "../components/Navbar";

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
        <div>
          <h1 className=" font-bold text-4xl mb-2 text-white">
            Hola, soy emmanuel
          </h1>
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
        <div className="">
          <div className="mr-3">
          <AlbumComponent/>
          </div>
         
          
           
          
        </div>
      </section>
     
    </>
  );
}
