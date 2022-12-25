import { useState, useRef, useEffect } from "react";
import { Iarray } from "../types/types";
import { Modal } from "./modal";

type PopupClick = React.MouseEvent<HTMLBodyElement> & { path: Node[] };

const Item: React.FC<Iarray> = (
  { name, img, title, subtitle }: Iarray,
  index
) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const [infoButton, setInfoButton] = useState(false);

  const toggleInfo = () => {
    setInfoButton(!infoButton);
  };

  const [isHovering, setIsHovering] = useState(false);

  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const _event = event as MouseEvent & PopupClick;
      if (sortRef.current && !_event.composedPath().includes(sortRef.current)) {
        setShowModal(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div
        ref={sortRef}
        className={`max-w-[670px]  ${
          index % 2 == 0 ? "md:mt-[-35px]" : ""
        } mx-auto relative text-white `}
        key={index}
        onClick={openModal}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          setInfoButton(false);
        }}
      >
        <img className="w-full" src={img} alt="image2" />
        <div
          className={`absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-full h-full 
          ${infoButton && `bg-opacity-50 bg-black`} 
          ${isHovering && "bg-opacity-50 bg-black"}
          `}
        >
          <span
            className={`absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  md:text-4xl text-2xl BlackHanSans  font-bold bg-opacity-50
            ${isHovering ? "" : "hidden"}`}
          >
            {!infoButton && name}
          </span>

          <div className="z-20" onClick={(e) => e.stopPropagation()}>
            {isHovering && (
              <button
                className="absolute w-[26px] h-[35px] top-[25px] right-[25px]"
                onClick={toggleInfo}
              >
                {infoButton ? (
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="2.28224"
                      height="27.3869"
                      rx="1.14112"
                      transform="matrix(0.707381 -0.706833 0.707381 0.706833 0 1.64032)"
                      fill="white"
                    />
                    <rect
                      width="2.28224"
                      height="27.3869"
                      rx="1.14112"
                      transform="matrix(-0.707782 -0.706431 -0.707782 0.706431 21 1.61224)"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1429 21.3214V18.6429C17.1429 18.4866 17.0926 18.3583 16.9922 18.2578C16.8917 18.1574 16.7634 18.1071 16.6071 18.1071H15V9.53571C15 9.37946 14.9498 9.25112 14.8493 9.15067C14.7489 9.05022 14.6205 9 14.4643 9H9.10714C8.95089 9 8.82254 9.05022 8.7221 9.15067C8.62165 9.25112 8.57143 9.37946 8.57143 9.53571V12.2143C8.57143 12.3705 8.62165 12.4989 8.7221 12.5993C8.82254 12.6998 8.95089 12.75 9.10714 12.75H10.7143V18.1071H9.10714C8.95089 18.1071 8.82254 18.1574 8.7221 18.2578C8.62165 18.3583 8.57143 18.4866 8.57143 18.6429V21.3214C8.57143 21.4777 8.62165 21.606 8.7221 21.7065C8.82254 21.8069 8.95089 21.8571 9.10714 21.8571H16.6071C16.7634 21.8571 16.8917 21.8069 16.9922 21.7065C17.0926 21.606 17.1429 21.4777 17.1429 21.3214ZM15 6.32143V3.64286C15 3.48661 14.9498 3.35826 14.8493 3.25781C14.7489 3.15736 14.6205 3.10714 14.4643 3.10714H11.25C11.0938 3.10714 10.9654 3.15736 10.865 3.25781C10.7645 3.35826 10.7143 3.48661 10.7143 3.64286V6.32143C10.7143 6.47768 10.7645 6.60603 10.865 6.70647C10.9654 6.80692 11.0938 6.85714 11.25 6.85714H14.4643C14.6205 6.85714 14.7489 6.80692 14.8493 6.70647C14.9498 6.60603 15 6.47768 15 6.32143ZM23.99 6.8404C25.1395 8.80469 25.7143 10.9531 25.7143 13.2857C25.7143 15.6183 25.1395 17.7723 23.99 19.7478C22.8404 21.7121 21.2779 23.269 19.3025 24.4185C17.3382 25.5681 15.1897 26.1429 12.8571 26.1429C10.5246 26.1429 8.37054 25.5681 6.39509 24.4185C4.4308 23.269 2.87388 21.7121 1.72433 19.7478C0.574777 17.7723 0 15.6183 0 13.2857C0 10.9531 0.574777 8.80469 1.72433 6.8404C2.87388 4.86495 4.4308 3.30245 6.39509 2.1529C8.37054 1.00335 10.5246 0.42857 12.8571 0.42857C15.1897 0.42857 17.3382 1.00335 19.3025 2.1529C21.2779 3.30245 22.8404 4.86495 23.99 6.8404Z"
                      fill="white"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
        {infoButton && (
          <div className="absolute top-0 left-0 w-[90%] h-full sm:text-xl md:text-lg text-xl lg:text-xl z-0 overflow-hidden">
            <span className="absolute top-[10%] left-[10%] text-white text-opacity-80">
              {title}
            </span>
            <span className="absolute top-[30%] left-[10%] w-[85%] md:text-base lg:text-xl  ">
              {subtitle}
            </span>
          </div>
        )}
      </div>
      <Modal
        key={index + 1}
        img={img}
        showModal={showModal}
        closeModal={closeModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default Item;
