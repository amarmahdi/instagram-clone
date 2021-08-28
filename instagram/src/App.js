// import logo from "./logo.svg";
import { Header } from "./components/Header";
import { Story } from "./components/Story";
import { RightNav } from "./components/RightNav";
import post from "./post.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="h-screen">
        <Header />
        <RightNav />
        <Story />
        <div
          class="pl-80 pr-80 w-full flex relative"
          style={{ paddingTop: "18px" }}
        >
          <div
            class="border-gray-300 border-solid relative"
            style={{
              borderWidth: "1px",
              width: "64.5%",
              height: "600px",
              marginBottom: "50px",
            }}
          >
            <div
              class="border-gray-300 border-solid absolute w-full"
              style={{
                borderBottomWidth: "1px",
                height: "62px",
              }}
            ></div>
            <div
              class="absolute w-full h-full"
              style={{
                paddingTop: "62px",
              }}
            >
              <img
                src={post}
                alt="img"
                style={{
                  height: "400px",
                  objectFit: "cover",
                  width: "100%",
                }}
              ></img>
            </div>
            <div
              class="border-gray-300 border-solid absolute w-full bottom-6"
              style={{
                borderBottomWidth: "1px",
                height: "100px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
