import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../pages";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import RootLayout from "../pages/Layout";
import CartPage from "../pages/CartPage";
import AllProducts from "../pages/AllProducts";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="allProducts" element={<AllProducts />} />
      </Route>
      ,
    </>
  )
);

export default router;
