import React from "react";

const Main = () => {
  const imgArray = [
    "img/img-4.jpg",
    "img/img-5.jpg",
    "img/img-6.jpg",
    "img/img-7.jpg",
    "img/img-8.jpg",
    "img/img-9.jpg",
    "img/img-10.jpg",
    "img/img-11.jpg",
  ];

  const array: string[] = imgArray.slice(0, 4);

  const [imgArrayState, setImg] = React.useState(array);

  const [show, setShow] = React.useState(false);

  const toHide = () => {
    const array: string[] = imgArray.slice(0, 4);
    setShow(false);
    setImg(array);
    console.log(imgArrayState);
  };

  const toShow = () => {
    const array2: string[] = imgArray;
    setShow(true);
    setImg(array2);
    console.log(imgArrayState);
    console.log(show);
  };

  return (
    <main
      className=" mx-auto
      xl:pt-[114px]  lg:pt-[91.2px] md:pt-[68.4px] sm:pt-[105px] pt-[105px]  
    xl:mb-[179px] lg:mb-[120px] md:mb-[67px] sm:mb-[67px] mb-[67px] 
    "
    >
      <div className="container mx-auto max-w-contWidth relative md:px-[10px] ">
        <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] z-2 text-center text-white font-BlackHanSans">
          <div className="mt-auto mb-auto">
            <div className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-sm text-xs ">
              Hello, i am
            </div>
            <div
              className="  
            xl:text-[220px] lg:text-[200px] md:text-[150px] sm:text-[60px] text-[50px]      
            "
            >
              BefaArt.
            </div>
          </div>
        </div>

        <div
          className="grid align-middle justify-center
        md:gap-x-[3.59712230216%]  md:grid-cols-colHelloContainer 
        gap-x-[21px] grid-cols-colHelloContainer3
        "
          // gap-x-[5.07246376812%] mx-[5.07246376812%] grid-cols-colHelloContainerMD
        >
          <div
            className="grid
          md:gap-y-[8.94308943089%] md:grid-rows-rowHelloLeft
          gap-y-[22px] grid-rows-rowHelloLeft2
          
          "
            // gap-y-[5.31400966184%] grid-rows-rowHelloLeftMD
          >
            <div className="  ">
              <img
                className="md:block hidden  "
                src="img/img-1.jpg"
                alt="image1"
              />
              <img
                className="md:hidden block"
                src="img/img-main-1.jpg"
                alt=""
              />
            </div>
            <div className=" ">
              <img
                className="md:block hidden"
                src="img/img-3.jpg"
                alt="image3"
              />
              <img
                className="md:hidden block"
                src="img/img-main-2.jpg"
                alt=""
              />
            </div>
          </div>

          <div
            className="grid md:grid-rows-rowNN
          grid-rows-[590px]
          "
          >
            <div className="">
              <img
                className="md:block hidden "
                src="img/img-2.jpg"
                alt="image2"
              />
              <img
                className="md:hidden block"
                src="img/img-main-3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container flex justify-end self-center ml-auto mt-[126px] mb-[40px]">
        <p className="text-white text-base md:text-[24px] md:leading-[1.8869rem]">
          My portfolio
        </p>
        <div className=" ml-[22px]  my-auto md:w-auto w-16 overflow-x-hidden">
          <svg
            width="289"
            height="1"
            viewBox="0 0 289 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="289" height="1" fill="white" />
          </svg>
        </div>
      </div>
      <div className=" container md:mx-auto max-w-contWidth ">
        <div className=" grid md:grid-cols-colPortfolio   md:gap-mainImg1   md:pt-[35px]  grid-cols-1  gap-y-8 pt-6 mx-[21px]">
          {imgArrayState.map((obj: any, index: number) =>
            index % 2 == 0 ? (
              <div className="max-w-[670px] md:mt-[-35px] mx-auto" key={index}>
                <img className="w-full" src={obj} alt="image2" />
              </div>
            ) : (
              <div className="max-w-[670px] mx-auto" key={index}>
                <img className="w-full" src={obj} alt="image2" />
              </div>
            )
          )}
        </div>
      </div>
      {show ? (
        <div onClick={() => toHide()} className="w-full flex justify-center">
          <button className=" hover:bg-white hover:text-black hover:border-black hover:rounded-md w-[225px] duration-100 h-[65px] text-white border-solid border-white border-[1px] text-center mt-[58px] mb-[125px] place-content-center">
            Hide works
          </button>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <button
            onClick={() => toShow()}
            className=" hover:bg-white hover:text-black hover:border-black hover:rounded-md w-[225px] duration-100 h-[65px] text-white border-solid border-white border-[1px] text-center mt-[58px] mb-[125px] place-content-center"
          >
            Load more
          </button>
        </div>
      )}

      <div className="container flex justify-start self-center mr-auto mt-[125px] mb-[54px] ">
        <div className=" mr-[20px]  my-auto   w-16 overflow-hidden ">
          <svg
            width="245"
            height="1"
            viewBox="0 0 245 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="245" height="1" fill="white" />
          </svg>
        </div>
        <div className="text-white text-sm md:text-[24px] md:leading-[1.8869rem]">
          About me
        </div>
      </div>
      <div className="w-full relative xl:h-[720px] overflow-hidden">
        <div className="flex">
          <div className="z-20 xl:pt-[102px] xl:pr-5 lg:pt-[89px] lg:pr-3 md:pt-[73px] md:pr-2 pt-[135px] pr-[6px] ">
            <div
              className="flex md:hidden 
            "
            >
              <svg
                width="22"
                height="28"
                viewBox="0 0 22 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="22" height="28" fill="#B91616" />
              </svg>
            </div>
            <div className="md:flex lg:hidden hidden">
              <svg
                width="122"
                height="35"
                viewBox="0 0 122 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="122" height="35" fill="#B91616" />
              </svg>
            </div>
            <div className="lg:flex hidden">
              <svg
                width="245"
                height="45"
                viewBox="0 0 245 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="245" height="45" fill="#B91616" />
              </svg>
            </div>
          </div>
          <span
            className="text-white font-Poppins align-middle    z-20
          xl:pt-[96px] xl:text-[80px] xl:w-[1150px]   pt-[127px]
          lg:pt-[77px] lg:text-[65px]
          md:text-[52px] md:w-auto md:pt-[55px] md:leading-[70px]  
          sm:w-[450]
          text-[40px] leading-[44.12px] h-[630px] w-[358px] 
          "
          >
            I, <span className="text-[#B91616]">Befa</span>, put mine artistic
            abstracts Works before. These art pictures show the whole spectrum
            of my inner joy, spiritual Mood, immeasurable Joy for life.
          </span>
          <div
            className="absolute 
          xl:w-[985px] xl:h-[720px]
          lg:w-[985px] lg:h-[720px] lg:translate-x-40
          md:opacity-80 md:w-[750] md:translate-x-40
          opacity-50 h-[630px] right-0
          "
          >
            <img className="md:block hidden" src="img/img-0.jpg" alt="" />
            <img className="md:hidden block" src="img/img-0-1.jpg" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

// fontSize: {
//         head1: ["18px", "21.6px"],
//         footer1: ["24px", "30.19px"],
//         footer2: ["18px", "22.64px"],
//         headBefa: ["24px", "28.8px"],
//       },

// {/* <div className="max-h-[720px]">
//   <div className="flex ">
//     <div className=" flex font-Poppins  text-white text-[40px] leading-[44.12px] xl:text-[80px] lg:text-[65px] md:text-[52px] md:leading-[88.24px]   md:mr-[10px]  mx-7 z-10">
//       <svg
//         width="245"
//         height="56"
//         viewBox="0 0 245 56"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect width="245" height="56" fill="#B91616" />
//       </svg>

//       {/* <div className=" mr-[20px] h-[30px] mt-[8px] w-[245px] xl:mt-[14px] xl:h-[60px] xl:w-[245px] lg:mt-[22px] lg:h-[45px] md:h-[40px] md:mt-[22px] bg-[#B91616] z-10"></div> */}
//       <span>
//         I, <span className="text-[#B91616]">Befa</span>, put mine artistic
//         abstracts Works before. These art pictures show the whole spectrum of my
//         inner joy, spiritual Mood, immeasurable Joy for life.
//       </span>
//     </div>
//   </div>

//   <div className=" pt-[96px] hidden ">
//     <div className="z-10 absolute top-[112px] overflow-hidden md:w-[12.7604166667%] w-[22px] h-[28px]  ">
//       {/* <div className=" mr-[20px] h-[56px] w-[245px] bg-[#B91616]"></div> */}
//       <svg
//         width="245"
//         height="56"
//         viewBox="0 0 245 56"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <rect width="245" height="56" fill="#B91616" />
//       </svg>
//     </div>

//     <div className="font-Poppins  text-white text-[40px] leading-[44.12px] xl:text-[80px] lg:text-[65px] md:text-[52px] md:leading-[88.24px]  md:ml-[13.8020833333%] md:mr-[10px] mx-7 z-10">
//       I, <span className="text-[#B91616]">Befa</span>, put mine artistic
//       abstracts Works before. These art pictures show the whole spectrum of my
//       inner joy, spiritual Mood, immeasurable Joy for life.
//     </div>
//     <div className="h-full">
//       <img className="h-full object-cover" src="img/img-0.jpg" alt="" />
//     </div>
//   </div>
//   {/* <div className="absolute right-0 top-0 z-0 max-[302px] h-[630px] md:h-[720px] md:w-[985px] ">
//           <img className="h-full object-cover" src="img/img-0.jpg" alt="" />
//         </div> */}
// </div>; */}
