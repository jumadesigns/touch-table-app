import "./App.css";
import CarouselCard from "./CarouselCard";

function App() {
  return (
    <div className="carousel-div">
      <h2 style={{ color: "#fcc200", padding: "10px", fontSize: "32px" }}>
        Solutions built around you
      </h2>
      <CarouselCard />
    </div>
  );
}

export default App;
