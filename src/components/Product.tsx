import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React, { useState } from "react";
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
              onMouseOver={() => setImage(product.subImages[2])}
              onMouseLeave={() => setImage(product.image)}
            />
          </CardBody>
          <CardFooter className="text-small justify-between flex-col">
            <b>{product.title}</b>
            <p className="text-default-700 font-semibold">$ {product.price}</p>
            <div className="w-full  space-y-2">
              <button
                className="bg-orange-200 w-full py-2 rounded-md font-semibold capitalize border-2 border-transparent hover:bg-transparent hover:border-orange-200 duration-700"
                onClick={handleAddToCart}
              >
                add to cart
              </button>
              <button
                className="bg-green-300 w-full py-2 rounded-md font-semibold capitalize border-2 border-transparent hover:bg-transparent hover:border-green-300 duration-700"
                onClick={handleOpenModal}
              >
                view product
              </button>
            </div>
          </CardFooter>
        </Card>
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
