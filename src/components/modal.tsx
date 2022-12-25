export const Modal: React.FC<any> = ({
  img,
  showModal,
  closeModal,
  setShowModal,
}) => {
  return (
    <div
      className={
        showModal
          ? "fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-full h-full  bg-black bg-opacity-50 z-50  transition-all ease-in-out scale-100"
          : " scale-75 transition-all ease-in-out hidden"
      }
    >
      <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] scale-150 flex ">
        <img
          className="rounded-lg"
          onClick={(e) => e.stopPropagation()}
          src={img}
          alt=""
        />
        {/* <div className="ml-3 mt-1">
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
        </div> */}
      </div>
    </div>
  );
};
