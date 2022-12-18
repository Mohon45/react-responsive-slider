import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image from "./images/download.png";

function App() {
  return (
    <div className="App">
      {/* npm i react-responsive-carousel */}
      <Carousel
        className="react-carosal-cus"
        autoPlay={true}
        stopOnHover={false}
        infiniteLoop={true}
        showThumbs={false}
        transitionTime={1000}
        // width="500px"
      >
        <div>
          <img src={image} />
          <h1 className="legend">Hello World</h1>
        </div>
        <div>
          <img src={image} />
          <h1 className="legend">Hello World</h1>
        </div>
        <div>
          <img src={image} />
          <h1 className="legend">Hello World</h1>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
