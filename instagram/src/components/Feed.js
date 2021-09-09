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
            style={{
              color: "rgba(var(--f75,38,38,38),1)",
              marginTop: "1px",
            }}
          >
            <div className="font-bold">
              <span>amar mahdi</span>
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
          borderTop: "hidden",
          borderBottomLeftRadius: "3px",
          borderBottomRightRadius: "3px",
          width: "100%",
          height: "285px",
        }}
      >
        <div
          className="flex justify-between pl-4 pr-4 mt-1"
          style={{
            height: "40px",
            border: "1px solid rgba(var(--b6a,219,219,219),1)",
            borderTop: "hidden",
            borderLeft: "hidden",
            borderRight: "hidden",
            borderBottom: "hidden",
          }}
        >
          <div className="flex">
            <div className="w-10 pt-1 justify-center">
              <svg
                aria-label="Like"
                class="_8-yf5 "
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
            </div>
            <div className="w-10 pt-1">
              <svg
                aria-label="Comment"
                class="_8-yf5 "
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path
                  clip-rule="evenodd"
                  d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="w-10 pt-1">
              <svg
                aria-label="Share Post"
                class="_8-yf5 "
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
              </svg>
            </div>
          </div>
          <div>
            <div className="w-10 pt-1">
              <svg
                aria-label="Save"
                class="_8-yf5 "
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
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
