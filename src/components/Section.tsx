import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IProduct , IPageInfo } from "../interfaces";
import Button from "./Button";
import Heading from "./Heading";
import ProductCards from "./ProductCards";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { setPageInfo, setProduct } from "../redux/products/productSlice";

interface IPropsSection {
  products: IProduct[];
  title: string;
  subtitle: string;
  icon: ReactNode;
  slicedProducts: IProduct[]
  image:string
}
const Section: React.FC<IPropsSection> = ({
  products,
  title,
  subtitle,
  icon,
  slicedProducts,
  image
}) => {
  const dispatch = useAppDispatch();
  const pageInfo = {
  title , subtitle , icon , image
  }
  const serializablePageInfo = {
    title: pageInfo.title,
    subtitle: pageInfo.subtitle,
    image: pageInfo.image,
  };

  const handleDispatch = (products:IProduct[]) => {
    dispatch(setProduct(products))
    dispatch(setPageInfo(serializablePageInfo as IPageInfo))
  }
  return (
    <div className="my-8 container border-t-3 pt-5">
      <div className="flex   items-center  flex-col justify-center md:flex-row">
          <Heading title={title} subtitle={subtitle} icon={icon} />
        <div className="mr-5 w-[180px] flex justify-between items-center border-b-3 border-slate-400 p-2  mb-3 mx-auto  rounded-sm font-semibold">
          <Button onClick={()=>handleDispatch(products)}>
            <Link to="/allProducts">view all products</Link>
          </Button>
          <FaArrowRight className="font-bold text-2xl hover:animate-bounce cursor-pointer" />
        </div>
      </div>
      <div className="ml-5">
        <ProductCards products={slicedProducts} />
      </div>
    </div>
  );
};

export default Section;
