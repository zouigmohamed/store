import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import { IProduct } from "../interfaces";
import { AddProduct } from "../redux/cart/cartSlice";
import { useAppDispatch } from "../redux/store";

interface IPropsMyModal {
  isOpen: boolean | undefined;
  onClose: () => void;
  product: IProduct;
}
const MyModal: React.FC<IPropsMyModal> = ({ isOpen, onClose, product }) => {
  const [image, setImage] = useState<string>(product.image);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(AddProduct(product));
  };
  return (
    <>
      <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalContent style={{ width: "80%" }}>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 " >
                Product details
              </ModalHeader>
              <ModalBody className="flex justify-center  flex-col lg:flex-row items-center ">
                <div className="flex justify-center items-center w-full h-full  p-2">
                  <div className="big-image-container">
                    <img src={image} alt="" className="big-image-transition border-2" />
                  </div>
                  <div className="flex gap-2 justify-center flex-col flex-wrap items-center">
                    {product.subImages.map((img, idx) => (
                      <img
                        key={img + idx}
                        onMouseOver={() => setImage(img)}
                        onMouseLeave={() => setImage(product.image)}
                        src={img}
                        alt=""
                        className={`w-[70px] h-[60px] rounded-md mx-2 cursor-pointer image-transition ${
                          img === image ? "border-2 border-orange-600" : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className=" flex flex-col justify-start  space-y-5 w-full">
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <span>{product.price} $</span>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center ">
                <Button
                  color="danger"
                  variant="bordered"
                  onPress={onClose}
                  className="uppercase border-slate-300 font-semibold w-full"
                >
                  Close
                </Button>
                <Button
                  onClick={()=>handleAddToCart()}
                  color="primary"
                  onPress={onClose}
                  className="uppercase font-semibold w-full"
                >
                  add to cart
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyModal;
