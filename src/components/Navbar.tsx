
export default function Navbar() {
  return (
    <>
    <header className=" fixed top-0 z-10 flex  items-center justify-center w-full mx-auto mt-2">
    <nav className=" text-white flex px-3 text-xl font-medium rounded-full  bg-gray-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-30 backdrop-saturate-100 backdrop-contrast-100">
        <a href="" className=" pr-2 relativ block px-2 py-2">Home</a>
        <a href="" className=" pr-2 relative block px-2 py-2">Sobre Mi</a>
        <a href="" className=" relative block px-2 py-2">Proyectos</a>
    </nav>
    </header>
    </>
  )
}
