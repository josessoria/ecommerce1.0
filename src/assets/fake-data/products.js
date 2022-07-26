// all images imported from images directory
import product_01_image_01 from "../images/product_01.1 .png";
import product_01_image_02 from "../images/asado.jpg";
import product_01_image_03 from "../images/criollita.jpg";

import product_02_image_01 from "../images/cerdoahumado.jpg";
import product_02_image_02 from "../images/ensaladapapa.jpg";
import product_02_image_03 from "../images/ensaladapalta.png";

import product_03_image_01 from "../images/carnevaca.jpg";
import product_03_image_02 from "../images/vinotoro.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/brochetas.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/malbec.png";
import product_05_image_02 from "../images/ricardonora.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/jacobcrew.jpg";
import product_06_image_02 from "../images/talsiker.jpg";

const products = [
  {
    id: "01",
    title: "Costillas",
    price: 1650,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_04_image_01,
    category: "Carne",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "Cerdo Ahumado",
    price: 1100,
    image01: product_02_image_01,
    image02: product_03_image_01,
    image03: product_01_image_01,
    category: "Carne",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Bife Ahumado",
    price: 1350,
    image01: product_03_image_01,
    image02: product_02_image_01,
    image03: product_01_image_01,
    category: "Carne",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "Brochetas",
    price: 1000,
    image01: product_04_image_01,
    image02: product_03_image_01,
    image03: product_01_image_01,
    category: "Carne",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "05",
    title: "Vino Malbec",
    price: 1200,
    image01: product_05_image_01,
    image02: product_06_image_01,
    image03: product_05_image_03,
    category: "Vino",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "Vino JacobCrew",
    price: 670,
    image01: product_06_image_01,
    image02: product_05_image_01,
    image03: product_01_image_03,
    category: "Vino",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "Vino Ricardo Nora",
    price: 1700,
    image01: product_05_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Vino",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Vino Talisker",
    price: 1400,
    image01: product_06_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Vino",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "Asado",
    price: 1600,
    image01: product_01_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Carne",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Criollita",
    price: 600,
    image01: product_01_image_03,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Ensaladas",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "Ensalada de papa",
    price: 500,
    image01: product_02_image_02,
    image02: product_02_image_03,
    image03: product_01_image_03,
    category: "Ensaladas",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Ensalada de Palta",
    price: 350,
    image01: product_02_image_03,
    image02: product_02_image_02,
    image03: product_01_image_03,
    category: "Ensaladas",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "13",
    title: "Vino Toro",
    price: 200,
    image01: product_03_image_02,
    image02: product_03_image_02,
    image03: product_03_image_02,
    category: "Vino",

    desc: "Un vino que no es para cualquiera.",
  },
];

export default products;
