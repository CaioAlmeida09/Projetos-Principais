const buttonclick = document.getElementById("mybutton")
const dolar = 5.2
const buttonPosClick = () => {
    const input = document.getElementById("myInput").value
    const valueFinal = input / dolar
    const SubstReal = document.getElementById("valorinReal")
    SubstReal.innerText = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(input)
    
    const SubstDolar = document.getElementById("valorinDolar")
    SubstDolar.innerText = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(valueFinal.toFixed(2))

}
buttonclick.addEventListener("click", buttonPosClick)

