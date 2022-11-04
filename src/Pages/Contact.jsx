import React from "react";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    checkbox: false,
  });
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);
  const { first_name, last_name, email, message, checkbox } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    message === " ".trim() && setError(true);
  };
  return (
    <main className="  bg-white w-full  h-full">
      <div className=" max-w-6xl my-auto mx-auto">
        <section className=" max-w-3xl px-4  mx-auto">
          <header>
            <h1 className="font-semibold capitalize text-[#101828] mt-[45px] text-[36px] leading-[44px]">
              contact me
            </h1>
            <p className="text-[20px] font-normal text-[#475467] mt-[8px] leading-[30px]">
              Hi there, contact me to ask me anything you have in mind.
            </p>
          </header>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="w-full "
          >
            <div className="pt-5 mt-[16px] flex justify-between flex-wrap md:flex-nowrap items-center w-full">
              <div className="w-full md:w-[50%] md:mr-4 mt-[16px]  ">
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
                  className="mt-[3px] focus:border-[#84CAFF] border focus:shadow border-gray-300 py-[10px] w-full px-[14px] h-[44px] rounded-[8px] outline-0 "
                />
              </div>
              <div className="w-full md:w-[50%] md:ml-4 mt-[16px] ">
                <p className="font-medium leading-[20px] text-gray-700 text-sm">
                  last name
                </p>
                <input
                  type="text"
                  value={last_name}
                  id="last_name"
                  placeholder="Enter your last name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="mt-[3px] focus:border-[#84CAFF] border focus:shadow border-gray-300 py-[10px] w-full px-[14px] h-[44px] rounded-[8px] outline-0 "
                />
              </div>
            </div>
            <div className="w-[100%] mt-[16px]">
              <p className="font-medium leading-[20px] text-gray-700 text-sm">
                Email
              </p>
              <input
                type="email"
                value={email}
                id="email"
                placeholder="yourname@email.com"
                onChange={(e) => {
                  handleChange(e);
                }}
                className="mt-[3px]focus:border-[#84CAFF] border focus:border-[#84CAFF] focus:shadow border-gray-300 py-[10px] w-full px-[14px] h-[44px] rounded-[8px] outline-0 "
              />
            </div>
            <div className="w-[100%] mt-[16px]">
              <p className="font-medium leading-[20px] text-gray-700 text-sm">
                Message
              </p>
              <textarea
                id="message"
                value={message}
                placeholder="Send me a message and i'll reply you as soon as possible"
                onChange={(e) => {
                  handleChange(e);
                }}
                className={
                  error
                    ? "  mt-[3px] focus:border-[#84CAFF] border focus:shadow border-[#F89687] py-[12px] w-full px-[14px] h-[132px] rounded-[8px] outline-0 "
                    : "  mt-[3px] focus:border-[#84CAFF] border focus:shadow border-gray-300 py-[12px] w-full px-[14px] h-[132px] rounded-[8px] outline-0 "
                }
              ></textarea>
              {error && (
                <p className="font-medium text-sm text-[#F83F23]">
                  Please enter a message
                </p>
              )}
            </div>

            <div
              onClick={() => {
                setCheck(!check);
              }}
              className=" flex items-center cursor-pointer mt-[16px] font-[400px] leading-[24px] "
            >
              <div
                className={
                  check
                    ? ` border-[2px] border-[#1570EF] shadow-lg   flex items-center justify-center  h-[20px] w-[20px] mr-2 rounded-[6px]  `
                    : "hover:shadow flex items-center justify-center hover:border-[#84CAFF] h-[20px] w-[20px] mr-2 border-[2px] rounded-[6px] border-gray-300 "
                }
              >
                <BsCheck
                  className={
                    check
                      ? "w-[20px] h-[20px] rounded-[6px] text-[#1570EF]"
                      : "hidden  "
                  }
                />
              </div>
              <p className="  font-[400px] leading-[24px] ">{`You agree to providing your data to {name} who may contact you.`}</p>
              <input
                type="checkbox"
                checked={check}
                value={checkbox}
                id="checkbox"
                name="checkbox"
                onChange={(e) => {
                  handleChange(e);
                }}
                className="opacity-0  "
              />
            </div>
            <button
              id="btn__submit"
              className="h-[48px] mt-[16px] w-full bg-[#1570EF] flex items-center justify-center rounded-[8px] hover:bg-[#175CD3] hover:shadow-xl text-white border-0 leading-[24px] font-semibold"
            >
              Send message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
