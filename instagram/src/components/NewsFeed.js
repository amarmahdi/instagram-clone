import React from "react";
import { Feed } from "./Feed";
import post from "./../post.jpg";
import post1 from "./../post1.jpg";
import post2 from "./../post2.jpg";

let imgs = [];
const imageSize = (prop) => {
  let img = new Image();
  const fullUrl = `http://${window.location.hostname}:3000${prop}`;
  img.src = fullUrl;
  imgs.push(img);
};
const heightIdentifier = (url, arr) => {
  imageSize(url);
  if (arr.indexOf(url) > -1) {
    return imgs[arr.indexOf(url)].height;
  } else {
    return null;
  }
};
const widthIdentifier = (url, arr) => {
  imageSize(url);
  if (arr.indexOf(url) > -1) {
    return imgs[arr.indexOf(url)].width;
  } else {
    return null;
  }
};

const NewsFeeds = () => {
  let a = imgs.map((e) => {
    return e.currentSrc.slice(21);
  });

  return (
    <div>
      <Feed
        img={post}
        height={heightIdentifier(post, a)}
        width={widthIdentifier(post, a)}
        id={1}
      />
      <Feed
        img={post1}
        height={heightIdentifier(post1, a)}
        width={widthIdentifier(post1, a)}
        id={2}
      />
      <Feed
        img={post2}
        height={heightIdentifier(post2, a)}
        width={widthIdentifier(post2, a)}
        id={3}
      />
    </div>
  );
};

export default NewsFeeds;
