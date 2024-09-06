const buttons = document.querySelectorAll(".btn")
const amount = document.querySelector("#value-amount")
const person = document.querySelector("#person-total")
const btnCalcular = document.querySelector("#calcular")
const btnReset = document.querySelector("#reset")
const inputBill = document.querySelector("#bill-value")
const quant = document.querySelector("#quant")
const custom = document.querySelector("#custom")

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if(inputBill.value === "" || quant.value === ""){
            inputBill.focus()
            quant.focus()
            document.querySelector(".input-bill").classList.add("invalid")
            document.querySelector(".input-quant").classList.add("invalid")
        }else{

            buttons.forEach( bnt =>{
                bnt.classList.remove("selected")
                button.classList.add('selected')
    
                let valor = button.getAttribute('data-tip')
    
                let quantNum = Number(quant.value)
                let num = Number(inputBill.value)
    
                let porcentagem = num * valor/100
                let division = porcentagem / quantNum
    
                amount.innerHTML = division.toFixed(2,1)
                person.innerHTML = porcentagem.toFixed(2,1)
                
    
            })
        }
    })
})

inputBill.addEventListener("input", ()=>{
    document.querySelector(".input-bill").classList.remove("invalid")
})

quant.addEventListener("input", ()=>{
    document.querySelector(".input-quant").classList.remove("invalid")
})

function personalizado(){
    if(inputBill.value === "" || quant.value === ""){
        inputBill.focus()
        quant.focus()
        document.querySelector(".input-bill").classList.add("invalid")
        document.querySelector(".input-quant").classList.add("invalid")
    }else{
        let num = Number(inputBill.value)
        let quantNum = Number(quant.value)
        let customizado = Number(custom.value)

        let porcentagem = num * customizado/100
        let division = porcentagem / quantNum
    
        amount.innerHTML = division.toFixed(2,1)
        person.innerHTML = porcentagem.toFixed(2,1)
    }

}
custom.addEventListener("input", ()=>{
    personalizado()
})

btnReset.addEventListener("click", ()=>{
    inputBill.value = "";
    quant.value = "";
    custom.value ="";

    document.querySelector(".input-bill").classList.remove("invalid")
    document.querySelector(".input-quant").classList.remove("invalid")

    buttons.forEach(button =>{
        button.classList.remove("selected")
    })

    amount.innerHTML = "0.00"
    person.innerHTML = "0.00"

})
