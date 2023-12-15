import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { IProduct } from "../interfaces";
import {
  AddProduct,
  clearCart,
  removeProduct,
  selectTotalPrice,
  deleteProduct
} from "../redux/cart/cartSlice";
import { RootState, useAppDispatch } from "../redux/store";
const CartPage = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const handleCouponChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(event.target.value);
  };

  const isCouponCodeEmpty = couponCode.trim() === "";
  const dispatch = useAppDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const handleAddToCart = (product: IProduct) => {
    dispatch(AddProduct(product));
  };
  const handleClear = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = (id: string) => {
    dispatch(removeProduct(id));
  };
  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };
  return (
    <div className="w-full py-3 mt-5 lg:w-10/12 mx-auto lg:grid lg:grid-cols-6 aboutPage">
      <div className=" col-span-4 mb-2 ">
        <div className="border-b-3 flex items-center">
          <h3 className="capitalize font-semibold  text-xl  w-3/4  p-2 mb-3 border-3 border-transparent">
            shopping cart
          </h3>
          <Button
            className="capitalize font-semibold  text-xl  w-1/4  p-2 mb-3 border-3 rounded-lg hover:bg-orange-400 duration-700 hover:border-slate-600"
            onClick={() => handleClear()}
          >
            Clear cart
          </Button>
        </div>
        {cartItems.length ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="md:px-[2%] mt-2  items-center border-b-3 py-2 flex justify-between space-x-2  px-2 "
            >
              <div className="rounded-full overflow-hidden w-[100px] h-[100px] border-3 border-slate-700 p-[3px] ">
                <img
                  src={item.image}
                  alt=""
                  className="object-cover w-full h-full rounded-full"
                />
              </div>

              <div className=" flex flex-col justify-center items-center md:flex-row flex-1  md:justify-between ">
                <h3 className="font-semibold ">{item.title}</h3>
                <div className="flex  justify-between items-center text-xl h-[60px] space-x-2 ">
                  <button
                    className="border-3 flex justify-center items-center p-2 rounded-full w-6 h-6 hover:border-slate-500 hover:bg-lime-100"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    className="border-3 flex justify-center items-center p-2 rounded-full w-6 h-6 hover:border-slate-500 hover:bg-lime-100"
                    onClick={() => handleAddToCart(item)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className=" flex flex-col justify-start items-start md:flex-row md:justify-around md:items-center flex-1 ">
                <span className="font-semibold ">$ {item.price} /item</span>
                {item.qty && (
                  <span className="font-semibold ">
                    $ {(item.price * item.qty).toFixed(2)}
                  </span>
                )}
              </div>
              <Button
                onClick={() => handleDelete(item.id)}
                className="bg-slate-200 p-2 rounded font-semibold border-3 border-transparent hover:border-slate-700 flex-1"
              >
                Remove item
              </Button>
            </div>
          ))
        ) : (
          <h3 className="capitalize font-semibold text-center text-xl border-3 w-1/2 mx-auto p-3 mt-10">
            No item added to your cart
          </h3>
        )}
      </div>
      <div className="w-full  col-span-2 flex items-end">
        <div className="lg:border-l-2 px-5 mx-1  flex flex-col space-y-3  ">
          <h3 className="capitalize font-semibold text-center text-xl border-b-4 w-full mx-auto pb-2 mb-3">
            Order summary
          </h3>
          <div className="space-y-3 flex flex-col capitalize font-semibold px-2">
            <div className="flex justify-between">
              <span>items :</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="flex justify-between">
              <span>*shipping fees :</span>
              <span> ${((totalPrice * 5) / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>subtotal :</span>
              <span> ${totalPrice.toFixed(2)}</span>
            </div>
            <label htmlFor="coupon">add coupon code:</label>
            <input
              type="text"
              value={couponCode}
              onChange={handleCouponChange}
              placeholder="Enter coupon code"
              className="border-4 rounded-lg px-2"
            />
            {couponCode && (
              <p className="bg-red-100 rounded-md px-2 font-semibold  lowercase flex p-2 items-center ">
                <RxCross1 className="mr-2 " />" {couponCode} " is not valid or
                is an expired coupon.
              </p>
            )}
            <button
              className="bg-emerald-400 rounded-lg flex items-center justify-center uppercase py-1 disabled:cursor-not-allowed "
              disabled={isCouponCodeEmpty}
            >
              apply coupon
            </button>
          </div>
          <div className="flex justify-between capitalize px-2">
            <span>total : </span>
            <span>$ {((totalPrice * 5) / 100 + totalPrice).toFixed(2)}</span>
          </div>
          <button
            disabled={cartItems.length === 0}
            className="bg-red-500 p-2 rounded-lg font-semibold text-xl uppercase tracking-wider hover:bg-red-400 disabled:cursor-not-allowed"
          >
            checkout
          </button>
          <p className="bg-red-100 rounded-lg p-2 text-center">
            *Additional fees of 5% have been applied to the total price.
          </p>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
