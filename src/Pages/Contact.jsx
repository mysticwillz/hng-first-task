import React from "react";
import { useState, useEffect } from "react";
import { BsCheck } from "react-icons/bs";
import { toast } from "react-toastify";
import Footer from "../Components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    checkbox: false,
  });
  const [check, setCheck] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const { first_name, last_name, email, message, checkbox } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      toast.success("Message sent");
      setFormData({
        last_name: "",
        first_name: "",
        email: "",
        message: "",
      });
      setFirstNameError(false);
      setLastNameError(false);
      setEmailError(false);
      setMessageError(false);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.first_name) {
      errors.first_name = "First name can not be blank";
      setFirstNameError(true);
    }
    if (!values.last_name) {
      errors.last_name = "Last name can not be blank";
      setLastNameError(true);
    }
    if (!values.email) {
      errors.email = "Email can not be blank";
      setEmailError(true);
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.message) {
      errors.message = "Please enter a message";
      setMessageError(true);
    }

    return errors;
  };

  return (
    <main className="  bg-white w-full  h-full">
      <div className=" min-h-screen max-w-6xl  mx-auto">
        <section className=" mx-auto max-w-3xl px-4  ">
          <header>
            <h1 className="font-semibold capitalize text-[#101828] mt-[40px] text-[36px] leading-[44px]">
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
            <div className="pt-5 mt-[10px] flex justify-between flex-wrap md:flex-nowrap items-center w-full">
              <div className="w-full md:w-[50%] md:mr-4 mt-[10px]  ">
                <label
                  htmlFor="first_name"
                  className="font-medium leading-[20px] text-gray-700 text-sm"
                >
                  First name
                </label>
                <input
                  type="text"
                  value={first_name}
                  id="first_name"
                  placeholder="Enter your first name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className={
                    firstNameError
                      ? "mt-[3px]  focus:border-[#84CAFF] border  border-[#F89687] py-[10px] w-full px-[14px] h-[44px] rounded-[8px] outline-0 "
                      : "mt-[3px]  focus:border-[#84CAFF] border  border-gray-300 py-[10px] w-full px-[14px] h-[44px] rounded-[8px] outline-0 "
                  }
                />

                <p className="font-medium text-sm text-[#F83F23]">
                  {formErrors.first_name}
                </p>
              </div>
              <div className="w-full md:w-[50%] md:ml-4 mt-[10px] flex flex-col ">
                <label
                  htmlFor="last_name"
                  className="font-medium leading-[20px] text-gray-700 text-sm"
                >
                  Last name
                </label>
                <input
                  type="text"
                  value={last_name}
                  id="last_name"
                  placeholder="Enter your last name"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className={
                    lastNameError
                      ? "mt-[3px] border-[#F89687] focus:border-[#84CAFF] border   py-[10px] w-full px-[14px] h-[44px] rounded-[8px] outline-0 "
                      : "mt-[3px]  focus:border-[#84CAFF] border  border-gray-300 py-[10px] w-full px-[14px] h-[44px] rounded-[8px] outline-0 "
                  }
                />

                <p className="font-medium text-sm text-[#F83F23]">
                  {formErrors.last_name}
                </p>
              </div>
            </div>
            <div className="w-[100%] mt-[10px] flex flex-col">
              <label
                htmlFor="email"
                className="font-medium leading-[20px] text-gray-700 text-sm"
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                id="email"
                placeholder="yourname@email.com"
                onChange={(e) => {
                  handleChange(e);
                }}
                className={
                  emailError
                    ? "mt-[3px]focus:border-[#84CAFF] border border-[#F89687] focus:border-[#84CAFF]  py-[10px] w-full px-[14px] h-[44px] rounded-[8px] outline-0 "
                    : "mt-[3px]focus:border-[#84CAFF] border  focus:border-[#84CAFF]  border-gray-300 py-[10px] w-full px-[14px] h-[44px] rounded-[8px] outline-0 "
                }
              />

              <p className="font-medium text-sm text-[#F83F23]">
                {formErrors.email}
              </p>
            </div>
            <div className="w-[100%] mt-[10px] flex flex-col">
              <label
                htmlFor="message"
                className="font-medium leading-[20px] text-gray-700 text-sm"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                placeholder="Send me a message and i'll reply you as soon as possible"
                onChange={(e) => {
                  handleChange(e);
                }}
                className={
                  messageError
                    ? "  mt-[3px] focus:border-[#F89687] border focus--shadow border-[#F89687] py-[12px] w-full px-[14px] h-[132px] rounded-[8px] outline-0 "
                    : "  mt-[3px] focus:border-[#84CAFF] border focus-shadow border-gray-300 py-[12px] w-full px-[14px] h-[132px] rounded-[8px] outline-0 "
                }
              ></textarea>

              <p className="font-medium text-sm text-[#F83F23]">
                {formErrors.message}
              </p>
            </div>

            <div
              onClick={() => {
                setCheck(!check);
              }}
              className=" flex items-center relative cursor-pointer mt-[10px] font-[400px] leading-[24px] "
            >
              <div
                className={
                  check
                    ? ` border-[2px] border-[#1570EF] shadow-lg   flex items-center justify-center  h-[20px] w-[20px] mr-2 rounded-[6px]  `
                    : "   flex items-center checkbox justify-center hover:border-[#84CAFF] transition duration-100 h-[20px] w-[20px] mr-2 border-[2px] rounded-[6px] border-gray-300 "
                }
              >
                <BsCheck
                  className={
                    check
                      ? "w-[20px] h-[20px] rounded-[6px] text-[#1570EF]"
                      : "opacity-0  "
                  }
                />
              </div>
              <input
                type="checkbox"
                checked={check}
                value={checkbox}
                id="checkbox"
                name="checkbox"
                required
                onChange={(e) => {
                  handleChange(e);
                }}
                className="opacity-0 h[1px] w-[1px]  absolute left-[3px] cursor-pointer"
              />
              <label
                htmlFor="checkbox"
                className="   font-[400px] leading-[24px] "
              >
                You agree to providing your data to Eze Williams who may contact
                you.
              </label>
            </div>
            <button
              id="btn__submit"
              className="h-[48px] mt-[16px] w-full bg-[#1570EF] flex items-center btn-hover justify-center rounded-[8px] hover:bg-[#175CD3]  transition duration-100 text-white border-0 leading-[24px] font-semibold"
            >
              Send message
            </button>
          </form>
        </section>
        <Footer />
      </div>
    </main>
  );
}
