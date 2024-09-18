const convertButton = document.querySelector(".convert-button")
console.log()

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    
    const dolarToday = 5.2
    const euroToday = 6.2

    
    if(currencySelec.value == "dolar"){
         currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
             style: "currency",
             currency: "USD"
        }).format(inputcurrencyValue/dolarToday)
    }
    if(currencySelec.value == "euro"){
         currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
             style: "currency",
             currency: "USD"
        }).format(inputcurrencyValue/euroToday)
    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyValue)




}

function changeCurrincy(){
    const currencyName = document.getElementById("currency-name")
    const currencyimage = document.querySelector(".currency-img")
    
    if(currencySelec.value == "dolar"){
    currencyName.innerHTML = "Dólar americano"
    currencyimage.src =./assets/dolar.png
    }
   
    if(currencySelec.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyimage.src  =./assets/euro.png
   }
}
currencySelect.addEventListener("change")
convertButton.addEventListener("click", convertValues)