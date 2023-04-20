<<<<<<< HEAD
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import { Home } from "./pages/Home/Home";
import AllReviews from "./pages/Reviews/AllReviews";
// import SingleReview, { singleReviewLoader } from "./pages/Reviews/SingleReview";
// import Categories from "./Components/Categories";
// import Login from "./Components/Login";
import { NotFound } from "./pages/NotFound/NotFound";

// layouts
import RootLayout from "./layouts/RootLayout";
import ReviewsLayout from "./layouts/ReviewsLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="reviews" element={<ReviewsLayout />}>
        <Route index element={<AllReviews />} />
        {/* <Route
          path=":review_id"
          element={<SingleReview />}
          loader={singleReviewLoader}
          errorElement={<NotFound />}
        /> */}
      </Route>
      {/* <Route path="categories" element={<Categories />} />
      <Route path="login" element={<Login />} /> */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
=======
// import { NotFound } from "./Components/NotFound";
import { Header } from "./Components/Header";
import { Nav } from "./Components/Nav";
import { Home } from "./Components/Home";
import { AllReviews } from "./Components/AllReviews";
import "./App.css";
import { Route, Routes } from "react-router-dom";
>>>>>>> 3c7014215806791f594b5b908f65762d28ccc700

function App() {
  return <RouterProvider router={router} />;
}

export default App;
