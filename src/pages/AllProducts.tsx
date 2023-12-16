import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { useSelector } from "react-redux";
import Heading from "../components/Heading";
import ProductCards from "../components/ProductCards";
import { RootState } from "../redux/store";
import image1 from "/images/storepic1.jpg"

const AllProducts = () => {
  const { products, pageInfo } = useSelector(
    (state: RootState) => state.product
  );
 
  const backgroundImageStyle = {
    backgroundImage: `url(${pageInfo.image})`,
    backgroundSize: "cover", // or 'contain' depending on your preference
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center", // or any other position you prefer
  };
  const backgroundImageStyle2 = {
    backgroundImage: `url(${image1})`,
    backgroundSize: "cover", // or 'contain' depending on your preference
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center", // or any other position you prefer
  };

  return (
    <div className="w-full bg-slate-200 mt-10 p-5 rounded-lg border-3">
      <div>
        {pageInfo.icon === null ? (
          <div className=" py-20 mb-3 rounded-lg" style={backgroundImageStyle2}>
            <div className="backdrop-blur-lg w-fit rounded-r-xl border-3 pr-7">
              <Heading
                icon={<HiOutlineBuildingStorefront />}
                title="all products"
                subtitle="check all product of all categories"
              />
            </div>
          </div>
        ) : (
          <div className=" py-20 mb-3 rounded-lg" style={backgroundImageStyle}>
            <div className="backdrop-blur-lg w-fit rounded-r-xl border-3 pr-7">
              <Heading
                icon={pageInfo.icon}
                title={pageInfo.title}
                subtitle={pageInfo.subtitle}
              />
            </div>
          </div>
        )}
        <ProductCards products={products} />
      </div>
    </div>
  );
};

export default AllProducts;
