import React from "react";
import cart1 from "../icons/cart1.jpg";
import search from "../icons/search.svg";

const Navbar = () => {
  return (
    <div>
      {/* Upper Black Navbar */}
      <div className="flex bg-black flex-col items-center p-2  w-[100%] h-auto sm:flex sm:flex-row md:pl-11 md:text-2xl lg:pl-[100px] lg:text-2xl 2xl:pl-[300px]">
        <span className=" text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <div className="flex md:flex-nowrap lg:pl-[200px]">
          <button className="text-white  border ">Shop Now</button>
        </div>
        <div className="pl-[10px]">
          <select className="bg-black text-white border ">
            <option>English</option>
          </select>
        </div>
      </div>
      {/* Upper Black Navbar */}
      {/* Lower White Navbar */}

      <div className="max-w-[1520px] bg-white flex pt-[20px] font-semibold flex-row flex-wrap list-none basis-1 items-center gap-[20px] md:flex-wrap md:text-[20px] md:pl-[30px] md:gap-[60px] lg:gap-[20px] xl:gap-[85px]">
        <h1 className="text-3xl">Exclusive Store</h1>
        <button>Home</button>
        <button>Contact</button>
        <button>About</button>
        <button>Sign Up</button>
        <div className="flex">
          <input
            type="text"
            className="text-center bg-[#F5F5F5]"
            placeholder="Search with me"
          />
          <img src={search} />
        </div>
        <img src={cart1} />
      </div>

      {/* Lower White Navbar ended */}
      {/* Hr Lines started */}
      <div className="pt-[30px]">
        <hr />
      </div>
      {/* Hr Lines Ended */}
    </div>
  );
};

export default Navbar;
