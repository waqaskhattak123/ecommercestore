import React from "react";
import dropdown from "../icons/dropdown.svg";
import iphonlogo from "../icons/iphonlogo.png";
import arrowright from '../icons/arrowright.svg'
import iphonefourteen from '../icons/iphonfourteen.png'

const SideBar = () => {
  return (
    <div className="flex">
      {/* Sidebar started */}

      <div className="flex flex-col flex-nowwrap  w-[250px] font-semibold h-auto pt-[60px] ml-[100px] items-start ">
        <button className="flex flex-nowrap">
          Mens Fashions
          <img src={dropdown} className="pl-[60px] " />
        </button>
        <button className="flex flex-nowrap">
          Womens Fashions
          <img src={dropdown} className="pl-[35px]" />
        </button>
        <button>Electronics</button>
        <button>Home and LifeCycle</button>
        <button>Medicine</button>
        <button>Sports and Outdoor</button>
        <button>Baby's and Toys</button>
        <button>Groceries and Pets</button>
        <button>Health and Beauty</button>
      </div>
      {/* Side Bar Images */}
      <div className="bg-black text-white w-[550px]">
        <div className="inline-flex items-center pl-4 pt-12 text-[15px]">
        <img src={iphonlogo} />
        <span>Iphone 14 Series</span>
        </div>
        <div className="w-[250px] pl-[50px] text-3xl">
        <h1 className="text-white ">Up to 10% off Voucher</h1>
         </div>

      <button className="text-white pl-[50px] pt-[20px] underline flex">Shop Now <img src={arrowright} className="pl-[5px]"/></button>
      </div>
      <div className="flex flex-row">
        <img src={iphonefourteen}/>
      </div>
      {/* sidebar images ended */}
      {/* Sidebar Div Ended */}
    </div>
  );
};

export default SideBar;
