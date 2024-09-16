import React from "react";
import Image_box from "../../Image_box/Image_box";

const Middle = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-around items-center my-2">
        <div className=" p-5 flex justify-start items-center bg-white w-2/5 rounded-md gap-5">
          <div>
            <img
              class="image-card-img image-mode-scaleToFill "
              src="https://img.drz.lazcdn.com/g/tps/tfs/TB1fY1VF.z1gK0jSZLeXXb9kVXa-96-96.png_2200x2200q75.png_.webp"
              alt="img"
            ></img>
          </div>
          <div>
            <h1 className="font-semibold">Jik34NH</h1>
          </div>
        </div>
        <div className="bg-white px-5 py-2 flex flex-col justify-start items-center  w-2/5 rounded-md gap-5">
          <div className="flex justify-between items-center w-full">
            <h1 className="font-semibold">Important Notification</h1>
            <h1 className="font-medium text-blue-400">MORE &gt;</h1>
          </div>

          <div className=" flex justify-center items-center gap-5">
            <div className="h-20 w-20">
              <img
                class="image-card-img image-mode-scaleToFill "
                src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01Ea6ZuS1WFfS0vMEQg_!!6000000002759-55-tps-118-118.svg"
                alt="img"
                className="w-full h-ful object-fill rounded-full"
              ></img>
            </div>
            <div>
              <p>You are updated! No new important notification for you.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className=" rounded-xl mx-8 bg-gradient-to-b from-orange-600 to-white h-full my-2">
            <div>
              <h1 className="font-bold mx-10 pt-10 pb-5 text-2xl text-white">To Do</h1>
            </div>
            <div className="flex justify-evenly items-center text-white">
              <div className="border border-white rounded-full w-12 h-12 flex justify-center items-center font-semibold">
                E
              </div>
              <div className="border border-white rounded-full w-12 h-12 flex justify-center items-center font-semibold ">
                1
              </div>
              <div className="border border-white rounded-full w-12 h-12 flex justify-center items-center font-semibold bg-white text-orange-600">
                2
              </div>
              <div className="border border-white rounded-full w-12 h-12 flex justify-center items-center font-semibold">
                3
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3 items-center bg-white m-10 p-10 rounded-lg">
              <div>
                <img
                  class="image-card-img image-mode-scaleToFill "
                  src="https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01PfGr5N28R4jX036WL_!!6000000007928-55-tps-184-184.svg"
                  alt="img"
                  data-spm-anchor-id="Seller_PK.17752401.todo_list_new_card_ab.i0.2b7b4edfWDtwbR"
                ></img>
              </div>
              <div>
                <h1 className="font-bold text-xl">Add a pick-up address</h1>
              </div>
              <div>
                {" "}
                <p className="text-sm">no-video</p>
              </div>
              <div  className="w-1/4">
                <button className="text-white bg-orange-500 w-full py-1 rounded-xl font-semibold">Add</button>
              </div>
              <div>
                <p>Adding one will be used for fulfillment of your orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div >
        <div className="mx-8 my-2 bg-white rounded-xl px-4 py-6">
          <h1 className="font-bold text-2xl">DARAZ UNIVERSITY</h1>
          <div  className="grid grid-cols-4">
            <div>
              <Image_box
                image="data:image/jpeg;base64,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"
                text="Daraz MArketing Solution"
                views="20000"
              />
            </div>
            <div>
              <Image_box
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygrCxSgGzuR0ePE_6iT_AqtMBBRQHeDlhtw&s"
                text="Creating an Outbound order"
                views="30000"
              />
            </div>
            <div>
              <Image_box
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRSvuCwt8BkPGO1xxVh9IurQRhg2OUojAmjg&s"
                text="Creating an Inbound order"
                views="1000"
              />
            </div>
            <div>
              <Image_box
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MUog-3LNJ4Odox0LscDVjDiIEjyV69DTVQ&s"
                text="Daraz Image Guidline"
                views="195"
              />
            </div>
          </div>
        </div>
      </div>

        <div className="m-8">
            <h1 className="p-5 text-sm">Daraz 2024. All rights reserved.</h1>
        </div>

    </div>
  );
};

export default Middle;
