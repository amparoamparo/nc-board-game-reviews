import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from "./auth/AuthContext";

// pages
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Auth/Login";
import AllReviews from "./pages/Reviews/AllReviews";
import SingleReview, { singleReviewLoader } from "./pages/Reviews/SingleReview";
// import Categories from "./Components/Categories";
// import Login from "./Components/Login";
import { NotFound } from "./pages/NotFound/NotFound";
import { Logout } from "./pages/Auth/Logout";

// layouts
import RootLayout from "./layouts/RootLayout";
import ReviewsLayout from "./layouts/ReviewsLayout";
import LoginLayout from "./layouts/LoginLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="reviews" element={<ReviewsLayout />}>
        <Route index element={<AllReviews />} />
        <Route
          path=":review_id"
          element={<SingleReview />}
          loader={singleReviewLoader}
          errorElement={<NotFound />}
        />
      </Route>
      <Route path="login" element={<LoginLayout />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="logout" element={<Logout />} />
      {/* <Route path="categories" element={<Categories />} /> */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
