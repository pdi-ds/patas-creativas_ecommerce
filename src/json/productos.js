const productos = [
  {
    id: 1,
    name: "Branding",
    price: 1500,
    stock: 287,
    img: "https://i.ibb.co/KqhtTh8/branding-item1.webp",
  },
  {
    id: 2,
    name: "Iconos",
    price: 900,
    stock: 42,
    img: "https://i.ibb.co/7GPVQqt/icons-item1.webp",
  },
  {
    id: 3,
    name: "Ilustraciones",
    price: 1200,
    stock: 87,
    img: "https://i.ibb.co/PDJY3kk/illustration-item1.webp",
  },
];

export const getFetch = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(productos);
    }, 2000);
  });
};
