const milkPrice = 1.20
const cocoaPrice = 2.00
const saladPrice = 2.00
const carrotsPrice = 2.00
const tomatoesPrice = 2.50
const readyMealsPrice = 5.00
const totalPrice = milkPrice + cocoaPrice + saladPrice + carrotsPrice + tomatoesPrice + readyMealsPrice

const shoppingList = [
    `Milk at £ ${milkPrice}`, 
    `Cocoa at £ ${cocoaPrice}`, 
    `Salad at £ ${saladPrice}`, 
    `Carrots at £ ${carrotsPrice}`, 
    `Tomatoes at £ ${tomatoesPrice}`, 
    `Ready meals at £ ${readyMealsPrice}`
]


const confirmation = confirm("Do you want to add an item to your shopping list?")

if(confirmation) {
    const newItem = prompt("What item do you want to add?")
    const newItemPrice = Number(prompt("What is the price of the item?"))

        shoppingList.push(`${newItem} at £ ${newItemPrice}`)
        
        for(const item of shoppingList){
            console.log(item);
        }
    if (isNaN (newItemPrice)){
        alert("Please enter correct values")
    }


    const confirmation2 = confirm("Do you want to add an item to your shopping list?")

    if(confirmation2) {
        const newItem = prompt("What item do you want to add?")
        const newItemPrice2 = Number(prompt("What is the price of the item?"))
        
            shoppingList.push(`${newItem} at £ ${newItemPrice2}`)

            for(const item of shoppingList){
                console.log(item);
            }
        if (isNaN (newItemPrice2)){
            alert("Please enter correct values")
        }



        const confirmation3 = confirm("Do you want to add an item to your shopping list?")

        if(confirmation3) {
            const newItem = prompt("What item do you want to add?")
            const newItemPrice3 = Number(prompt("What is the price of the item?"))

                shoppingList.push(`${newItem} at £ ${newItemPrice3}`)
                
                for(const item of shoppingList){
                    console.log(item);
                }
            if (isNaN (newItemPrice3)){
                alert("Please enter correct values")
            }

            alert("Your basket is full!!!")
            alert(`Total cost: £${totalPrice+newItemPrice+newItemPrice2+newItemPrice3}`)

        }else if(confirmation3==false){
        alert(`Total cost: £${totalPrice+newItemPrice+newItemPrice2}`)
        }
    }else if(confirmation2 == false){
    alert(`Total cost: £${totalPrice+newItemPrice}`)
    }
    
}else {

alert(`Total cost: £${totalPrice}`)

for(const item of shoppingList){
    console.log(item);
}
}