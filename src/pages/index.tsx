import { GiHoodie } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { PiSneaker } from "react-icons/pi";
import Section from "../components/Section";
import Slides from "../components/Slides";
import { products } from "../data/index";

const shirtProducts = products.filter((item) => item.category === "tshirt");

const hoodieProducts = products.filter((item) => item.category === "hoodie");
const sneakerProducts = products.filter((item) => item.category === "sneakers");

const HomePage = () => {
  return (
    <div className="container">
      <Slides />
      <div className="flex container flex-col">
        <Section
          image="/images/snekers.jpg"
          products={sneakerProducts}
          slicedProducts={sneakerProducts.slice(0,5)}
          title="Sneakers"
          subtitle="Step out in style with our collection of fashionable sneakers."
          icon={<PiSneaker />}
        />
      </div>
        <Section
          image="/images/tshirts.jpg"
          products={shirtProducts}
          title="T-shirts"
          subtitle="Discover the latest trends in comfortable and stylish T-Shirts."
          icon={<IoShirtOutline />}
          slicedProducts={shirtProducts.slice(0,5)}
          />

        <Section
          image="/images/hoodies.jpg"
          slicedProducts={hoodieProducts.slice(0,5)}
          products={hoodieProducts}
          title="Hoodies"
          subtitle="Explore cozy and trendy Hoodies for any occasion."
          icon={<GiHoodie />}
          />

    </div>
  );
};

export default HomePage;
