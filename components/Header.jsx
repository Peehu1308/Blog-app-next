import { assets } from "@/Assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt=""
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-3 font-medium py-1 px-3 sm:py-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get started <Image src={assets.arrow} alt="" />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        {/* <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">A blog (a portmanteau of "web log") is an online journal or informational website displaying information in reverse chronological order, with the latest posts appearing first.</p> */}
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">A blog (a portmanteau of "web log") is an online journal or informational website displaying information in reverse chronological order, with the latest posts appearing first.</p>
        <form
  className="flex items-center justify-between max-w-[500px] w-full scale-100 sm:scale-100 mx-auto mt-10 border border-black rounded overflow-hidden shadow-[-7px_7px_0px_#000000]"
  action=""
>
  <input
    type="email"
    placeholder="Enter your email"
    className="pl-4 py-3 w-full outline-none"
  />
  <button className="border-l border-black py-3 px-6 bg-white hover:bg-black hover:text-white transition-all">
    Subscribe
  </button>
</form>

      </div>
    </div>
  );
};

export default Header;
