import React from "react";

const Header = () => {
  // font-family: 'Black Han Sans', sans-serif;
  // font-family: 'Poppins', sans-serif;

  return (
    <header className="bg-headRed max-w-full z-50">
      <nav className="md:hidden">
        <div className="flex justify-between p-5 h-[60px] fixed top-0 w-full bg-headRed z-50">
          <button className="flex z-60 ">
            <p className="text-white text-[16px] leading-[19.2px] font-black">
              BefaArt
            </p>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
            </svg>
          </button>
          <button className="z-50">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="8.44434"
                width="7.11111"
                height="2.22222"
                rx="1.11111"
                fill="white"
              />
              <rect
                y="6.66666"
                width="15.5556"
                height="2.22222"
                rx="1.11111"
                fill="white"
              />
              <rect
                x="3.11133"
                y="13.7778"
                width="12.4444"
                height="2.22222"
                rx="1.11111"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </nav>
      <nav className="md:block hidden">
        <ul
          className=" container mx-auto max-w-contWidth flex flex-row justify-center h-24 relative
        xl:text-[18px] xl:leading-[1.35rem] lg:text-base md:text-sm text-xs xl:gap-20 lg:gap-14 md:gap-12 gap-10 font-Poppins items-center font-medium "
        >
          <li className="     text-whiteText">Home</li>
          <li className="     text-whiteText">My portfolio</li>
          <li className=" font-black text-[24px] leading-[1.8rem] flex flex-row place-content-center  text- text-white">
            <p className="text-white">BefaArt</p>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
            </svg>
          </li>
          <li className="     text-white">About</li>
          <li className="     text-white">Contacts</li>
          <button className=" text-center justify-center     flex  absolute xl:right-[50px] lg:right-[30px] right-[15px]  text-white">
            <div className="mr-[9px]">ENG</div>
            <div className="mt-auto mb-auto">
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.02232 7.83482C6.93304 7.92411 6.83036 7.96875 6.71429 7.96875C6.59821 7.96875 6.49554 7.92411 6.40625 7.83482L0.165179 1.59375C0.0758929 1.50446 0.0312501 1.40179 0.0312501 1.28571C0.0312501 1.16964 0.0758929 1.06696 0.165179 0.977679L0.834822 0.308036C0.924107 0.21875 1.02679 0.174107 1.14286 0.174107C1.25893 0.174107 1.36161 0.21875 1.45089 0.308036L6.71429 5.57143L11.9777 0.308036C12.067 0.21875 12.1696 0.174107 12.2857 0.174107C12.4018 0.174107 12.5045 0.21875 12.5938 0.308036L13.2634 0.977679C13.3527 1.06696 13.3973 1.16964 13.3973 1.28571C13.3973 1.40179 13.3527 1.50446 13.2634 1.59375L7.02232 7.83482Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
