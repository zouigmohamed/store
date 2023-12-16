import {
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { menu } from "../data/index";
import type { RootState } from "../redux/store";
import CartModal from "./CartModal";
import { IoMdClose } from "react-icons/io";

export default function App() {
  const cart = useSelector((state: RootState) => state.cart);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleResize = () => {
    // Close the menu on window resize
    setIsMenuOpen(false);
  };
  const handleScroll = () => {
    // Close the menu on window resize
    setIsMenuOpen(false);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar className=" fixed ">
      <NavbarContent>
        <span
          className="md:hidden sm:block cursor-pointer"
          onClick={handleOpenMenu}
        >
          {isMenuOpen ? <IoMdClose className="text-3xl"/> : <IoMenu className="text-3xl"/>}
        </span>
        <NavbarBrand>
          <NavLink
            to="/"
            className="text-slate-900 font-semibold capitalize hover:text-black"
          >
            <Image src="/logoipsum-280.svg" />
          </NavLink>
        </NavbarBrand>
      </NavbarContent>
     
      <NavbarContent className={` left-[8%] border-2 border-orange-300 rounded-lg h-auto absolute py-2 top-[64px] flex flex-col w-[84%] items-start  bg-white opacity-70 transition-all transform ${isMenuOpen ? "scale-100" : "scale-0"}`}
      >
          {menu.map((item) => (
            <NavbarMenuItem key={item.id} onClick={() => setIsMenuOpen(false)} className="">
              <Link
                to={item.link}
                className="ml-2  font-semibold text-slate-900  hover:mx-4 duration-1000  hover:px-2   border-l-2 border-transparent  hover:border-emerald-500  "
                onClick={()=>handleOpenMenu()}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 text-slate-700 border-b-4 px-5 space-x-9 h-12"
        justify="center"
      >
        <NavbarItem>
          <NavLink
            to="/"
            className="text-slate-900 font-semibold capitalize hover:text-black"
          >
            Home
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/about"
            className="text-slate-900 font-semibold capitalize hover:text-black"
          >
            About Us
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/contact"
            className="text-slate-900 font-semibold capitalize hover:text-black"
          >
            Contact Us
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/cart"
            className="text-slate-900 font-semibold capitalize hover:text-black"
          >
            Cart
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            variant="flat"
            className="font-semibold  border-1 border-slate-200"
          >
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            href="#"
            variant="shadow"
            className="font-semibold  border-1 border-slate-200"
          >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <div className="relative cursor-pointer">
            <FaCartShopping
              className="text-[1.8rem]"
              onClick={handleOpenModal}
            />
            <span className="absolute bottom-5 left-5 text-white bg-red-600 w-5 h-5 text-sm flex items-center justify-center rounded-full">
              {cart.cartItems.length}
            </span>
          </div>
        </NavbarItem>
      </NavbarContent>

      <CartModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Navbar>
  );
}
