const convertButton = document.querySelector(".convert-button")
console.log()

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

   console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.2

    const convertedValue = inputCurrencyValue / dolarToday


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"

    }).format(convertedValue)

}


convertButton.addEventListener("click", convertValues)