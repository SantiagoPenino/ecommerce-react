//ARRAY DE PRODUCTOS
const products = [
  {
    id: "1",
    name: 'TV SAMSUNG 32"',
    price: 237,
    category: "television",
    image: "/src/assets/television/samsung-32.webp",
  },
  {
    id: "2",
    name: 'TV LG 32"',
    price: 247,
    category: "television",
    image: "/src/assets/television/lg-32.webp",
  },
  {
    id: "3",
    name: 'TV SAMSUNG 43"',
    price: 437,
    category: "television",
    image: "/src/assets/television/samsung-43.webp",
  },
  {
    id: "4",
    name: 'TV LG 43"',
    price: 399,
    category: "television",
    image: "/src/assets/television/lg-43.webp",
  },
  {
    id: "5",
    name: 'TV SAMSUNG 55"',
    price: 664,
    category: "television",
    image: "/src/assets/television/samsung-55.webp",
  },
  {
    id: "6",
    name: 'TV LG 55"',
    price: 679,
    category: "television",
    image: "/src/assets/television/lg-55.webp",
  },
  {
    id: "7",
    name: 'TV SAMSUNG 75"',
    price: 1649,
    category: "television",
    image: "/src/assets/television/samsung-75.webp",
  },
  {
    id: "8",
    name: 'TV LG 75"',
    price: 1790,
    category: "television",
    image: "/src/assets/television/lg-75.webp",
  },
  {
    id: "9",
    name: 'LENOVO IdeaPad 14"',
    price: 364,
    category: "notebook",
    image: "/src/assets/notebook/lenovo-ideapad-14.webp",
  },
  {
    id: "10",
    name: 'ASUS VivoBook 14"',
    price: 397,
    category: "notebook",
    image: "/src/assets/notebook/asus-vivobook-14.webp",
  },
  {
    id: "11",
    name: 'DELL Vostro 15.6"',
    price: 479,
    category: "notebook",
    image: "/src/assets/notebook/dell-vostro-15.webp",
  },
  {
    id: "12",
    name: 'ACER Aspire 15.6"',
    price: 947,
    category: "notebook",
    image: "/src/assets/notebook/acer-aspire-15.webp",
  },
  {
    id: "13",
    name: 'HP Victus 15.6"',
    price: 1047,
    category: "notebook",
    image: "/src/assets/notebook/hp-victus-15.webp",
  },
  {
    id: "14",
    name: 'MSI Thin 15.6"',
    price: 1047,
    category: "notebook",
    image: "/src/assets/notebook/msi-thin-15.webp",
  },
  {
    id: "15",
    name: "MacBook Air M1",
    price: 1299,
    category: "notebook",
    image: "/src/assets/notebook/macbook-air-m1.webp",
  },
  {
    id: "16",
    name: "MacBook Air M2",
    price: 1799,
    category: "notebook",
    image: "/src/assets/notebook/macbook-air-m2.webp",
  },
  {
    id: "17",
    name: "XIAOMI Redmi 10C",
    price: 129,
    category: "phone",
    image: "/src/assets/phone/xiaomi-10c.webp",
  },
  {
    id: "18",
    name: "SAMSUNG Galaxy A04",
    price: 167,
    category: "phone",
    image: "/src/assets/phone/samsung-a04.webp",
  },
  {
    id: "19",
    name: "SAMSUNG Galaxy A14",
    price: 189,
    category: "phone",
    image: "/src/assets/phone/samsung-a14.webp",
  },
  {
    id: "20",
    name: "HUAWEI Y70",
    price: 199,
    category: "phone",
    image: "/src/assets/phone/huawei-y70.webp",
  },
  {
    id: "21",
    name: "Motorola Moto G13",
    price: 207,
    category: "phone",
    image: "/src/assets/phone/motorola-g13.webp",
  },
  {
    id: "22",
    name: "SAMSUNG Galaxy A24",
    price: 239,
    category: "phone",
    image: "/src/assets/phone/samsung-a24.webp",
  },
  {
    id: "23",
    name: "HONOR Magic 5",
    price: 439,
    category: "phone",
    image: "/src/assets/phone/honor-magic5.webp",
  },
  {
    id: "24",
    name: "Motorola Edge 30",
    price: 817,
    category: "phone",
    image: "/src/assets/phone/motorola-g30.webp",
  },
];
//FUNCION PARA OBTENER UN PRODUCTO POR ID
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      product ? resolve(product) : reject("No existe el producto");
    }, 1000);
  });
};

//FUNCION PARA OBTENER TODOS LOS PRODUCTOS DE UNA CATEGORIA
export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = category
        ? products.filter((product) => product.category === category)
        : products;
      resolve(filteredProducts);
    }, 1000);
  });
};
