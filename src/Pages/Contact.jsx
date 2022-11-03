import React from "react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });
  const { first_name, last_name, email, message } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  return (
    <main className=" bg-white w-full  h-full">
      <div className=" max-w-6xl mx-auto">
        <section className=" max-w-3xl  mx-auto">
          <header>
            <h1 className="font-semibold capitalize text-[#101828] text-[36px] leading-[44px]">
              contact me
            </h1>
            <p className="text-[20px] font-normal text-[#475467]  leading-[30px]">
              Hi there, contact me to ask me anything you have in mind.
            </p>
          </header>
          <form>
            <div className="pt-5">
              <div>
                <p className="font-medium leading-[20px] text-gray-700 text-sm">
                  first name
                </p>
                <input
                  type="text"
                  value={first_name}
                  id="first_name"
                  placeholder="Enter your first name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="focus:border-[#84CAFF] border focus:shadow border-gray-300 py-[10px] w-full px-[14px] h-[44px] rounded-[8px] outline-0 "
                />
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
