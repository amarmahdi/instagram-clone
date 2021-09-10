import React from "react";
import { Comments } from "./Comment";

export const CommentsSection = () => {
  return (
    <div className="grid justify-items-start  w-full relative">
      <div
        className="pt-1 block left-0 break-words w-full text-justify pr-4"
        style={{ fontSize: "14px", fontWeight: "600" }}
      >
        <span>
          <span> Amar mahdi </span>
        </span>
        <span
          className=" w-full"
          style={{ fontSize: "14px", fontWeight: "100" }}
        >
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, .....
          </span>
        </span>
        <br />
        <span
          className="pb-2"
          style={{ color: "rgba(var(--f52,142,142,142),1)", fontWeight: "100" }}
        >
          ... more <br />
          View all comments
        </span>{" "}
        <br />
        <span>
          <Comments
            name="Amel Mahdi"
            comment="Lorem Ipsum is simply dummy text."
          />
          <Comments
            name="Amen Mohammed"
            comment="Lorem Ipsum is simply dummy text."
          />
        </span>
        <span
          className="pb-2"
          style={{
            color: "rgba(var(--f52,142,142,142),1)",
            fontWeight: "100",
            fontSize: "11px",
          }}
        >
          1 DAY AGO
        </span>
      </div>
    </div>
  );
};
