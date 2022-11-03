import React from "react";
import zuri from "./assets/zuri.jpg";
import ingforgood from "./assets/I4G.png";
import text from "./assets/text.jpg";

function Footer() {
  return (
    <>
      <div className="w-full bg-gray-200 h-[2px] px-4  mt-[50px]"></div>
      <footer className="  md:flex justify-between items-center  p-4">
        <img src={zuri} alt="zuri" className=" h-[25px]" />
        <img src={text} alt="text" className="my-[8px] h-[15px]" />
        <img src={ingforgood} alt="i4g" className=" h-[25px]" />
      </footer>
    </>
  );
}

export default Footer;
