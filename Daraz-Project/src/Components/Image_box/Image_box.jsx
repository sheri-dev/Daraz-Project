import React from "react";

const Image_box = (props) => {
  return (
    <>
      <div >
        <div className="p-3">
          <div className="h-32 w-52">
            <img
              src={props.image}
              alt=""
              className="w-full h-full object-fill rounded-xl"
            />
          </div>
          <div>
            <h1 className="font-semibold text-lg">{props.text}</h1>
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
