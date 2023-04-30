const buttonclick = document.getElementById("mybutton")
const select = document.getElementById("mySelct")
const img = document.getElementById("bandeira")


const buttonPosClick = async() => {
    const SubstReal = document.getElementById("valorinReal")
    const input = document.getElementById("myInput").value
    const moedas = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())
    const dolar = moedas.USDBRL.high
    const Euro = moedas.EURBRL.high
    const Bit = moedas.BTCBRL.high
    const valueFinal = input / dolar
    SubstReal.innerText = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(input)

    if (select.value === "US$ Dolar Americano") {
        const SubstExt = document.getElementById("valorExt")
        SubstExt.innerText = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(valueFinal.toFixed(2))
    }

    if (select.value === "€ Euro") {
        const SubstExt = document.getElementById("valorExt")
        SubstExt.innerText = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format((input / Euro).toFixed(2))
    }

    if (select.value === "₿ Bitcoin") {
        const SubstExt = document.getElementById("valorExt")
        SubstExt.innerText = `₿ ${(input / Bit).toFixed(5)}`
    }

const testSelect = () => {
    const textMoeda = document.getElementById("textMoeda")
    if (select.value === "€ Euro") {
        textMoeda.innerText = "€ Euro"
        img.src = "/assets/Euro.svg"

    }
    else if (select.value === "₿ Bitcoin") {
        textMoeda.innerText = "₿ Bitcoin"
        img.src = "/assets/Bitcoin.png"
    }
    else if (select.value === "US$ Dolar Americano") {
        textMoeda.innerText = "US$ Dolar Americano"
        img.src = "/assets/Eua.svg"
    }

}}

buttonclick.addEventListener("click", buttonPosClick)
select.addEventListener("change", testSelect)
