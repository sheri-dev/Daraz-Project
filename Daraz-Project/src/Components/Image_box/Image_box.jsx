import React from "react";

const Image_box = (props) => {
  return (
    <>
      <div>
        <div className="p-3 sm:p-0 flex flex-col justify-center items-center md:items-start">
          <div className="h-20 w-28 md:h-32 md:w-52 lg:h-32 lg:w-52 mx-auto">
            <img
              src={props.image}
              alt=""
              className="w-full h-full object-fill rounded-xl "
            />
          </div>
          <div>
            <h1 className="font-bold text-sm md:text-lg">{props.text}</h1>
          </div>
          <div>
            <h1 className="font-light text-sm pl-3">{props.views}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image_box;
