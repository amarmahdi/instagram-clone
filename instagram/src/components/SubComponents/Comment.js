import React from "react";

export const Comments = (prop) => {
  return (
    <div>
      <span>
        <span> {prop.name} </span>
      </span>
      <span
        className=" w-full pb-2"
        style={{ fontSize: "14px", fontWeight: "100" }}
      >
        <span>{prop.comment}</span>
      </span>
    </div>
  );
};
