const buttonclick = document.getElementById("mybutton")
const select = document.getElementById("mySelct")
const img = document.getElementById("bandeira")
const dolar = 5.05
const Euro = 5.49
const Bit = 141.585
const buttonPosClick = () => {
    const input = document.getElementById("myInput").value
    const valueFinal = input / dolar
    const SubstReal = document.getElementById("valorinReal")
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

    else {
        const SubstExt = document.getElementById("valorExt")
        SubstExt.innerText = `₿ ${(input / 141.585).toFixed(5)}`
    }
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

}

buttonclick.addEventListener("click", buttonPosClick)
select.addEventListener("change", testSelect)
