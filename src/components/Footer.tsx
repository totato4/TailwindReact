const Footer = () => {
  return (
    <footer className="bg-headRed  max-w-full">
      <div className=" text-white mx-5  ">
        <nav className="">
          <ul className="flex justify-between items-center flex-wrap xl:h-[145px] lg:h-[100px] md:h-[150px] sm:h-[150px] h-[150px] ">
            <li
              className="md:order-1
            xl:text-[24px] xl:leading-[1.8869rem] lg:text-xl md:text-lg text-base leading-[12.58px] font-medium font-BlackHanSans
            "
            >
              My contacts
            </li>
            <ul
              className="md:flex md:gap-3 gap-2 md:order-2 order-3 md:w-auto w-full
            font-medium font-Poppins xl:text-[18px] xl:leading-[1.35rem] lg:text-base  md:text-sm text-xs
            "
            >
              <li>Phone: +015207940490</li>
              <li>Email: befaart@gmx.de</li>
              <li>Instagram: @befaart</li>
            </ul>

            <li className="flex md:order-3 ">
              <span
                className="mr-3 
              xl:text-[18px] xl:leading-[1.415rem] lg:text-base md:text-base text-sm font-medium font-BlackHanSans
              "
              >
                To too
              </span>
              <svg
                width="12"
                height="23"
                viewBox="0 0 12 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="2"
                  height="20.075"
                  transform="matrix(-1 0 0 1 7 2.73755)"
                  fill="white"
                />
                <path
                  d="M6 0L0.803848 4.79062L11.1962 4.79062L6 0Z"
                  fill="white"
                />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
