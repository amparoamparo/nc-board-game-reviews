import { Header } from "./Components/Header";
import { Nav } from "./Components/Nav";
import { Home } from "./Components/Home";
import { AllReviews } from "./Components/AllReviews";
import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [reviews, setReviews] = useState([]);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home reviews={reviews} setReviews={setReviews} />}
        />
        <Route
          path="/reviews"
          element={<AllReviews reviews={reviews} setReviews={setReviews} />}
        />
      </Routes>
    </div>
  );
}

export default App;
