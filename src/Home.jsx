import data from "./Data";
import { useState } from "react";
import { DiGithubBadge } from "react-icons/di";

import ingforgood from "./assets/I4G.png";
import slack from "./assets/slack.jpg";
import text from "./assets/text.jpg";
import zuri from "./assets/zuri.jpg";

function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="max-w-4xl mx-auto">
      <section className="flex flex-col justify-center items-center mt-[25px]">
        <img
          src="https://avatars.githubusercontent.com/u/111116636?s=400&u=0c9e7cf14378b1d318240ede1d4a9f314fe5c872&v=4"
          alt="profile"
          id="profile-id"
          className="w-[45px] h-[45px] rounded-full"
        />

        <p className="text-sm font-bold block mt-[10px]">Eze Williams</p>
      </section>
      <section className="max-w-4xl flex flex-col justify-center mx-auto p-4 items-center">
        {data.map((x, i) => {
          const { link, linkName, id, pitchText, redirect } = x;

          const handleClicked = (index) => {
            if (selected === index) {
              setSelected(null);
            } else {
              setSelected(index);
            }
          };

          return (
            <div key={id} className="w-full">
              {redirect ? (
                <button
                  className=" w-full p-4 bg-gray-300 my-[4px] h-[30px] whitespace-nowrap flex items-center justify-center capitalize rounded text-sm hover:shadow-sm transition duration-150 ease-in-out transform hover:translate-y-[1px]"
                  onClick={() => {
                    handleClicked(i);
                  }}
                >
                  {linkName}
                </button>
              ) : (
                <a href={link} className="w-full">
                  <button className=" w-full p-4 bg-gray-300 my-[4px] h-[30px] whitespace-nowrap flex items-center justify-center capitalize rounded text-sm hover:shadow-sm transition duration-150 ease-in-out transform hover:translate-y-[1px]">
                    {linkName}
                  </button>
                </a>
              )}
              <p
                className={
                  selected === i
                    ? " w-full flex flex-col items-start"
                    : "hidden"
                }
              >
                {pitchText}
                {redirect && (
                  <span className="w-[5.3rem] h-[2.2rem] whitespace-nowrap cursor-pointer rounded-sm flex items-center justify-center bg-red-500 hover:bg-red-700 text-white capitalize transition duration-250 all ease-in-out my-[1.5px]">
                    <a href={link}>{redirect}</a>
                  </span>
                )}
              </p>
            </div>
          );
        })}

        <p id="slack" className=" hidden  ">
          mysticwillz
        </p>
      </section>
      <section className="flex justify-center items-center text-lg ">
        <a href="https://slack.com/mysticwillz">
          <img
            src={slack}
            alt="slack"
            className="w-[1.5rem] cursor-pointer px-[3px]"
          />
        </a>
        <a href="https://github.com/mysticwillz/hng-first-task">
          <DiGithubBadge className="text-[2rem] cursor-pointer px-[2px]" />
        </a>
      </section>
      <footer className=" md:flex justify-between items-center mt-[50px] p-4">
        <img src={zuri} alt="zuri" className=" h-[25px]" />
        <img src={text} alt="text" className="my-[5px] h-[10px]" />
        <img src={ingforgood} alt="i4g" className=" h-[25px]" />
      </footer>
    </main>
  );
}

export default Home;
