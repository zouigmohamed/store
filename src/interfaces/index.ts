import { ReactNode } from "react";

export interface IMenuItem {
  id: string;
  name: string;
  link: string;
}
export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: "tshirt" | "hoodie" | "sneakers" ;
  subImages: string[];
  qty?: number | undefined
}

export interface IPageInfo {
  title: string;
  subtitle: string;
  image: string;
  icon:ReactNode,
 }
export interface IFormData {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

export interface IFormFields {
  label: string;
  type: string;
  name: string;
  value: string;
  required: boolean;
}
