import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IProduct } from "../interfaces";
import { AddProduct, clearCart, removeProduct ,deleteProduct} from "../redux/cart/cartSlice";
import { RootState, useAppDispatch } from "../redux/store";

import Button from "./Button";
interface IPropsCartModal {
  isOpen: boolean | undefined;
  onClose: () => void;
}
const CartModal: React.FC<IPropsCartModal> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();

  const { cartItems } = useSelector((state: RootState) => state.cart);
  const handleAddToCart = (product: IProduct) => {
    dispatch(AddProduct(product));
  };
  const handleRemoveItem = (id: string) => {
    dispatch(removeProduct(id));
  };
  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };
  const handleClear = () => {
    dispatch(clearCart());
  };
 
  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
        classNames={{
          body: "p-2",
          backdrop: " backdrop-blur",
          base: "border-[#292f46] bg-slate-100 ",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row justify-between mx-5 items-center capitalize ">
                <h3 className=""> shopping card</h3>
                <Button
                  onClick={() => handleClear()}
                  className="bg-orange-400 py-2 px-3 rounded-lg flex items-center justify-between border-2 border-transparent duration-500 hover:border-orange-400 hover:bg-transparent"
                >
                  clear cart <FaRegTrashCan className="ml-2" />
                </Button>
              </ModalHeader>
              <ModalBody>
                {cartItems.length ? (
                  cartItems.map((item) => (
                    <div key={item.id} className="">
                      <div className=" relative items-center justify-between border-b-4 p-2 grid grid-cols-4 ">
                        <div className="flex  justify-start items-center space-y-1 md:space-y-0 md:space-x-5 flex-col md:flex-row ">
                          <img
                            src={item.image}
                            alt=""
                            className="w-[65px] h-[65px]  rounded-full border-3 border-slate-400 p-1 object-center "
                          />
                          <span className="text-center">{item.title}</span>
                        </div>
                        <div className="flex justify-between items-center space-x-1 ">
                          <span
                            className="bg-slate-300 p-1 border-2 rounded-full h-6 w-6  flex items-center justify-center cursor-pointer"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            -
                          </span>
                          <p>{item.qty}</p>
                          <span
                            className="bg-slate-300 p-1 border-2 rounded-full h-6 w-6  flex items-center justify-center cursor-pointer"
                            onClick={() => handleAddToCart(item)}
                          >
                            +
                          </span>
                        </div>
                        <span className="text-center">
                          $ {item.price} / item
                        </span>
                        {item.qty !== undefined && (
                          <span className="text-center">
                            $ {(item.price * item.qty).toFixed(2)}
                          </span>
                        )}
                        <span className="  absolute top-0 right-5 flex items-center justify-center" onClick={()=>handleDelete(item.id)}>
                          <MdDeleteForever  className="text-2xl text-slate-500 hover:text-orange-500 cursor-pointer duration-700"/>
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="space-y-2">
                    <h3 className="border-3 capitalize text-center w-3/4 mx-auto text-xl p-2 rounded-md border-slate-700 font-semibold">
                      your card is empty{" "}
                    </h3>
                    <button onClick={onClose} className="w-full ">
                      <Link
                        to="/"
                        className="bg-[#9781ee] w-2/4 mx-auto flex shadow-lg shadow-indigo-500/20 font-semibold capitalize tracking-wider rounded-md  p-2 justify-center"
                      >
                        back home and explore our products{" "}
                      </Link>
                    </button>
                  </div>
                )}
              </ModalBody>
              <ModalFooter className="">
                <button
                  color="default"
                  onClick={onClose}
                  className="border-3 font-semibold w-full p-2 rounded-lg border-slate-600 text-xl capitalize tracking-wider hover:border-transparent duration-700 hover:text-white hover:bg-slate-800"
                >
                  Close
                </button>
                <Link
                  onClick={onClose}
                  to="/cart"
                  className="bg-[#6f4ef2] w-full shadow-lg rounded-md p-2 shadow-indigo-500/20 font-semibold capitalize tracking-wider text-center flex items-center justify-center border-3 border-transparent duration-700 hover:border-[#6f4ef2] hover:bg-transparent "
                >
                  <button className="text-xl capitalize tracking-wider">
                    check out
                  </button>
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default CartModal;
