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
import PageLayout from "./layouts/PageLayout";
import Categories from "./pages/Categories/Categories";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="reviews" element={<PageLayout />}>
        <Route index element={<AllReviews />} />
        <Route
          path=":review_id"
          element={<SingleReview />}
          loader={singleReviewLoader}
          errorElement={<NotFound />}
        />
      </Route>
      <Route path="login" element={<PageLayout />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="logout" element={<Logout />} />
      <Route path="categories" element={<PageLayout />}>
        <Route index element={<Categories />} />
        {/* <Route
          path="?category=:category"
          element={<ReviewsByCategory />}
          loader={reviewByCategoryLoader}
          errorElement={<NotFound />}
        /> */}
      </Route>
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
