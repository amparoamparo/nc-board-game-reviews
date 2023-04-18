import { NotFound } from "./Components/NotFound";
import { Header } from "./Components/Header";
import { Nav } from "./Components/Nav";
import { Home } from "./Components/Home";
import { AllReviews } from "./Components/AllReviews";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<AllReviews />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
