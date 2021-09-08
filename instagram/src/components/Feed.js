import React from "react";

const protrait = (num) => {
  return num / 5;
};
const landscape = (num) => {
  return num / 2;
};

export const Feed = (prop) => {
  console.log(prop);
  return (
    <div
      className="flex relative top-36 flex-col left-0 pb-6"
      style={{ width: "64.5%" }}
    >
      <div
        className="flex justify-between p-4"
        style={{
          border: "1px solid rgba(var(--b6a,219,219,219),1)",
          // borderBottomWidth: "0.5px",
          width: "100%",
          height: "62px",
          borderTopLeftRadius: "3px",
          borderTopRightRadius: "3px",
        }}
      >
        <div className="flex">
          <div className="avatar" style={{ width: "30px", height: "30px" }}>
            <div className="rounded-full">
              <img
                src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
                alt="PP"
              />
            </div>
          </div>
          <div
            className="pl-4 flex-col pt-0"
            style={{ marginTop: "-10px", height: "50px" }}
          >
            <div>
              <span>amar</span>
            </div>
            <div>
              <span>amar</span>
            </div>
          </div>
        </div>
        <div className="mt-1">
          <svg
            aria-label="More options"
            class="_8-yf5 "
            fill="#262626"
            height="16"
            role="img"
            viewBox="0 0 48 48"
            width="16"
          >
            <circle
              clip-rule="evenodd"
              cx="8"
              cy="24"
              fill-rule="evenodd"
              r="4.5"
            ></circle>
            <circle
              clip-rule="evenodd"
              cx="24"
              cy="24"
              fill-rule="evenodd"
              r="4.5"
            ></circle>
            <circle
              clip-rule="evenodd"
              cx="40"
              cy="24"
              fill-rule="evenodd"
              r="4.5"
            ></circle>
          </svg>
        </div>
      </div>
      <div
        style={{
          border: "1px solid rgba(var(--b6a,219,219,219),1)",
          borderTop: "hidden",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderRightWidth: "1px",
          width: "100%",
          height: `${
            prop.height > prop.width
              ? protrait(prop.height)
              : landscape(prop.height)
          }px`,
          maxHeight: "800px",
          minHeight: "500px",
        }}
      >
        <img
          className="resize  h-full"
          src={prop.img}
          alt="img"
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        ></img>
      </div>
      <div
        style={{
          border: "1px solid rgba(var(--b6a,219,219,219),1)",
          // borderBottomWidth: "1px",
          // borderLeftWidth: "1px",
          // borderRightWidth: "1px",
          borderTop: "hidden",
          borderBottomLeftRadius: "3px",
          borderBottomRightRadius: "3px",
          width: "100%",
          height: "285px",
        }}
      ></div>
    </div>
    // <div
    //   style={{
    //     position: "absolute",
    //     paddingTop: "18px",
    //     height: `${
    //       prop.height > prop.width
    //         ? protrait(prop.height)
    //         : landscape(prop.height)
    //     }px`,
    //     marginBottom: "60px",
    //     border: "1px solid rgba(var(--b6a,219,219,219),1)",
    //     width: "64.5%",
    //   }}
    // >
    //   <div
    //     className="h-16 flex justify-between p-4 border-solid border-gray-300 w-full"
    //     style={{ borderBottomWidth: "1px" }}
    //   >
    //     <div className="avatar">
    //       <div className="rounded-full w-10 h-10">
    //         <img
    //           src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
    //           alt="PP"
    //         />
    //       </div>
    //     </div>
    //     <div className="">
    //       <p>amar</p>
    //     </div>
    //   </div>
    //   <div
    //     className=" flex justify-between border-solid absolute border-gray-300 w-full"
    //     style={{ borderBottomWidth: "1px", height: "100%" }}
    //   >
    //     {/* TODO height  */}
    //     <img
    //       className="resize  h-full"
    //       src={prop.img}
    //       alt="img"
    //       style={{
    //         width: "100%",
    //         objectFit: "cover",
    //       }}
    //     ></img>
    //   </div>
    //   <div className="h-5"></div>
    // </div>

    // <div
    //   className="pl-80 pr-80 w-full flex"
    //   style={{
    //     paddingTop: "18px",
    //     height: `calc(${prop.height}px/5)`,
    //     maxHeight: "80%",
    //   }}
    // >
    //   <div
    //     className="border-gray-300 flex"
    //     style={{
    //       width: "64.5%",
    //       marginBottom: "50px",
    //       borderRadius: "2.5px",
    //     }}
    //   >
    //     <div className="flex flex-col w-full h-full relative">
    //       <div
    //         className="h-16 flex justify-between p-4 border-solid border-gray-300 w-full"
    //         style={{ borderWidth: "1px" }}
    //       >
    //         <div className="avatar">
    //           <div className="rounded-full w-10 h-10">
    //             <img
    //               src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
    //               alt="PP"
    //             />
    //           </div>
    //         </div>
    //         <div className="">
    //           <p>amar</p>
    //         </div>
    //       </div>
    //       <div
    //         className="grid card bg-base-300 place-items-center absolute rounded-none mt-16"
    //         style={{ height: "100%" }}
    //       >
    //         <img
    //           className="resize  h-full w-full"
    //           src={prop.img}
    //           alt="img"
    //           style={{
    //             width: "100%",
    //             objectFit: "cover",
    //           }}
    //         ></img>
    //       </div>
    //       <div
    //         className="grid h-32 card border-solid  border-gray-300 bg-black z-50 w-full place-items-center rounded-none"
    //         style={{
    //           borderWidth: "1px",
    //           marginTop: `calc(${prop.height}px/6 + 10px)`,
    //         }}
    //       ></div>
    //     </div>
    //   </div>
    // </div>
  );
};
