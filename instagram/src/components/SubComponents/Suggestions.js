import React from "react";

export const Suggestions = () => {
  return (
    <div
      className="relative w-full flex justify-between"
      style={{
        top: "124px",
        height: "50px",
      }}
    >
      <div className="flex absolute justify-between w-full pb-4">
        <div className="flex">
          <div className="avatar" style={{ height: "40px", width: "40px" }}>
            <div className="rounded-full">
              <img
                src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
                alt="PP"
              />
            </div>
          </div>
          <div
            className="flex justify-center flex-col pl-4  pt-0"
            style={{
              fontSize: "13px",
              color: "rgba(var(--f75,38,38,38),1)",
              marginTop: "1px",
            }}
          >
            <div className="font-bold">
              <span>amar mahdi</span>
            </div>
            <div className="self-start">
              <span>Something</span>
            </div>
          </div>
        </div>
        <div
          className="h-full"
          style={{
            alignItems: "center",
            alignSelf: "center",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          Follow
        </div>
      </div>
    </div>
  );
};
