// import logo from "./logo.svg";
import { Header } from "./components/Header";
import { Story } from "./components/Story";
import { RightNav } from "./components/RightNav";
import { Feed } from "./components/Feed";
import post from "./post.jpg";
// import post1 from "./post1.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="h-screen">
        <Header />
        <RightNav />
        <Story />
        <Feed img={post} />
        {/* <Feed img={post} /> */}
        {/* <Feed img={post1} /> */}
      </div>
    </div>
  );
}

export default App;
