import {
  Button,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { menu } from "../data/index";
import type { RootState } from "../redux/store";
import CartModal from "./CartModal";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const cart = useSelector((state: RootState) => state.cart);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
        <NavLink
            to="/"
            className="text-slate-900 font-semibold capitalize hover:text-black"
          >
          <Image src="/logoipsum-280.svg" />
          </NavLink>
        </NavbarBrand>
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
            home
          </NavLink>
        </NavbarItem>
   
        <NavbarItem>
          <NavLink
            to="/about"
            className="text-slate-900 font-semibold capitalize hover:text-black"
          >
            about us
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/contact"
            className="text-slate-900 font-semibold capitalize hover:text-black"
          >
            contact us
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/cart"
            className="text-slate-900 font-semibold capitalize hover:text-black"
          >
            cart
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
        <NavbarItem className="hidden lg:flex  ">
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
            <FaCartShopping className="text-[1.8rem]" onClick={handleOpenModal} />
            <span className="absolute bottom-5 left-5 text-white bg-red-600 w-5 h-5 text-sm flex items-center justify-center rounded-full">
              {cart.cartItems.length}
            </span>
          </div>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="">
        {menu.menuItems.map((item: string, index: number) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 0
                  ? "primary"
                  : index === menu.menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <CartModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Navbar>
  );
}
