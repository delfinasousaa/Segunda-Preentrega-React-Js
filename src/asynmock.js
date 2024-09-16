const misProductos = [
    {id: "1", nombre: "Barra de Proteína Double Chocolate Chunk", precio: "10", img: "../images/proteinbar1.png", idCat: "Snacks"},
    {id: "2", nombre: "Barra de Proteína Dipped Cookies and Cream", precio: "10", img: "../images/proteinbar2.png", idCat: "Snacks"},
    {id: "3", nombre: "Barra de Proteína OatMeal Chocolate Chip",precio: "10", img: "../images/proteinbar3.png", idCat: "Snacks"},
    {id: "4", nombre: "Barra de Proteína Dipped Chocolate Chip Cookie Dough",precio: "10", img: "../images/proteinbar4.png", idCat: "Snacks"},
    {id: "5", nombre: "Barra de Proteína Birthday Cake",precio: "10", img: "../images/proteinbar5.png", idCat: "Snacks"},
    {id: "6", nombre: "Barra de Proteína Pumpkin Pie",precio: "10", img: "../images/proteinbar6.png", idCat: "Snacks"},
    {id: "7", nombre: "Barra de Proteína White Chocolate Raspberry",precio: "10", img: "../images/proteinbar7.png", idCat: "Snacks"},
    {id: "8", nombre: "Barra de Proteína Mint Chocolate Chunk",precio: "10", img: "../images/proteinbar8.png", idCat: "Snacks"},
    {id: "9", nombre: "Galleta proteica Cinamon Brown Butter",precio: "10", img: "../images/proteincookie1.png", idCat: "Snacks"},
    {id: "10", nombre: "Galleta proteica Peanut Butter Chocolate Chip",precio: "10", img: "../images/proteincookie2.png", idCat: "Snacks"},
    {id: "11", nombre: "Galleta proteica Chocolate Chip",precio: "10", img: "../images/proteincookie3.png", idCat: "Snacks"},
    {id: "12", nombre: "Galleta proteica White Chocolate Macadami",precio: "10", img: "../images/proteincookie4.png", idCat: "Snacks"},
    {id: "13", nombre: "Proteina en polvo Cookies and Cream",precio: "10", img: "../images/proteinpowder1.png", idCat: "Proteínas"},
    {id: "14", nombre: "Proteina en polvo Vanilla Milkshake",precio: "10", img: "../images/proteinpowder2.png", idCat: "Proteínas"},
    {id: "15", nombre: "Proteina en polvo Chocolate Milkshake",precio: "10", img: "../images/proteinpowder3.png", idCat: "Proteínas"},
    {id: "16", nombre: "Proteina en polvo Peanut Butter",precio: "10", img: "../images/proteinpowder4.png", idCat: "Proteínas"},
    {id: "17", nombre: "Creatina Gentech",precio: "10", img: "../images/creatina1.png", idCat: "Creatinas"},
    {id: "18", nombre: "Creatina Star Nutrition",precio: "10", img: "../images/creatina2.png", idCat: "Creatinas"},
    {id: "19", nombre: "Creatina Ena",precio: "10", img: "../images/creatina3.png", idCat: "Creatinas"},
    {id: "20", nombre: "Creatin UltraTech",precio: "10", img: "../images/creatina4.png", idCat: "Creatinas"},
    {id: "21", nombre: "Carbo energy Ena",precio: "10", img: "../images/energia1.png", idCat: "Energía"},
    {id: "22", nombre: "Cafeína Star Nutrition",precio: "10", img: "../images/energia3.png", idCat: "Energía"},
    {id: "23", nombre: "Energy Strawberry Gel Ena",precio: "10", img: "../images/energia2.png", idCat: "Energía"},
]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (misProductos)
        }, 2000);
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout (() => {
           const producto = misProductos.find(item => item.id === id)
           resolve(producto)
        }, 2000)
    })
}

export const getProductosPorCat = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout (() => {
            const producto = misProductos.filter(item=> item.idCat === idCategoria)
            resolve(producto)
        }, 100);
    })
    }