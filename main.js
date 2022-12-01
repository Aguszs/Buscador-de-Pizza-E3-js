const pizzas = [
    {
        id: 1, 
        nombre: "napolitana",
        ingredientes: ["salsa","muzzarella","tomate"],
        precio: 1000,
        imagen: "Napolitana.jpg"
    },
    {
        id: 2, 
        nombre: "muzzarella",
        ingredientes: [,"salsa","muzzarella"],
        precio: 1200,
        imagen: "mozzarella.jpg"
    },
    {
        id: 3, 
        nombre: "comun",
        ingredientes: ["aceitunas","salsa","queso fresco"],
        precio: 1900,
        imagen: "aceitunas"
    },
    {
        id: 4, 
        nombre: "4 quesos",
        ingredientes: ["harina","levadura","salsa","muzzarella","queso fontina","queso parmesano","queso grouller"],
        precio: 1400,
        imagen: "4 quesos.jpg"
    },
    {
        id: 5, 
        nombre: "con fritas",
        ingredientes: ["harina","levadura","salsa","muzzarella", "papaFritas"],
        precio: 2200,
        imagen:"fritas+.jpg"

    }
]

const resultcontainer = document.getElementById("result-container")
const form = document.getElementById("form")
const input = document.querySelector(".form__input")

const searchPizza = (value) => pizzas.find(pizza=> pizza.id===value)



const showEmptyError = () =>{
  resultcontainer.innerHTML = `<div class="pizza-container">
        
  <h2 class="error-title">ingrese una Pizza a buscar</h2>`
};
const renderResult = (pizza) =>{
    if (!pizza){
        resultcontainer.innerHTML = `<div class="pizza-container">

        <h2 class="error-title">no existe esa pizaza en el menu</h2>
        <p>realice una nueva busqueda</p>
    </div>`
    } else{
        resultcontainer.innerHTML = `<div class="pizza-container">
        <img src="./assets/imagenes/${pizza.imagen}" id="imgPizza">
        <h2 class="result-title">${pizza.nombre}</h2>
        <h3 class="result-price">$${pizza.precio}</h3>
        <p>quiere buscar otra pizza?</p>
    </div>`
    let pizzaJson = JSON.stringify(pizzas);
    localStorage.setItem("Pizza Detalles", pizzaJson)
    localStorage.setItem("Nombre", pizzas.name)
    localStorage.setItem("ID", pizzas.id)
    localStorage.setItem("Precio", pizzas.price)
    localStorage.setItem("Imagen", pizzas.imagen)     
    valid = true;
    }
}


const submitSearch = (e) =>{
    e.preventDefault()
    const searchedValue = input.value;
    if(!searchedValue){
        showEmptyError()
        return
    }
    const searchedPizza = searchPizza(Number(searchedValue))
    renderResult(searchedPizza)
    form.reset()

}

const init=()=>{
form.addEventListener("submit",submitSearch)

}
init()