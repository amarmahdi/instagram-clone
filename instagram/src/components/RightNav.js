import React from "react";
import { Suggestions } from "./SubComponents/Suggestions";

export const RightNav = () => {
  return (
    <div className="grid justify-items-end relative" style={{ width: "100%" }}>
      <div
        className="flex justify-between border-gray-300 fixed border-solid h-screen pb-10"
        style={{
          // borderWidth: "1px",
          width: "19%",
          top: "88px",
        }}
      >
        <div
          className="flex justify-between absolute"
          style={{ marginTop: "18px", height: "57px", width: "100%" }}
        >
          <div className="flex">
            <div className="avatar" style={{}}>
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
              display: "flex",
              alignItems: "center",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            Switch
          </div>
        </div>
        <div className="flex justify-between absolute top-24 w-full">
          <div
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "rgba(var(--f52,142,142,142),1)",
              marginTop: "1px",
            }}
          >
            Suggestions For You
          </div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            See All
          </div>
        </div>
        <div className="flex flex-col absolute w-full">
          <Suggestions />
          <Suggestions />
          <Suggestions />
        </div>
      </div>
    </div>
  );
};
