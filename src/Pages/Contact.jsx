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

  const handleChange = () => {
    console.log("i am happy");
  };
  return (
    <main className=" bg-white w-full border border-black h-full">
      <div className=" max-w-6xl mx-auto">
        <section className=" max-w-3xl border border-black">
          <header>
            <h1 className="font-semibold capitalize text-[#101828] text-[36px] leading-[44px]">
              contact me
            </h1>
            <p className="text-[20px] font-normal text-[#475467]  leading-[30px]">
              Hi there, contact me to ask me anything you have in mind.
            </p>
          </header>
          <form>
            <div>
              <div>
                <p className="font-medium leading-[20px] text-sm">first name</p>
                <input
                  type="text"
                  value={first_name}
                  id="first_name"
                  placeholder="enter your first name"
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
