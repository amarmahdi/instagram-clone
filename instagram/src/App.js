// import logo from "./logo.svg";
import { Header } from "./components/Header";
import { Story } from "./components/Story";
import { RightNav } from "./components/RightNav";
import NewsFeed from "./components/NewsFeed";
import "./App.css";
// import NewsFeed from "./components/NewsFeed";

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
      <div className="h-screen w-full">
        <Header />
        <div
          className="container justify-center relative top-24"
          style={{
            maxWidth: "59%",
            margin: "auto",
          }}
        >
          <RightNav />
          <Story />
          <NewsFeed />
        </div>
      </div>
    </div>
  );
};

export default App;
