import { Header } from "./Components/Header";
import { Nav } from "./Components/Nav";
import { Home } from "./Components/Home";
import { AllReviews } from "./Components/AllReviews";
import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              reviews={reviews}
              setReviews={setReviews}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/reviews"
          element={
            <AllReviews
              reviews={reviews}
              setReviews={setReviews}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
