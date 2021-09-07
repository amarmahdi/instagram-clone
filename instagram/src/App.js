// import logo from "./logo.svg";
import { Header } from "./components/Header";
import { Story } from "./components/Story";
import { RightNav } from "./components/RightNav";
import { Feed } from "./components/Feed";
import "./App.css";
// import NewsFeed from "./components/NewsFeed";
import post from "./post.jpg";
import post1 from "./post1.jpg";

// const imageSize = (imgUrl) =>
//   new Promise((resolve, reject) => {
//     let img = new Image();
//     img.src = imgUrl;
//     let size = img.height;
//     imgUrl ? resolve(size) : reject(null);
//   });

// const a = (imgUrl) => {
//   let img = new Image();
//   img.src = imgUrl;
//   let size = img.height;
//   return size;
// };

const App = () => {
  return (
    <div className="App">
      <div className="h-screen">
        <Header />
        <RightNav />
        <Story />
        <Feed img={post} id={1} />
        {/* <Feed img={post} /> */}
        <Feed img={post1} id={2} />
      </div>
    </div>
  );
};

export default App;
