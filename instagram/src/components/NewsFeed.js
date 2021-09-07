import React from "react";
import { Feed } from "./Feed";
import post from "./../post.jpg";
import post1 from "./../post1.jpg";

// imageSize(post);
// let imgs = [];
// const imageSize = (prop) => {
//   for (let key in prop) {
//     if (key !== "img") {
//     } else {
//       let img = new Image();
//       const fullUrl = `http://${window.location.hostname}:3000${prop[key]}`;
//       img.src = fullUrl;
//       imgs.push(img);
//     }
//   }
// };

console.log("hello there");

const NewsFeeds = () => {
  return (
    <div>
      <Feed img={post} id={1} />
      {/* <Feed img={post} /> */}
      <Feed img={post1} id={2} />
    </div>
  );
};

export default NewsFeeds;
