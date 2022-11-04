import React from "react";
import zuri from "../assets/zuri.jpg";
import ingforgood from "../assets/I4G.png";
import text from "../assets/text.jpg";

function Footer() {
  return (
    <>
      <div className="w-full bg-gray-100 h-[2px] px-4  mt-[50px]"></div>
      <footer className="  md:flex justify-between items-center  p-4">
        <img src={zuri} alt="zuri" className=" h-[24.55px]" />
        <img src={text} alt="text" className="my-[8px] h-[16px]" />
        <img src={ingforgood} alt="i4g" className=" h-[24px]" />
      </footer>
    </>
  );
}

export default Footer;
