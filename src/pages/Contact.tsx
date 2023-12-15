import { FaMapMarked } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import ContactForm from "../components/ContactForm";
const imageUrl = "../../public/images/dan-choi.jpg";

const ContactPage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`,
  };
  return (
    <div className="items-center justify-center flex   lg:h-[800px] w-full">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full mx-auto rounded-lg  h-3/4 ">
        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 justify-between items-center h-full">
          <ContactForm />
          <div
            className="w-full py-20 border-3 border-slate-400  h-full rounded-tr-xl items-center text-white flex flex-col justify-around rounded-br-xl "
            style={backgroundImageStyle}
          >
            <div className="backdrop-blur-md  flex flex-col justify-around h-full border-3 border-slate-500 rounded-md">
              <div>
                <div className="flex  justify-start ml-3 font-semibold text-[1.2rem] w-full space-x-4 mb-4 p-2 items-center">
                  <span className="">
                    <FaMapMarked />
                  </span>
                  <p className="">123 Main St, Cityville, State, 12345</p>
                </div>
                <div className="flex justify-start ml-3 font-semibold text-[1.2rem] w-full space-x-4 mb-4 p-2 items-center">
                  <span>
                    <MdOutlineMarkEmailRead />
                  </span>
                  <p>john.doe@example.com</p>
                </div>
                <div className="flex justify-start ml-3 font-semibold text-[1.2rem] w-full space-x-4 mb-4 p-2 items-center">
                  <span>
                    <FaPhoneVolume />
                  </span>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="w-full flex justify-center items-center ">
                <img src="/facebook.svg" alt="" className="w-10 h-10" />
                <img src="/instagram.svg" alt="" className="w-10 h-10" />
                <img src="/youtube.svg" alt="" className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
