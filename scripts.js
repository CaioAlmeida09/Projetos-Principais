const buttonclick = document.getElementById("mybutton")
const dolar = 5.2
const buttonPosClick = () => {
    const input = document.getElementById("myInput").value
    const valueFinal = input / dolar
    const SubstReal = document.getElementById("valorinReal")
    SubstReal.innerText = input
    const SubstDolar = document.getElementById("valorinDolar")
    SubstDolar.innerText = valueFinal.toFixed(2)
}
buttonclick.addEventListener("click", buttonPosClick)

