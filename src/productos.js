import bufandaImg from './img/bufanda.jpg'

const productosData = [
    {
    id:1,
    nombre: 'poncho', 
    precio:5000,
    img: "img/bufanda.jpg",
    categoria:2,
    description: 'tejido a mano con lana de excelente calidad'
    },
    {
    id:2,
    nombre: 'gorro', 
    precio:500,
    img: "img/bufanda.jpg",
    categoria:1,
    description: 'tejido a mano con lana de excelente calidad'
    },
    {
    id:3,
    nombre: 'bufanda', 
    precio:1500,
    img: bufandaImg,
    categoria:1,
    description: 'tejido a mano con lana de excelente calidad'
    },
    {
    id:4,
    nombre: 'campera', 
    precio:7500,
    img: "img/bufanda.jpg",
    categoria:2,
    description: 'tejido a mano con lana de excelente calidad'
    },
    {
    id:5,
    nombre: 'chal', 
    precio:4500,
    img: "img/bufanda.jpg",
    categoria:1,
    description: 'tejido a mano con lana de excelente calidad'
    },
    {
    id:6,
    nombre: 'remera', 
    precio:10000,
    img: "img/bufanda.jpg",
    categoria:2,
    description: 'tejido a mano con lana de excelente calidad'
    },
    {
    id:7,
    nombre: 'mitones', 
    precio:1500,
    img: "img/bufanda.jpg",
    categoria:1,
    description: 'tejido a mano con lana de excelente calidad'
    },
    {
    id:8,
    nombre: 'escarpines', 
    precio:7500,
    img: "img/bufanda.jpg",
    categoria:3,
    description: 'tejido a mano con lana de excelente calidad'
    },
    {
    id:9,
    nombre: 'mantita', 
    precio:3500,
    img: "img/bufanda.jpg",
    categoria:3,
    description: 'tejido a mano con lana de excelente calidad'
    }
]

const productos = async() => {
    return productosData
};

export default productos;