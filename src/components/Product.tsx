import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { IProduct } from "../interfaces";
import { AddProduct } from "../redux/cart/cartSlice";
import { useAppDispatch } from "../redux/store";
import MyModal from "./Modal";

interface IPropsProduct {
  product: IProduct;
}

const Product: React.FC<IPropsProduct> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>(product.image);

  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = () => {
    dispatch(AddProduct(product));
  };

  return (
    <>
      <div
        className="flex relative group  items-center justify-between border-3  border-slate-200 rounded-[14px] hover:border-slate-400 duration-700  hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-400 "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card shadow="sm" isPressable className=" h-full w-full ">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="lg"
              radius="lg"
              width={"100%"}
              alt={product.title}
              className=" object-cover h-[220px] w-full  "
              src={image}
              onMouseOver={()=>setImage(product.subImages[2])}
              onMouseLeave={()=>setImage(product.image)}
            />
          </CardBody>
          <CardFooter className="text-small justify-between flex-col">
            <b>{product.title}</b>
            <p className="text-default-700 font-semibold">$ {product.price}</p>
          </CardFooter>
        </Card>
        <div
          className={`absolute z-20 w-10 flex flex-col  justify-between right-1 top-1 items-center space-y-1 my-2  ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="p-2 border-3 border-amber-500 rounded-md backdrop-blur-3xl cursor-pointer">
            <FiEye
              className="text-xl w-full text-white"
              onClick={handleOpenModal}
            />
          </span>
          <span className="p-2 border-3 border-amber-500 rounded-md backdrop-blur-3xl cursor-pointer">
            <AiOutlineShoppingCart
              className="text-xl w-full text-white "
              onClick={handleAddToCart}
            />
          </span>
        </div>
      </div>
      <MyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={product}
      />
    </>
  );
};

export default Product;
