import HeroImg from "../assets/banner-stack.png"

export default function Hero() {
  return (
    <>
      <div className="container mx-auto items-center flex justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold">Build Your Ideal<br /><span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent ">Development Stack</span></h1>
          <p>
            Explore frontend, backend, database, and tooling options,<br />compare
            them side by side, and put together the stack that fits your<br />next
            project.
          </p>
          <div className="flex gap-2.5 mt-7">
            <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] text-white px-3 py-2 rounded-md cursor-pointer">Explore Technologies</button>
            <button className="border border-gray-300 px-10 py-2 rounded-md cursor-pointer">Learn More</button>
          </div>
        </div>
        <img src={HeroImg} alt="" />
      </div>
    </>
  );
}
