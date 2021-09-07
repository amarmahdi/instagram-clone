import React from "react";

// let a = imgs.map((e) => {
//   return e.currentSrc.slice(21);
// });
// const heightIdentifier = (url) => {
//   if (a.indexOf(url) > -1) {
//     return imgs[a.indexOf(url)].height;
//   } else {
//     return null;
//   }
// };
export const Feed = (prop) => {
  return (
    <div
      className="pl-80 pr-80 w-full flex"
      style={{ paddingTop: "18px", height: "100%", maxHeight: "80%" }}
    >
      <div
        className="border-gray-300 flex"
        style={{
          //   borderWidth: "1px",
          width: "64.5%",
          marginBottom: "50px",
          height: "100%",
          borderRadius: "2.5px",
        }}
      >
        <div className="flex flex-col w-full h-full relative">
          <div
            className="h-16 flex justify-between p-4 border-solid border-gray-300 w-full"
            style={{ borderWidth: "1px" }}
          >
            <div className="avatar">
              <div className="rounded-full w-10 h-10">
                <img
                  src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
                  alt="PP"
                />
              </div>
            </div>
            <div className="">
              <p>amar</p>
            </div>
          </div>
          <div
            className="grid card bg-base-300 place-items-center absolute rounded-none mt-16"
            style={{ height: "100%" }}
          >
            <img
              className="resize  h-full w-full"
              src={prop.img}
              alt="img"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            ></img>
          </div>
          <div
            className="grid h-80 card border-solid border-gray-300 bg-white bottom-0 w-full place-items-center rounded-none"
            style={{ borderWidth: "1px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
