import { v4 as uuidv4 } from 'uuid';

import { IFormFields, IMenuItem, IProduct } from "../interfaces";
export const formFields:IFormFields[] = [
  {
    label: "Name",
    type: "text",
    name: "name",
    value: "",
    required: true,
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    value: "",
    required: true,
  },
  {
    label: "Message",
    type: "textarea",
    name: "message",
    value: "",
    required: true,
  },
];
export const menu: IMenuItem = {
  menuItems: ["Profile", "Dashboard", "Log Out"],
};

export const images = [
  "https://images.unsplash.com/photo-1549298916-f52d724204b4?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1615290642882-6b9501729a27?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const products: IProduct[] = [
  {
    id: uuidv4(),
    title: "Cool T-Shirt",
    description: "A comfortable and stylish t-shirt for everyday wear.",
    price: 19.99,
    image:"/images/sneakers/p1/1.jpg",
    category: "sneakers",
    subImages: [
      "/images/sneakers/p1/1.jpg",
      "/images/sneakers/p1/2.jpg",
      "/images/sneakers/p1/3.jpg",
      "/images/sneakers/p1/4.jpg",
    ],
  },
  {
    id: uuidv4(),
    title: "Cool Hoodie",
    description: "A comfortable and stylish hoodie for everyday wear.",
    price: 19.99,
    image:"/images/hoodies/p1/1.jpg",
    category: "hoodie",
    subImages: [
      "/images/hoodies/p1/1.jpg",
      "/images/hoodies/p1/2.jpg",
      "/images/hoodies/p1/3.jpg",
      "/images/hoodies/p1/4.jpg",
    ],
  },
  {
    id: uuidv4(),
    title: "TECH LOGO - Sweat à capuche",
    description: "A comfortable and stylish hoodie for everyday wear.",
    price: 19.99,
    image:"/images/hoodies/p2/1.jpg",
    category: "hoodie",
    subImages: [
      "/images/hoodies/p2/1.jpg",
      "/images/hoodies/p2/2.jpg",
      "/images/hoodies/p2/3.jpg",
      "/images/hoodies/p2/4.jpg",
    ],
  },
  {
    id: uuidv4(),
    title: "TECH LOGO - Sweat à capuche",
    description: "A comfortable and stylish hoodie for everyday wear.",
    price: 19.99,
    image:"/images/hoodies/p3/1.jpg",
    category: "hoodie",
    subImages: [
      "/images/hoodies/p3/1.jpg",
      "/images/hoodies/p3/2.jpg",
      "/images/hoodies/p3/3.jpg",
      "/images/hoodies/p3/4.jpg",
    ]
  },
  {
    id: uuidv4(),
    title: "Gesean Men's",
    description: " Novelty Color Block Pullover Fleece Hoodie Long Sleeve Casual Sweatshirt with Pocket",
    price: 19.99,
    image:"/images/hoodies/p4/1.jpg",
    category: "hoodie",
    subImages: [
      "/images/hoodies/p4/1.jpg",
      "/images/hoodies/p4/2.jpg",
      "/images/hoodies/p4/3.jpg",
      "/images/hoodies/p4/4.jpg",
    ]
  },
  {
    id: uuidv4(),
    title: "COOFANDY Men's",
    description: " Workout Hoodie Lightweight Gym Athletic Sweatshirt Fashion Pullover Hooded With Pocket",
    price: 19.99,
    image:"/images/hoodies/p5/1.jpg",
    category: "hoodie",
    subImages: [
      "/images/hoodies/p5/1.jpg",
      "/images/hoodies/p5/2.jpg",
      "/images/hoodies/p5/3.jpg",
      "/images/hoodies/p5/4.jpg",
    ]
  },
  {
    id: uuidv4(),
    title: "Women's sneakers",
    description: "Women's Cloudfoam Pure Sportswear Sneaker",
    price: 19.99,
    image:"/images/sneakers/p2/1.jpg",
    category: "sneakers",
    subImages: [
      "/images/sneakers/p2/1.jpg",
      "/images/sneakers/p2/2.jpg",
      "/images/sneakers/p2/3.jpg",
      "/images/sneakers/p2/4.jpg",
    ]
  },
  {
    id: uuidv4(),
    title: "beautiful  sneakers",
    description: " Pure Sportswear Sneaker",
    price: 19.99,
    image:"/images/sneakers/p3/1.jpg",
    category: "sneakers",
    subImages: [
      "/images/sneakers/p3/1.jpg",
      "/images/sneakers/p3/2.jpg",
      "/images/sneakers/p3/3.jpg",
      "/images/sneakers/p3/4.jpg",
    ]
  },
  {
    id: uuidv4(),
    title: "spring  sneakers",
    description: " Pure Sportswear Sneaker for spring",
    price: 19.99,
    image:"/images/sneakers/p4/1.png",
    category: "sneakers",
    subImages: [
      "/images/sneakers/p4/1.png",
      "/images/sneakers/p4/2.png",
      "/images/sneakers/p4/3.png",
      "/images/sneakers/p4/4.png",
    ]
  },
  {
    id: uuidv4(),
    title: "winter  sneakers",
    description: " Pure Sportswear Sneaker for winter",
    price: 19.99,
    image:"/images/sneakers/p5/1.jpg",
    category: "sneakers",
    subImages: [
      "/images/sneakers/p5/1.jpg",
      "/images/sneakers/p5/2.jpg",
      "/images/sneakers/p5/3.jpg",
      "/images/sneakers/p5/4.jpg",
    ]
  },
  {
    id: uuidv4(),
    title: "t shirt ",
    description: " Pure t shirt   for summer",
    price: 19.99,
    image:"/images/tshirt/p1/1.jpg",
    category: "tshirt",
    subImages: [
      "/images/tshirt/p1/1.jpg",
      "/images/tshirt/p1/2.jpg",
      "/images/tshirt/p1/3.jpg",
      "/images/tshirt/p1/4.jpg",
  
    ]
  },
  {
    id: uuidv4(),
    title: "t shirt ",
    description: " Pure t shirt   for summer",
    price: 19.99,
    image:"/images/tshirt/p2/1.jpg",
    category: "tshirt",
    subImages: [
      "/images/tshirt/p2/1.jpg",
      "/images/tshirt/p2/2.jpg",
      "/images/tshirt/p2/3.jpg",
      "/images/tshirt/p2/4.jpg",
  
    ]
  },
  {
    id: uuidv4(),
    title: "t shirt ",
    description: " Pure t shirt   for summer",
    price: 19.99,
    image:"/images/tshirt/p1/1.jpg",
    category: "tshirt",
    subImages: [
      "/images/tshirt/p1/1.jpg",
      "/images/tshirt/p1/2.jpg",
      "/images/tshirt/p1/3.jpg",
      "/images/tshirt/p1/4.jpg",
  
    ]
  },
  {
    id: uuidv4(),
    title: "t shirt ",
    description: " Pure t shirt   for summer",
    price: 19.99,
    image:"/images/tshirt/p3/1.png",
    category: "tshirt",
    subImages: [
      "/images/tshirt/p3/1.png",
      "/images/tshirt/p3/2.png",
      "/images/tshirt/p3/3.png",
      "/images/tshirt/p3/4.png",
  
    ]
  },
  {
    id: uuidv4(),
    title: "t shirt ",
    description: " Pure t shirt   for summer",
    price: 19.99,
    image:"/images/tshirt/p1/1.jpg",
    category: "tshirt",
    subImages: [
      "/images/tshirt/p1/1.jpg",
      "/images/tshirt/p1/2.jpg",
      "/images/tshirt/p1/3.jpg",
      "/images/tshirt/p1/4.jpg",
  
    ]
  },

];
