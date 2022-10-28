import data from "./Data";
import { Link, redirect } from "react-router-dom";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(false);
  const [showRedirect, setShowRedirect] = useState(false);
  return (
    <main>
      <section className="flex flex-col justify-center items-center mt-[25px]">
        <img
          src="https://avatars.githubusercontent.com/u/111116636?s=400&u=0c9e7cf14378b1d318240ede1d4a9f314fe5c872&v=4"
          alt="profile"
          id="profile-id"
          className="w-[40px] h-[40px] rounded-full"
        />

        <p className="text-sm font-bold block mt-[10px]">Eze Williams</p>
      </section>
      <section className="max-w-4xl flex flex-col justify-center mx-auto p-4 items-center">
        {data.map((x) => {
          const { link, linkName, id, pitchText, redirect } = x;

          const handleClicked = (clickedId) => {
            if (clickedId === "pitch") {
              setShowText(!showText);
              setShowRedirect(!showRedirect);
            } else {
              <Link to={link} />;
            }
          };

          return (
            <>
              <button
                key={id}
                className=" w-full p-4 bg-gray-300 my-[4px] h-[30px] whitespace-nowrap flex items-center justify-center capitalize rounded text-sm hover:shadow-sm transition duration-150 ease-in-out transform hover:translate-y-[1px]"
                onClick={() => {
                  handleClicked(id);
                }}
              >
                {linkName}
              </button>
              {showText && (
                <p>
                  {pitchText}
                  {redirect && (
                    <span className="w-[5.3rem] h-[2.2rem] whitespace-nowrap cursor-pointer rounded-sm flex items-center justify-center bg-red-500 hover:bg-red-700 text-white capitalize transition duration-250 all ease-in-out my-[1.5px]">
                      {redirect}
                    </span>
                  )}
                </p>
              )}
            </>
          );
        })}
      </section>
    </main>
  );
}

export default App;
