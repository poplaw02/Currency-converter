let formularz = document.querySelector("js-form")
let waluta1 = document.querySelector("js-waluta1")
let waluta2 = document.querySelector("js-waluta2")
let wynik = document.querySelector("js-wynik")

formularz.addEventListener("submit", (event) =>{
    event.preventDefault();

    let waluta1 = waluta1.value;
    let waluta2 = waluta2.value;
    
    let wynik = formularz*waluta1*waluta2;
    console.log(wynik);
});

formularz.addEventListener("reset", () =>{
    preventDefault();
});