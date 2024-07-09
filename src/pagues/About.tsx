export default function About() {
  return (
    <>
      <div className="">
        <h2 className=" text-white font-bold text-3xl">Sobre Mi</h2>
        <p className="text-gray-400 pt-10 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia{" "}
          <br />
          tellus non vehicula. Sed tincidunt, lorem eget ornare scelerisque,
          <br />
          orci libero tempus nulla
        </p>
      </div>

      <div className="md:flex  md:flex-col text-white">
        <div className="flex mt-16">
          <img src="./public/proyecto.jpeg" alt="" className="w-1/2 rounded-md" />{" "}
          <p className="ml-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia{" "}
          </p>
        </div>

        <div className="flex mt-16">
          <p className="ml-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia{" "}
          </p>
          <img src="./public/proyecto.jpeg" alt="" className="w-1/2 rounded-md mr-3" />{" "}
        </div>

        <div className="flex mt-16">
          <img src="./public/proyecto.jpeg" alt="" className="w-1/2 rounded-md" />{" "}
          <p className="ml-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia{" "}
          </p>
        </div>
       
      </div>

      
    </>
  );
}
