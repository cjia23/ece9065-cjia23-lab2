var apple_quantity = 5
var apple_to_buy
var apple_bought = 0
var apple_price = 7
var apple_tax_rate = 0

var avocado_quantity = 5
var avocado_to_buy
var avocado_bought = 0
var avocado_price = 5
var avocado_tax_rate = 0.13

var banana_quantity = 5
var banana_to_buy
var banana_bought = 0
var banana_price = 6
var banana_tax_rate = 0

var blueberry_quantity = 5
var blueberry_to_buy
var blueberry_bought = 0
var blueberry_price = 6
var blueberry_tax_rate = 0.13

var cherry_quantity = 5
var cherry_to_buy
var cherry_bought = 0
var cherry_price = 5
var cherry_tax_rate = 0

var coconut_quantity = 5
var coconut_to_buy
var coconut_bought = 0
var coconut_price = 5
var coconut_tax_rate = 0.13

var grape_quantity = 5
var grape_to_buy
var grape_bought = 0
var grape_price = 8
var grape_tax_rate = 0.13

var peach_quantity = 5
var peach_to_buy
var peach_bought = 0
var peach_price = 20
var peach_tax_rate = 0.13

var pear_quantity = 5
var pear_to_buy
var pear_bought = 0
var pear_price = 15
var pear_tax_rate = 0.13

var pineapple_quantity = 5
var pineapple_to_buy
var pineapple_bought = 0
var pineapple_price = 17
var pineapple_tax_rate = 0.13

window.onload =function()
{
    document.getElementById("apple_quantity").innerHTML = apple_quantity
    document.getElementById("apple_quantity").value =5
    document.getElementById("avocado_quantity").innerHTML = avocado_quantity
    document.getElementById("avocado_quantity").value =5
    document.getElementById("banana_quantity").innerHTML = banana_quantity
    document.getElementById("banana_quantity").value =5
    document.getElementById("blueberry_quantity").innerHTML = blueberry_quantity
    document.getElementById("blueberry_quantity").value =5
    document.getElementById("cherry_quantity").innerHTML = cherry_quantity
    document.getElementById("cherry_quantity").value =5
    document.getElementById("coconut_quantity").innerHTML = coconut_quantity
    document.getElementById("coconut_quantity").value =5
    document.getElementById("grape_quantity").innerHTML = grape_quantity
    document.getElementById("grape_quantity").value =5
    document.getElementById("peach_quantity").innerHTML = peach_quantity
    document.getElementById("peach_quantity").value =5
    document.getElementById("pear_quantity").innerHTML = pear_quantity
    document.getElementById("pear_quantity").value =5
    document.getElementById("pineapple_quantity").innerHTML = pineapple_quantity
    document.getElementById("pineapple_quantity").value =5
}

function buy_apple()
{
    //first time click
    
    if (apple_quantity == document.getElementById("apple_quantity").value && document.getElementById("apple_to_buy").value <= apple_quantity)
    {
        //add a row for apple
        var E1 = document.createElement("tr")
        E1.id = "apple info"
        document.getElementById("shopping cart").appendChild(E1)

        //add apple name
        var E2 = document.createElement("th")
        var p1 = document.createTextNode("Apple")
        E2.appendChild(p1)
        E1.appendChild(E2)

        //change available quantity
        apple_to_buy = document.getElementById("apple_to_buy").value
        apple_quantity = apple_quantity - apple_to_buy
        //window.alert(apple_quantity);
        document.getElementById("apple_quantity").innerHTML = apple_quantity

        //add apple bought quantity 
        var E3 = document.createElement("th")
        E3.id = "apple_bought"
        E1.appendChild(E3)
        apple_bought = apple_bought + apple_to_buy
        apple_bought = parseInt(apple_bought,10)
        document.getElementById("apple_bought").value = apple_bought
        document.getElementById("apple_bought").innerHTML = apple_bought
        
        //add price of each item
        var E4 = document.createElement("th")
        E4.id = "apple_price_each"
        E1.append(E4)
        document.getElementById("apple_price_each").value = apple_price
        document.getElementById("apple_price_each").innerHTML = apple_price

        //add subtotal of apple before tax
        var E5 = document.createElement("th")
        E5.id = "apple_subtotal"
        E1.append(E5)
        var apple_subtotal = apple_price * document.getElementById("apple_bought").value
        document.getElementById("apple_subtotal").value = apple_subtotal
        document.getElementById("apple_subtotal").innerHTML = apple_subtotal

        //add apple tax
        var E6 = document.createElement("th")
        E6.id = "apple_tax"
        E1.appendChild(E6)
        var apple_tax = apple_tax_rate * document.getElementById("apple_subtotal").value
        document.getElementById("apple_tax").value = apple_tax
        document.getElementById("apple_tax").innerHTML = apple_tax

        //add total including tax
        var E7 = document.createElement("th")
        E7.id = "apple_total"
        E1.appendChild(E7)
        var apple_total = apple_tax + apple_subtotal
        document.getElementById("apple_total").value = apple_total
        document.getElementById("apple_total").innerHTML = apple_total

        //add a plus button
        var E8 = document.createElement("th")
        var apple_btn_plus = document.createElement('input')
        apple_btn_plus.type = "button"
        apple_btn_plus.value = "+"
        
        apple_btn_plus.onclick = (function apple_plus()
        {
        
        if(apple_bought<document.getElementById("apple_quantity").value){
        apple_quantity--
        document.getElementById("apple_quantity").innerHTML = apple_quantity
        
        apple_bought = parseInt(document.getElementById("apple_bought").value,10)
        apple_bought++
        document.getElementById("apple_bought").innerHTML = apple_bought
        document.getElementById("apple_bought").value = apple_bought

        apple_subtotal = apple_bought*apple_price
        document.getElementById("apple_subtotal").innerHTML = apple_subtotal
        document.getElementById("apple_subtotal").value = apple_subtotal

        apple_tax = apple_subtotal*apple_tax_rate
        document.getElementById("apple_tax").innerHTML = apple_tax
        document.getElementById("apple_tax").value = apple_tax

        apple_total = apple_subtotal + apple_tax
        document.getElementById("apple_total").innerHTML = apple_total
        document.getElementById("apple_total").value = apple_total
        }
    else (window.alert("Ah oh, there is no apple available. Please check with store manager."))})

        E8.appendChild(apple_btn_plus)
        E1.appendChild(E8)

        //add a minus button
        var E9 = document.createElement("th")
        var apple_btn_minus = document.createElement('input')
        apple_btn_minus.type = "button"
        apple_btn_minus.value = "-"

        apple_btn_minus.onclick = (function apple_minus()
    {
        
        if(apple_bought > 0){
        apple_quantity++
        document.getElementById("apple_quantity").innerHTML = apple_quantity

        apple_bought = parseInt(document.getElementById("apple_bought").value,10)
        apple_bought--
        document.getElementById("apple_bought").innerHTML = apple_bought
        document.getElementById("apple_bought").value = apple_bought

        apple_subtotal = apple_bought*apple_price
        document.getElementById("apple_subtotal").innerHTML = apple_subtotal
        document.getElementById("apple_subtotal").value = apple_subtotal

        apple_tax = apple_subtotal*apple_tax_rate
        document.getElementById("apple_tax").innerHTML = apple_tax
        document.getElementById("apple_tax").value = apple_tax

        apple_total = apple_subtotal + apple_tax
        document.getElementById("apple_total").innerHTML = apple_total
        document.getElementById("apple_total").value = apple_total
    }
        else (window.alert("Ah oh, there is no apple available. Please check with store manager."))
    })
        
        E9.appendChild(apple_btn_minus)
        E1.appendChild(E9)
        
        //add a delete button
        var E10 = document.createElement("th")
        var apple_btn_delete = document.createElement('input')
        apple_btn_delete.type = "button"
        apple_btn_delete.value = "delete"
        apple_btn_delete.onclick = (function apple_delete(){
            var apple_remove = document.getElementById("apple info")
            apple_remove.parentNode.removeChild(apple_remove)
            //reset apple quantity back to original value
            apple_quantity = 5;
            document.getElementById("apple_quantity").value = apple_quantity
            document.getElementById("apple_quantity").innerHTML = apple_quantity
        })
        E10.appendChild(apple_btn_delete)
        E1.appendChild(E10)

    }
    //second time click
    else if (apple_quantity < document.getElementById("apple_quantity").value && apple_quantity > 0 && document.getElementById("apple_to_buy").value <= apple_quantity)
    {
        //second click to modify value
        apple_to_buy = parseInt(document.getElementById("apple_to_buy").value,10)
        apple_quantity = apple_quantity - apple_to_buy
        document.getElementById("apple_quantity").innerHTML = apple_quantity
        
        //update the apple bought
        apple_bought = parseInt(document.getElementById("apple_bought").value,10)
        apple_bought = apple_bought + apple_to_buy
        document.getElementById("apple_bought").innerHTML = apple_bought
        document.getElementById("apple_bought").value = apple_bought

        //update the subtotal
        apple_subtotal = apple_bought*apple_price
        document.getElementById("apple_subtotal").innerHTML = apple_subtotal
        document.getElementById("apple_subtotal").value = apple_subtotal

        //update tax 
        apple_tax = apple_subtotal*apple_tax_rate
        document.getElementById("apple_tax").innerHTML = apple_tax
        document.getElementById("apple_tax").value = apple_tax

        //update total including tax
        apple_total = apple_subtotal + apple_tax
        document.getElementById("apple_total").innerHTML = apple_total
        document.getElementById("apple_total").value = apple_total
    }
    else 
    {
        //window.alert(document.getElementById("apple_quantity").value)
        //window.alert(apple_quantity)
        window.alert("Ah oh, there is no apple available. Please check with store manager.")
    }
}

function buy_avocado()
{
    //first time click
    if (avocado_quantity == document.getElementById("avocado_quantity").value && document.getElementById("avocado_to_buy").value <= avocado_quantity)
    {
        //add a row for avocado
        var E1 = document.createElement("tr")
        E1.id = "avocado info"
        document.getElementById("shopping cart").appendChild(E1)

        //add avocado name
        var E2 = document.createElement("th")
        var p1 = document.createTextNode("Avocado")
        E2.appendChild(p1)
        E1.appendChild(E2)

        //change available quantity
        avocado_to_buy = document.getElementById("avocado_to_buy").value
        avocado_quantity = avocado_quantity - avocado_to_buy
        //window.alert(avocado_quantity);
        document.getElementById("avocado_quantity").innerHTML = avocado_quantity

        //add avocado bought quantity 
        var E3 = document.createElement("th")
        E3.id = "avocado_bought"
        E1.appendChild(E3)
        avocado_bought = avocado_bought + avocado_to_buy
        avocado_bought = parseInt(avocado_bought,10)
        document.getElementById("avocado_bought").value = avocado_bought
        document.getElementById("avocado_bought").innerHTML = avocado_bought
        
        //add price of each item
        var E4 = document.createElement("th")
        E4.id = "avocado_price_each"
        E1.append(E4)
        document.getElementById("avocado_price_each").value = avocado_price
        document.getElementById("avocado_price_each").innerHTML = avocado_price

        //add subtotal of avocado before tax
        var E5 = document.createElement("th")
        E5.id = "avocado_subtotal"
        E1.append(E5)
        var avocado_subtotal = avocado_price * document.getElementById("avocado_bought").value
        document.getElementById("avocado_subtotal").value = avocado_subtotal
        document.getElementById("avocado_subtotal").innerHTML = avocado_subtotal

        //add avocado tax
        var E6 = document.createElement("th")
        E6.id = "avocado_tax"
        E1.appendChild(E6)
        var avocado_tax = avocado_tax_rate * document.getElementById("avocado_subtotal").value
        document.getElementById("avocado_tax").value = avocado_tax
        document.getElementById("avocado_tax").innerHTML = avocado_tax

        //add total including tax
        var E7 = document.createElement("th")
        E7.id = "avocado_total"
        E1.appendChild(E7)
        var avocado_total = avocado_tax + avocado_subtotal
        document.getElementById("avocado_total").value = avocado_total
        document.getElementById("avocado_total").innerHTML = avocado_total

        //add a plus button
        var E8 = document.createElement("th")
        var avocado_btn_plus = document.createElement('input')
        avocado_btn_plus.type = "button"
        avocado_btn_plus.value = "+"
        
        avocado_btn_plus.onclick = (function avocado_plus()
        {
        
        if(avocado_bought<document.getElementById("avocado_quantity").value){
        avocado_quantity--
        document.getElementById("avocado_quantity").innerHTML = avocado_quantity
        
        avocado_bought = parseInt(document.getElementById("avocado_bought").value,10)
        avocado_bought++
        document.getElementById("avocado_bought").innerHTML = avocado_bought
        document.getElementById("avocado_bought").value = avocado_bought

        avocado_subtotal = avocado_bought*avocado_price
        document.getElementById("avocado_subtotal").innerHTML = avocado_subtotal
        document.getElementById("avocado_subtotal").value = avocado_subtotal

        avocado_tax = avocado_subtotal*avocado_tax_rate
        document.getElementById("avocado_tax").innerHTML = avocado_tax
        document.getElementById("avocado_tax").value = avocado_tax

        avocado_total = avocado_subtotal + avocado_tax
        document.getElementById("avocado_total").innerHTML = avocado_total
        document.getElementById("avocado_total").value = avocado_total
        }
    else (window.alert("Ah oh, there is no avocado available. Please check with store manager."))})

        E8.appendChild(avocado_btn_plus)
        E1.appendChild(E8)

        //add a minus button
        var E9 = document.createElement("th")
        var avocado_btn_minus = document.createElement('input')
        avocado_btn_minus.type = "button"
        avocado_btn_minus.value = "-"

        avocado_btn_minus.onclick = (function avocado_minus()
    {
        
        if(avocado_bought > 0){
        avocado_quantity++
        document.getElementById("avocado_quantity").innerHTML = avocado_quantity

        avocado_bought = parseInt(document.getElementById("avocado_bought").value,10)
        avocado_bought--
        document.getElementById("avocado_bought").innerHTML = avocado_bought
        document.getElementById("avocado_bought").value = avocado_bought

        avocado_subtotal = avocado_bought*avocado_price
        document.getElementById("avocado_subtotal").innerHTML = avocado_subtotal
        document.getElementById("avocado_subtotal").value = avocado_subtotal

        avocado_tax = avocado_subtotal*avocado_tax_rate
        document.getElementById("avocado_tax").innerHTML = avocado_tax
        document.getElementById("avocado_tax").value = avocado_tax

        avocado_total = avocado_subtotal + avocado_tax
        document.getElementById("avocado_total").innerHTML = avocado_total
        document.getElementById("avocado_total").value = avocado_total
    }
        else (window.alert("Ah oh, there is no avocado available. Please check with store manager."))
    })
        
        E9.appendChild(avocado_btn_minus)
        E1.appendChild(E9)
        
        //add a delete button
        var E10 = document.createElement("th")
        var avocado_btn_delete = document.createElement('input')
        avocado_btn_delete.type = "button"
        avocado_btn_delete.value = "delete"
        avocado_btn_delete.onclick = (function avocado_delete(){
            var avocado_remove = document.getElementById("avocado info")
            avocado_remove.parentNode.removeChild(avocado_remove)
            //reset avocado quantity back to original value
            avocado_quantity = 5;
            document.getElementById("avocado_quantity").value = avocado_quantity
            document.getElementById("avocado_quantity").innerHTML = avocado_quantity
        })
        E10.appendChild(avocado_btn_delete)
        E1.appendChild(E10)

    }
    //second time click
    else if (avocado_quantity < document.getElementById("avocado_quantity").value && avocado_quantity > 0 && document.getElementById("avocado_to_buy").value <= avocado_quantity)
    {
        //second click to modify value
        avocado_to_buy = parseInt(document.getElementById("avocado_to_buy").value,10)
        avocado_quantity = avocado_quantity - avocado_to_buy
        document.getElementById("avocado_quantity").innerHTML = avocado_quantity
        
        //update the avocado bought
        avocado_bought = parseInt(document.getElementById("avocado_bought").value,10)
        avocado_bought = avocado_bought + avocado_to_buy
        document.getElementById("avocado_bought").innerHTML = avocado_bought
        document.getElementById("avocado_bought").value = avocado_bought

        //update the subtotal
        avocado_subtotal = avocado_bought*avocado_price
        document.getElementById("avocado_subtotal").innerHTML = avocado_subtotal
        document.getElementById("avocado_subtotal").value = avocado_subtotal

        //update tax 
        avocado_tax = avocado_subtotal*avocado_tax_rate
        document.getElementById("avocado_tax").innerHTML = avocado_tax
        document.getElementById("avocado_tax").value = avocado_tax

        //update total including tax
        avocado_total = avocado_subtotal + avocado_tax
        document.getElementById("avocado_total").innerHTML = avocado_total
        document.getElementById("avocado_total").value = avocado_total
    }
    else 
    {
        window.alert("Ah oh, there is no avocado available. Please check with store manager.")
    }
}

function buy_banana()
{
    //first time click
    if (banana_quantity == document.getElementById("banana_quantity").value && document.getElementById("banana_to_buy").value <= banana_quantity)
    {
        //add a row for banana
        var E1 = document.createElement("tr")
        E1.id = "banana info"
        document.getElementById("shopping cart").appendChild(E1)

        //add banana name
        var E2 = document.createElement("th")
        var p1 = document.createTextNode("Banana")
        E2.appendChild(p1)
        E1.appendChild(E2)

        //change available quantity
        banana_to_buy = document.getElementById("banana_to_buy").value
        banana_quantity = banana_quantity - banana_to_buy
        //window.alert(banana_quantity);
        document.getElementById("banana_quantity").innerHTML = banana_quantity

        //add banana bought quantity 
        var E3 = document.createElement("th")
        E3.id = "banana_bought"
        E1.appendChild(E3)
        banana_bought = banana_bought + banana_to_buy
        banana_bought = parseInt(banana_bought,10)
        document.getElementById("banana_bought").value = banana_bought
        document.getElementById("banana_bought").innerHTML = banana_bought
        
        //add price of each item
        var E4 = document.createElement("th")
        E4.id = "banana_price_each"
        E1.append(E4)
        document.getElementById("banana_price_each").value = banana_price
        document.getElementById("banana_price_each").innerHTML = banana_price

        //add subtotal of banana before tax
        var E5 = document.createElement("th")
        E5.id = "banana_subtotal"
        E1.append(E5)
        var banana_subtotal = banana_price * document.getElementById("banana_bought").value
        document.getElementById("banana_subtotal").value = banana_subtotal
        document.getElementById("banana_subtotal").innerHTML = banana_subtotal

        //add banana tax
        var E6 = document.createElement("th")
        E6.id = "banana_tax"
        E1.appendChild(E6)
        var banana_tax = banana_tax_rate * document.getElementById("banana_subtotal").value
        document.getElementById("banana_tax").value = banana_tax
        document.getElementById("banana_tax").innerHTML = banana_tax

        //add total including tax
        var E7 = document.createElement("th")
        E7.id = "banana_total"
        E1.appendChild(E7)
        var banana_total = banana_tax + banana_subtotal
        document.getElementById("banana_total").value = banana_total
        document.getElementById("banana_total").innerHTML = banana_total

        //add a plus button
        var E8 = document.createElement("th")
        var banana_btn_plus = document.createElement('input')
        banana_btn_plus.type = "button"
        banana_btn_plus.value = "+"
        
        banana_btn_plus.onclick = (function banana_plus()
        {
        
        if(banana_bought<document.getElementById("banana_quantity").value){
        banana_quantity--
        document.getElementById("banana_quantity").innerHTML = banana_quantity
        
        banana_bought = parseInt(document.getElementById("banana_bought").value,10)
        banana_bought++
        document.getElementById("banana_bought").innerHTML = banana_bought
        document.getElementById("banana_bought").value = banana_bought

        banana_subtotal = banana_bought*banana_price
        document.getElementById("banana_subtotal").innerHTML = banana_subtotal
        document.getElementById("banana_subtotal").value = banana_subtotal

        banana_tax = banana_subtotal*banana_tax_rate
        document.getElementById("banana_tax").innerHTML = banana_tax
        document.getElementById("banana_tax").value = banana_tax

        banana_total = banana_subtotal + banana_tax
        document.getElementById("banana_total").innerHTML = banana_total
        document.getElementById("banana_total").value = banana_total
        }
    else (window.alert("Ah oh, there is no banana available. Please check with store manager."))})

        E8.appendChild(banana_btn_plus)
        E1.appendChild(E8)

        //add a minus button
        var E9 = document.createElement("th")
        var banana_btn_minus = document.createElement('input')
        banana_btn_minus.type = "button"
        banana_btn_minus.value = "-"

        banana_btn_minus.onclick = (function banana_minus()
    {
        
        if(banana_bought > 0){
        banana_quantity++
        document.getElementById("banana_quantity").innerHTML = banana_quantity

        banana_bought = parseInt(document.getElementById("banana_bought").value,10)
        banana_bought--
        document.getElementById("banana_bought").innerHTML = banana_bought
        document.getElementById("banana_bought").value = banana_bought

        banana_subtotal = banana_bought*banana_price
        document.getElementById("banana_subtotal").innerHTML = banana_subtotal
        document.getElementById("banana_subtotal").value = banana_subtotal

        banana_tax = banana_subtotal*banana_tax_rate
        document.getElementById("banana_tax").innerHTML = banana_tax
        document.getElementById("banana_tax").value = banana_tax

        banana_total = banana_subtotal + banana_tax
        document.getElementById("banana_total").innerHTML = banana_total
        document.getElementById("banana_total").value = banana_total
    }
        else (window.alert("Ah oh, there is no banana available. Please check with store manager."))
    })
        
        E9.appendChild(banana_btn_minus)
        E1.appendChild(E9)
        
        //add a delete button
        var E10 = document.createElement("th")
        var banana_btn_delete = document.createElement('input')
        banana_btn_delete.type = "button"
        banana_btn_delete.value = "delete"
        banana_btn_delete.onclick = (function banana_delete(){
            var banana_remove = document.getElementById("banana info")
            banana_remove.parentNode.removeChild(banana_remove)
            //reset banana quantity back to original value
            banana_quantity = 5;
            document.getElementById("banana_quantity").value = banana_quantity
            document.getElementById("banana_quantity").innerHTML = banana_quantity
        })
        E10.appendChild(banana_btn_delete)
        E1.appendChild(E10)

    }
    //second time click
    else if (banana_quantity < document.getElementById("banana_quantity").value && banana_quantity > 0 && document.getElementById("banana_to_buy").value <= banana_quantity)
    {
        //second click to modify value
        banana_to_buy = parseInt(document.getElementById("banana_to_buy").value,10)
        banana_quantity = banana_quantity - banana_to_buy
        document.getElementById("banana_quantity").innerHTML = banana_quantity
        
        //update the banana bought
        banana_bought = parseInt(document.getElementById("banana_bought").value,10)
        banana_bought = banana_bought + banana_to_buy
        document.getElementById("banana_bought").innerHTML = banana_bought
        document.getElementById("banana_bought").value = banana_bought

        //update the subtotal
        banana_subtotal = banana_bought*banana_price
        document.getElementById("banana_subtotal").innerHTML = banana_subtotal
        document.getElementById("banana_subtotal").value = banana_subtotal

        //update tax 
        banana_tax = banana_subtotal*banana_tax_rate
        document.getElementById("banana_tax").innerHTML = banana_tax
        document.getElementById("banana_tax").value = banana_tax

        //update total including tax
        banana_total = banana_subtotal + banana_tax
        document.getElementById("banana_total").innerHTML = banana_total
        document.getElementById("banana_total").value = banana_total
    }
    else 
    {
        window.alert("Ah oh, there is no banana available. Please check with store manager.")
    }
}

function buy_blueberry()
{
    //first time click
    if (blueberry_quantity == document.getElementById("blueberry_quantity").value && document.getElementById("blueberry_to_buy").value <= blueberry_quantity)
    {
        //add a row for blueberry
        var E1 = document.createElement("tr")
        E1.id = "blueberry info"
        document.getElementById("shopping cart").appendChild(E1)

        //add blueberry name
        var E2 = document.createElement("th")
        var p1 = document.createTextNode("Blueberry")
        E2.appendChild(p1)
        E1.appendChild(E2)

        //change available quantity
        blueberry_to_buy = document.getElementById("blueberry_to_buy").value
        blueberry_quantity = blueberry_quantity - blueberry_to_buy
        //window.alert(blueberry_quantity);
        document.getElementById("blueberry_quantity").innerHTML = blueberry_quantity

        //add blueberry bought quantity 
        var E3 = document.createElement("th")
        E3.id = "blueberry_bought"
        E1.appendChild(E3)
        blueberry_bought = blueberry_bought + blueberry_to_buy
        blueberry_bought = parseInt(blueberry_bought,10)
        document.getElementById("blueberry_bought").value = blueberry_bought
        document.getElementById("blueberry_bought").innerHTML = blueberry_bought
        
        //add price of each item
        var E4 = document.createElement("th")
        E4.id = "blueberry_price_each"
        E1.append(E4)
        document.getElementById("blueberry_price_each").value = blueberry_price
        document.getElementById("blueberry_price_each").innerHTML = blueberry_price

        //add subtotal of blueberry before tax
        var E5 = document.createElement("th")
        E5.id = "blueberry_subtotal"
        E1.append(E5)
        var blueberry_subtotal = blueberry_price * document.getElementById("blueberry_bought").value
        document.getElementById("blueberry_subtotal").value = blueberry_subtotal
        document.getElementById("blueberry_subtotal").innerHTML = blueberry_subtotal

        //add blueberry tax
        var E6 = document.createElement("th")
        E6.id = "blueberry_tax"
        E1.appendChild(E6)
        var blueberry_tax = blueberry_tax_rate * document.getElementById("blueberry_subtotal").value
        document.getElementById("blueberry_tax").value = blueberry_tax
        document.getElementById("blueberry_tax").innerHTML = blueberry_tax

        //add total including tax
        var E7 = document.createElement("th")
        E7.id = "blueberry_total"
        E1.appendChild(E7)
        var blueberry_total = blueberry_tax + blueberry_subtotal
        document.getElementById("blueberry_total").value = blueberry_total
        document.getElementById("blueberry_total").innerHTML = blueberry_total

        //add a plus button
        var E8 = document.createElement("th")
        var blueberry_btn_plus = document.createElement('input')
        blueberry_btn_plus.type = "button"
        blueberry_btn_plus.value = "+"
        
        blueberry_btn_plus.onclick = (function blueberry_plus()
        {
        
        if(blueberry_bought<document.getElementById("blueberry_quantity").value){
        blueberry_quantity--
        document.getElementById("blueberry_quantity").innerHTML = blueberry_quantity
        
        blueberry_bought = parseInt(document.getElementById("blueberry_bought").value,10)
        blueberry_bought++
        document.getElementById("blueberry_bought").innerHTML = blueberry_bought
        document.getElementById("blueberry_bought").value = blueberry_bought

        blueberry_subtotal = blueberry_bought*blueberry_price
        document.getElementById("blueberry_subtotal").innerHTML = blueberry_subtotal
        document.getElementById("blueberry_subtotal").value = blueberry_subtotal

        blueberry_tax = blueberry_subtotal*blueberry_tax_rate
        document.getElementById("blueberry_tax").innerHTML = blueberry_tax
        document.getElementById("blueberry_tax").value = blueberry_tax

        blueberry_total = blueberry_subtotal + blueberry_tax
        document.getElementById("blueberry_total").innerHTML = blueberry_total
        document.getElementById("blueberry_total").value = blueberry_total
        }
    else (window.alert("Ah oh, there is no blueberry available. Please check with store manager."))})

        E8.appendChild(blueberry_btn_plus)
        E1.appendChild(E8)

        //add a minus button
        var E9 = document.createElement("th")
        var blueberry_btn_minus = document.createElement('input')
        blueberry_btn_minus.type = "button"
        blueberry_btn_minus.value = "-"

        blueberry_btn_minus.onclick = (function blueberry_minus()
    {
        
        if(blueberry_bought > 0){
        blueberry_quantity++
        document.getElementById("blueberry_quantity").innerHTML = blueberry_quantity

        blueberry_bought = parseInt(document.getElementById("blueberry_bought").value,10)
        blueberry_bought--
        document.getElementById("blueberry_bought").innerHTML = blueberry_bought
        document.getElementById("blueberry_bought").value = blueberry_bought

        blueberry_subtotal = blueberry_bought*blueberry_price
        document.getElementById("blueberry_subtotal").innerHTML = blueberry_subtotal
        document.getElementById("blueberry_subtotal").value = blueberry_subtotal

        blueberry_tax = blueberry_subtotal*blueberry_tax_rate
        document.getElementById("blueberry_tax").innerHTML = blueberry_tax
        document.getElementById("blueberry_tax").value = blueberry_tax

        blueberry_total = blueberry_subtotal + blueberry_tax
        document.getElementById("blueberry_total").innerHTML = blueberry_total
        document.getElementById("blueberry_total").value = blueberry_total
    }
        else (window.alert("Ah oh, there is no blueberry available. Please check with store manager."))
    })
        
        E9.appendChild(blueberry_btn_minus)
        E1.appendChild(E9)
        
        //add a delete button
        var E10 = document.createElement("th")
        var blueberry_btn_delete = document.createElement('input')
        blueberry_btn_delete.type = "button"
        blueberry_btn_delete.value = "delete"
        blueberry_btn_delete.onclick = (function blueberry_delete(){
            var blueberry_remove = document.getElementById("blueberry info")
            blueberry_remove.parentNode.removeChild(blueberry_remove)
            //reset blueberry quantity back to original value
            blueberry_quantity = 5;
            document.getElementById("blueberry_quantity").value = blueberry_quantity
            document.getElementById("blueberry_quantity").innerHTML = blueberry_quantity
        })
        E10.appendChild(blueberry_btn_delete)
        E1.appendChild(E10)

    }
    //second time click
    else if (blueberry_quantity < document.getElementById("blueberry_quantity").value && blueberry_quantity > 0 && document.getElementById("blueberry_to_buy").value <= blueberry_quantity)
    {
        //second click to modify value
        blueberry_to_buy = parseInt(document.getElementById("blueberry_to_buy").value,10)
        blueberry_quantity = blueberry_quantity - blueberry_to_buy
        document.getElementById("blueberry_quantity").innerHTML = blueberry_quantity
        
        //update the blueberry bought
        blueberry_bought = parseInt(document.getElementById("blueberry_bought").value,10)
        blueberry_bought = blueberry_bought + blueberry_to_buy
        document.getElementById("blueberry_bought").innerHTML = blueberry_bought
        document.getElementById("blueberry_bought").value = blueberry_bought

        //update the subtotal
        blueberry_subtotal = blueberry_bought*blueberry_price
        document.getElementById("blueberry_subtotal").innerHTML = blueberry_subtotal
        document.getElementById("blueberry_subtotal").value = blueberry_subtotal

        //update tax 
        blueberry_tax = blueberry_subtotal*blueberry_tax_rate
        document.getElementById("blueberry_tax").innerHTML = blueberry_tax
        document.getElementById("blueberry_tax").value = blueberry_tax

        //update total including tax
        blueberry_total = blueberry_subtotal + blueberry_tax
        document.getElementById("blueberry_total").innerHTML = blueberry_total
        document.getElementById("blueberry_total").value = blueberry_total
    }
    else 
    {
        window.alert("Ah oh, there is no blueberry available. Please check with store manager.")
    }
}

function buy_cherry()
{
    //first time click
    if (cherry_quantity == document.getElementById("cherry_quantity").value && document.getElementById("cherry_to_buy").value <= cherry_quantity)
    {
        //add a row for cherry
        var E1 = document.createElement("tr")
        E1.id = "cherry info"
        document.getElementById("shopping cart").appendChild(E1)

        //add cherry name
        var E2 = document.createElement("th")
        var p1 = document.createTextNode("Cherry")
        E2.appendChild(p1)
        E1.appendChild(E2)

        //change available quantity
        cherry_to_buy = document.getElementById("cherry_to_buy").value
        cherry_quantity = cherry_quantity - cherry_to_buy
        //window.alert(cherry_quantity);
        document.getElementById("cherry_quantity").innerHTML = cherry_quantity

        //add cherry bought quantity 
        var E3 = document.createElement("th")
        E3.id = "cherry_bought"
        E1.appendChild(E3)
        cherry_bought = cherry_bought + cherry_to_buy
        cherry_bought = parseInt(cherry_bought,10)
        document.getElementById("cherry_bought").value = cherry_bought
        document.getElementById("cherry_bought").innerHTML = cherry_bought
        
        //add price of each item
        var E4 = document.createElement("th")
        E4.id = "cherry_price_each"
        E1.append(E4)
        document.getElementById("cherry_price_each").value = cherry_price
        document.getElementById("cherry_price_each").innerHTML = cherry_price

        //add subtotal of cherry before tax
        var E5 = document.createElement("th")
        E5.id = "cherry_subtotal"
        E1.append(E5)
        var cherry_subtotal = cherry_price * document.getElementById("cherry_bought").value
        document.getElementById("cherry_subtotal").value = cherry_subtotal
        document.getElementById("cherry_subtotal").innerHTML = cherry_subtotal

        //add cherry tax
        var E6 = document.createElement("th")
        E6.id = "cherry_tax"
        E1.appendChild(E6)
        var cherry_tax = cherry_tax_rate * document.getElementById("cherry_subtotal").value
        document.getElementById("cherry_tax").value = cherry_tax
        document.getElementById("cherry_tax").innerHTML = cherry_tax

        //add total including tax
        var E7 = document.createElement("th")
        E7.id = "cherry_total"
        E1.appendChild(E7)
        var cherry_total = cherry_tax + cherry_subtotal
        document.getElementById("cherry_total").value = cherry_total
        document.getElementById("cherry_total").innerHTML = cherry_total

        //add a plus button
        var E8 = document.createElement("th")
        var cherry_btn_plus = document.createElement('input')
        cherry_btn_plus.type = "button"
        cherry_btn_plus.value = "+"
        
        cherry_btn_plus.onclick = (function cherry_plus()
        {
        
        if(cherry_bought<document.getElementById("cherry_quantity").value){
        cherry_quantity--
        document.getElementById("cherry_quantity").innerHTML = cherry_quantity
        
        cherry_bought = parseInt(document.getElementById("cherry_bought").value,10)
        cherry_bought++
        document.getElementById("cherry_bought").innerHTML = cherry_bought
        document.getElementById("cherry_bought").value = cherry_bought

        cherry_subtotal = cherry_bought*cherry_price
        document.getElementById("cherry_subtotal").innerHTML = cherry_subtotal
        document.getElementById("cherry_subtotal").value = cherry_subtotal

        cherry_tax = cherry_subtotal*cherry_tax_rate
        document.getElementById("cherry_tax").innerHTML = cherry_tax
        document.getElementById("cherry_tax").value = cherry_tax

        cherry_total = cherry_subtotal + cherry_tax
        document.getElementById("cherry_total").innerHTML = cherry_total
        document.getElementById("cherry_total").value = cherry_total
        }
    else (window.alert("Ah oh, there is no cherry available. Please check with store manager."))})

        E8.appendChild(cherry_btn_plus)
        E1.appendChild(E8)

        //add a minus button
        var E9 = document.createElement("th")
        var cherry_btn_minus = document.createElement('input')
        cherry_btn_minus.type = "button"
        cherry_btn_minus.value = "-"

        cherry_btn_minus.onclick = (function cherry_minus()
    {
        
        if(cherry_bought > 0){
        cherry_quantity++
        document.getElementById("cherry_quantity").innerHTML = cherry_quantity

        cherry_bought = parseInt(document.getElementById("cherry_bought").value,10)
        cherry_bought--
        document.getElementById("cherry_bought").innerHTML = cherry_bought
        document.getElementById("cherry_bought").value = cherry_bought

        cherry_subtotal = cherry_bought*cherry_price
        document.getElementById("cherry_subtotal").innerHTML = cherry_subtotal
        document.getElementById("cherry_subtotal").value = cherry_subtotal

        cherry_tax = cherry_subtotal*cherry_tax_rate
        document.getElementById("cherry_tax").innerHTML = cherry_tax
        document.getElementById("cherry_tax").value = cherry_tax

        cherry_total = cherry_subtotal + cherry_tax
        document.getElementById("cherry_total").innerHTML = cherry_total
        document.getElementById("cherry_total").value = cherry_total
    }
        else (window.alert("Ah oh, there is no cherry available. Please check with store manager."))
    })
        
        E9.appendChild(cherry_btn_minus)
        E1.appendChild(E9)
        
        //add a delete button
        var E10 = document.createElement("th")
        var cherry_btn_delete = document.createElement('input')
        cherry_btn_delete.type = "button"
        cherry_btn_delete.value = "delete"
        cherry_btn_delete.onclick = (function cherry_delete(){
            var cherry_remove = document.getElementById("cherry info")
            cherry_remove.parentNode.removeChild(cherry_remove)
            //reset cherry quantity back to original value
            cherry_quantity = 5;
            document.getElementById("cherry_quantity").value = cherry_quantity
            document.getElementById("cherry_quantity").innerHTML = cherry_quantity
        })
        E10.appendChild(cherry_btn_delete)
        E1.appendChild(E10)

    }
    //second time click
    else if (cherry_quantity < document.getElementById("cherry_quantity").value && cherry_quantity > 0 && document.getElementById("cherry_to_buy").value <= cherry_quantity)
    {
        //second click to modify value
        cherry_to_buy = parseInt(document.getElementById("cherry_to_buy").value,10)
        cherry_quantity = cherry_quantity - cherry_to_buy
        document.getElementById("cherry_quantity").innerHTML = cherry_quantity
        
        //update the cherry bought
        cherry_bought = parseInt(document.getElementById("cherry_bought").value,10)
        cherry_bought = cherry_bought + cherry_to_buy
        document.getElementById("cherry_bought").innerHTML = cherry_bought
        document.getElementById("cherry_bought").value = cherry_bought

        //update the subtotal
        cherry_subtotal = cherry_bought*cherry_price
        document.getElementById("cherry_subtotal").innerHTML = cherry_subtotal
        document.getElementById("cherry_subtotal").value = cherry_subtotal

        //update tax 
        cherry_tax = cherry_subtotal*cherry_tax_rate
        document.getElementById("cherry_tax").innerHTML = cherry_tax
        document.getElementById("cherry_tax").value = cherry_tax

        //update total including tax
        cherry_total = cherry_subtotal + cherry_tax
        document.getElementById("cherry_total").innerHTML = cherry_total
        document.getElementById("cherry_total").value = cherry_total
    }
    else 
    {
        window.alert("Ah oh, there is no cherry available. Please check with store manager.")
    }
}

function buy_coconut()
{
    //first time click
    if (coconut_quantity == document.getElementById("coconut_quantity").value && document.getElementById("coconut_to_buy").value <= coconut_quantity)
    {
        //add a row for coconut
        var E1 = document.createElement("tr")
        E1.id = "coconut info"
        document.getElementById("shopping cart").appendChild(E1)

        //add coconut name
        var E2 = document.createElement("th")
        var p1 = document.createTextNode("Coconut")
        E2.appendChild(p1)
        E1.appendChild(E2)

        //change available quantity
        coconut_to_buy = document.getElementById("coconut_to_buy").value
        coconut_quantity = coconut_quantity - coconut_to_buy
        //window.alert(coconut_quantity);
        document.getElementById("coconut_quantity").innerHTML = coconut_quantity

        //add coconut bought quantity 
        var E3 = document.createElement("th")
        E3.id = "coconut_bought"
        E1.appendChild(E3)
        coconut_bought = coconut_bought + coconut_to_buy
        coconut_bought = parseInt(coconut_bought,10)
        document.getElementById("coconut_bought").value = coconut_bought
        document.getElementById("coconut_bought").innerHTML = coconut_bought
        
        //add price of each item
        var E4 = document.createElement("th")
        E4.id = "coconut_price_each"
        E1.append(E4)
        document.getElementById("coconut_price_each").value = coconut_price
        document.getElementById("coconut_price_each").innerHTML = coconut_price

        //add subtotal of coconut before tax
        var E5 = document.createElement("th")
        E5.id = "coconut_subtotal"
        E1.append(E5)
        var coconut_subtotal = coconut_price * document.getElementById("coconut_bought").value
        document.getElementById("coconut_subtotal").value = coconut_subtotal
        document.getElementById("coconut_subtotal").innerHTML = coconut_subtotal

        //add coconut tax
        var E6 = document.createElement("th")
        E6.id = "coconut_tax"
        E1.appendChild(E6)
        var coconut_tax = coconut_tax_rate * document.getElementById("coconut_subtotal").value
        document.getElementById("coconut_tax").value = coconut_tax
        document.getElementById("coconut_tax").innerHTML = coconut_tax

        //add total including tax
        var E7 = document.createElement("th")
        E7.id = "coconut_total"
        E1.appendChild(E7)
        var coconut_total = coconut_tax + coconut_subtotal
        document.getElementById("coconut_total").value = coconut_total
        document.getElementById("coconut_total").innerHTML = coconut_total

        //add a plus button
        var E8 = document.createElement("th")
        var coconut_btn_plus = document.createElement('input')
        coconut_btn_plus.type = "button"
        coconut_btn_plus.value = "+"
        
        coconut_btn_plus.onclick = (function coconut_plus()
        {
        
        if(coconut_bought<document.getElementById("coconut_quantity").value){
        coconut_quantity--
        document.getElementById("coconut_quantity").innerHTML = coconut_quantity
        
        coconut_bought = parseInt(document.getElementById("coconut_bought").value,10)
        coconut_bought++
        document.getElementById("coconut_bought").innerHTML = coconut_bought
        document.getElementById("coconut_bought").value = coconut_bought

        coconut_subtotal = coconut_bought*coconut_price
        document.getElementById("coconut_subtotal").innerHTML = coconut_subtotal
        document.getElementById("coconut_subtotal").value = coconut_subtotal

        coconut_tax = coconut_subtotal*coconut_tax_rate
        document.getElementById("coconut_tax").innerHTML = coconut_tax
        document.getElementById("coconut_tax").value = coconut_tax

        coconut_total = coconut_subtotal + coconut_tax
        document.getElementById("coconut_total").innerHTML = coconut_total
        document.getElementById("coconut_total").value = coconut_total
        }
    else (window.alert("Ah oh, there is no coconut available. Please check with store manager."))})

        E8.appendChild(coconut_btn_plus)
        E1.appendChild(E8)

        //add a minus button
        var E9 = document.createElement("th")
        var coconut_btn_minus = document.createElement('input')
        coconut_btn_minus.type = "button"
        coconut_btn_minus.value = "-"

        coconut_btn_minus.onclick = (function coconut_minus()
    {
        
        if(coconut_bought > 0){
        coconut_quantity++
        document.getElementById("coconut_quantity").innerHTML = coconut_quantity

        coconut_bought = parseInt(document.getElementById("coconut_bought").value,10)
        coconut_bought--
        document.getElementById("coconut_bought").innerHTML = coconut_bought
        document.getElementById("coconut_bought").value = coconut_bought

        coconut_subtotal = coconut_bought*coconut_price
        document.getElementById("coconut_subtotal").innerHTML = coconut_subtotal
        document.getElementById("coconut_subtotal").value = coconut_subtotal

        coconut_tax = coconut_subtotal*coconut_tax_rate
        document.getElementById("coconut_tax").innerHTML = coconut_tax
        document.getElementById("coconut_tax").value = coconut_tax

        coconut_total = coconut_subtotal + coconut_tax
        document.getElementById("coconut_total").innerHTML = coconut_total
        document.getElementById("coconut_total").value = coconut_total
    }
        else (window.alert("Ah oh, there is no coconut available. Please check with store manager."))
    })
        
        E9.appendChild(coconut_btn_minus)
        E1.appendChild(E9)
        
        //add a delete button
        var E10 = document.createElement("th")
        var coconut_btn_delete = document.createElement('input')
        coconut_btn_delete.type = "button"
        coconut_btn_delete.value = "delete"
        coconut_btn_delete.onclick = (function coconut_delete(){
            var coconut_remove = document.getElementById("coconut info")
            coconut_remove.parentNode.removeChild(coconut_remove)
            //reset coconut quantity back to original value
            coconut_quantity = 5;
            document.getElementById("coconut_quantity").value = coconut_quantity
            document.getElementById("coconut_quantity").innerHTML = coconut_quantity
        })
        E10.appendChild(coconut_btn_delete)
        E1.appendChild(E10)

    }
    //second time click
    else if (coconut_quantity < document.getElementById("coconut_quantity").value && coconut_quantity > 0 && document.getElementById("coconut_to_buy").value <= coconut_quantity)
    {
        //second click to modify value
        coconut_to_buy = parseInt(document.getElementById("coconut_to_buy").value,10)
        coconut_quantity = coconut_quantity - coconut_to_buy
        document.getElementById("coconut_quantity").innerHTML = coconut_quantity
        
        //update the coconut bought
        coconut_bought = parseInt(document.getElementById("coconut_bought").value,10)
        coconut_bought = coconut_bought + coconut_to_buy
        document.getElementById("coconut_bought").innerHTML = coconut_bought
        document.getElementById("coconut_bought").value = coconut_bought

        //update the subtotal
        coconut_subtotal = coconut_bought*coconut_price
        document.getElementById("coconut_subtotal").innerHTML = coconut_subtotal
        document.getElementById("coconut_subtotal").value = coconut_subtotal

        //update tax 
        coconut_tax = coconut_subtotal*coconut_tax_rate
        document.getElementById("coconut_tax").innerHTML = coconut_tax
        document.getElementById("coconut_tax").value = coconut_tax

        //update total including tax
        coconut_total = coconut_subtotal + coconut_tax
        document.getElementById("coconut_total").innerHTML = coconut_total
        document.getElementById("coconut_total").value = coconut_total
    }
    else 
    {
        window.alert("Ah oh, there is no coconut available. Please check with store manager.")
    }
}

function buy_grape()
{
    //first time click
    if (grape_quantity == document.getElementById("grape_quantity").value && document.getElementById("grape_to_buy").value <= grape_quantity)
    {
        //add a row for grape
        var E1 = document.createElement("tr")
        E1.id = "grape info"
        document.getElementById("shopping cart").appendChild(E1)

        //add grape name
        var E2 = document.createElement("th")
        var p1 = document.createTextNode("Grape")
        E2.appendChild(p1)
        E1.appendChild(E2)

        //change available quantity
        grape_to_buy = document.getElementById("grape_to_buy").value
        grape_quantity = grape_quantity - grape_to_buy
        //window.alert(grape_quantity);
        document.getElementById("grape_quantity").innerHTML = grape_quantity

        //add grape bought quantity 
        var E3 = document.createElement("th")
        E3.id = "grape_bought"
        E1.appendChild(E3)
        grape_bought = grape_bought + grape_to_buy
        grape_bought = parseInt(grape_bought,10)
        document.getElementById("grape_bought").value = grape_bought
        document.getElementById("grape_bought").innerHTML = grape_bought
        
        //add price of each item
        var E4 = document.createElement("th")
        E4.id = "grape_price_each"
        E1.append(E4)
        document.getElementById("grape_price_each").value = grape_price
        document.getElementById("grape_price_each").innerHTML = grape_price

        //add subtotal of grape before tax
        var E5 = document.createElement("th")
        E5.id = "grape_subtotal"
        E1.append(E5)
        var grape_subtotal = grape_price * document.getElementById("grape_bought").value
        document.getElementById("grape_subtotal").value = grape_subtotal
        document.getElementById("grape_subtotal").innerHTML = grape_subtotal

        //add grape tax
        var E6 = document.createElement("th")
        E6.id = "grape_tax"
        E1.appendChild(E6)
        var grape_tax = grape_tax_rate * document.getElementById("grape_subtotal").value
        document.getElementById("grape_tax").value = grape_tax
        document.getElementById("grape_tax").innerHTML = grape_tax

        //add total including tax
        var E7 = document.createElement("th")
        E7.id = "grape_total"
        E1.appendChild(E7)
        var grape_total = grape_tax + grape_subtotal
        document.getElementById("grape_total").value = grape_total
        document.getElementById("grape_total").innerHTML = grape_total

        //add a plus button
        var E8 = document.createElement("th")
        var grape_btn_plus = document.createElement('input')
        grape_btn_plus.type = "button"
        grape_btn_plus.value = "+"
        
        grape_btn_plus.onclick = (function grape_plus()
        {
        
        if(grape_bought<document.getElementById("grape_quantity").value){
        grape_quantity--
        document.getElementById("grape_quantity").innerHTML = grape_quantity
        
        grape_bought = parseInt(document.getElementById("grape_bought").value,10)
        grape_bought++
        document.getElementById("grape_bought").innerHTML = grape_bought
        document.getElementById("grape_bought").value = grape_bought

        grape_subtotal = grape_bought*grape_price
        document.getElementById("grape_subtotal").innerHTML = grape_subtotal
        document.getElementById("grape_subtotal").value = grape_subtotal

        grape_tax = grape_subtotal*grape_tax_rate
        document.getElementById("grape_tax").innerHTML = grape_tax
        document.getElementById("grape_tax").value = grape_tax

        grape_total = grape_subtotal + grape_tax
        document.getElementById("grape_total").innerHTML = grape_total
        document.getElementById("grape_total").value = grape_total
        }
    else (window.alert("Ah oh, there is no grape available. Please check with store manager."))})

        E8.appendChild(grape_btn_plus)
        E1.appendChild(E8)

        //add a minus button
        var E9 = document.createElement("th")
        var grape_btn_minus = document.createElement('input')
        grape_btn_minus.type = "button"
        grape_btn_minus.value = "-"

        grape_btn_minus.onclick = (function grape_minus()
    {
        
        if(grape_bought > 0){
        grape_quantity++
        document.getElementById("grape_quantity").innerHTML = grape_quantity

        grape_bought = parseInt(document.getElementById("grape_bought").value,10)
        grape_bought--
        document.getElementById("grape_bought").innerHTML = grape_bought
        document.getElementById("grape_bought").value = grape_bought

        grape_subtotal = grape_bought*grape_price
        document.getElementById("grape_subtotal").innerHTML = grape_subtotal
        document.getElementById("grape_subtotal").value = grape_subtotal

        grape_tax = grape_subtotal*grape_tax_rate
        document.getElementById("grape_tax").innerHTML = grape_tax
        document.getElementById("grape_tax").value = grape_tax

        grape_total = grape_subtotal + grape_tax
        document.getElementById("grape_total").innerHTML = grape_total
        document.getElementById("grape_total").value = grape_total
    }
        else (window.alert("Ah oh, there is no grape available. Please check with store manager."))
    })
        
        E9.appendChild(grape_btn_minus)
        E1.appendChild(E9)
        
        //add a delete button
        var E10 = document.createElement("th")
        var grape_btn_delete = document.createElement('input')
        grape_btn_delete.type = "button"
        grape_btn_delete.value = "delete"
        grape_btn_delete.onclick = (function grape_delete(){
            var grape_remove = document.getElementById("grape info")
            grape_remove.parentNode.removeChild(grape_remove)
            //reset grape quantity back to original value
            grape_quantity = 5;
            document.getElementById("grape_quantity").value = grape_quantity
            document.getElementById("grape_quantity").innerHTML = grape_quantity
        })
        E10.appendChild(grape_btn_delete)
        E1.appendChild(E10)

    }
    //second time click
    else if (grape_quantity < document.getElementById("grape_quantity").value && grape_quantity > 0 && document.getElementById("grape_to_buy").value <= grape_quantity)
    {
        //second click to modify value
        grape_to_buy = parseInt(document.getElementById("grape_to_buy").value,10)
        grape_quantity = grape_quantity - grape_to_buy
        document.getElementById("grape_quantity").innerHTML = grape_quantity
        
        //update the grape bought
        grape_bought = parseInt(document.getElementById("grape_bought").value,10)
        grape_bought = grape_bought + grape_to_buy
        document.getElementById("grape_bought").innerHTML = grape_bought
        document.getElementById("grape_bought").value = grape_bought

        //update the subtotal
        grape_subtotal = grape_bought*grape_price
        document.getElementById("grape_subtotal").innerHTML = grape_subtotal
        document.getElementById("grape_subtotal").value = grape_subtotal

        //update tax 
        grape_tax = grape_subtotal*grape_tax_rate
        document.getElementById("grape_tax").innerHTML = grape_tax
        document.getElementById("grape_tax").value = grape_tax

        //update total including tax
        grape_total = grape_subtotal + grape_tax
        document.getElementById("grape_total").innerHTML = grape_total
        document.getElementById("grape_total").value = grape_total
    }
    else 
    {
        window.alert("Ah oh, there is no grape available. Please check with store manager.")
    }
}

function buy_peach()
{
    //first time click
    if (peach_quantity == document.getElementById("peach_quantity").value && document.getElementById("peach_to_buy").value <= peach_quantity)
    {
        //add a row for peach
        var E1 = document.createElement("tr")
        E1.id = "peach info"
        document.getElementById("shopping cart").appendChild(E1)

        //add peach name
        var E2 = document.createElement("th")
        var p1 = document.createTextNode("Peach")
        E2.appendChild(p1)
        E1.appendChild(E2)

        //change available quantity
        peach_to_buy = document.getElementById("peach_to_buy").value
        peach_quantity = peach_quantity - peach_to_buy
        //window.alert(peach_quantity);
        document.getElementById("peach_quantity").innerHTML = peach_quantity

        //add peach bought quantity 
        var E3 = document.createElement("th")
        E3.id = "peach_bought"
        E1.appendChild(E3)
        peach_bought = peach_bought + peach_to_buy
        peach_bought = parseInt(peach_bought,10)
        document.getElementById("peach_bought").value = peach_bought
        document.getElementById("peach_bought").innerHTML = peach_bought
        
        //add price of each item
        var E4 = document.createElement("th")
        E4.id = "peach_price_each"
        E1.append(E4)
        document.getElementById("peach_price_each").value = peach_price
        document.getElementById("peach_price_each").innerHTML = peach_price

        //add subtotal of peach before tax
        var E5 = document.createElement("th")
        E5.id = "peach_subtotal"
        E1.append(E5)
        var peach_subtotal = peach_price * document.getElementById("peach_bought").value
        document.getElementById("peach_subtotal").value = peach_subtotal
        document.getElementById("peach_subtotal").innerHTML = peach_subtotal

        //add peach tax
        var E6 = document.createElement("th")
        E6.id = "peach_tax"
        E1.appendChild(E6)
        var peach_tax = peach_tax_rate * document.getElementById("peach_subtotal").value
        document.getElementById("peach_tax").value = peach_tax
        document.getElementById("peach_tax").innerHTML = peach_tax

        //add total including tax
        var E7 = document.createElement("th")
        E7.id = "peach_total"
        E1.appendChild(E7)
        var peach_total = peach_tax + peach_subtotal
        document.getElementById("peach_total").value = peach_total
        document.getElementById("peach_total").innerHTML = peach_total

        //add a plus button
        var E8 = document.createElement("th")
        var peach_btn_plus = document.createElement('input')
        peach_btn_plus.type = "button"
        peach_btn_plus.value = "+"
        
        peach_btn_plus.onclick = (function peach_plus()
        {
        
        if(peach_bought<document.getElementById("peach_quantity").value){
        peach_quantity--
        document.getElementById("peach_quantity").innerHTML = peach_quantity
        
        peach_bought = parseInt(document.getElementById("peach_bought").value,10)
        peach_bought++
        document.getElementById("peach_bought").innerHTML = peach_bought
        document.getElementById("peach_bought").value = peach_bought

        peach_subtotal = peach_bought*peach_price
        document.getElementById("peach_subtotal").innerHTML = peach_subtotal
        document.getElementById("peach_subtotal").value = peach_subtotal

        peach_tax = peach_subtotal*peach_tax_rate
        document.getElementById("peach_tax").innerHTML = peach_tax
        document.getElementById("peach_tax").value = peach_tax

        peach_total = peach_subtotal + peach_tax
        document.getElementById("peach_total").innerHTML = peach_total
        document.getElementById("peach_total").value = peach_total
        }
    else (window.alert("Ah oh, there is no peach available. Please check with store manager."))})

        E8.appendChild(peach_btn_plus)
        E1.appendChild(E8)

        //add a minus button
        var E9 = document.createElement("th")
        var peach_btn_minus = document.createElement('input')
        peach_btn_minus.type = "button"
        peach_btn_minus.value = "-"

        peach_btn_minus.onclick = (function peach_minus()
    {
        
        if(peach_bought > 0){
        peach_quantity++
        document.getElementById("peach_quantity").innerHTML = peach_quantity

        peach_bought = parseInt(document.getElementById("peach_bought").value,10)
        peach_bought--
        document.getElementById("peach_bought").innerHTML = peach_bought
        document.getElementById("peach_bought").value = peach_bought

        peach_subtotal = peach_bought*peach_price
        document.getElementById("peach_subtotal").innerHTML = peach_subtotal
        document.getElementById("peach_subtotal").value = peach_subtotal

        peach_tax = peach_subtotal*peach_tax_rate
        document.getElementById("peach_tax").innerHTML = peach_tax
        document.getElementById("peach_tax").value = peach_tax

        peach_total = peach_subtotal + peach_tax
        document.getElementById("peach_total").innerHTML = peach_total
        document.getElementById("peach_total").value = peach_total
    }
        else (window.alert("Ah oh, there is no peach available. Please check with store manager."))
    })
        
        E9.appendChild(peach_btn_minus)
        E1.appendChild(E9)
        
        //add a delete button
        var E10 = document.createElement("th")
        var peach_btn_delete = document.createElement('input')
        peach_btn_delete.type = "button"
        peach_btn_delete.value = "delete"
        peach_btn_delete.onclick = (function peach_delete(){
            var peach_remove = document.getElementById("peach info")
            peach_remove.parentNode.removeChild(peach_remove)
            //reset peach quantity back to original value
            peach_quantity = 5;
            document.getElementById("peach_quantity").value = peach_quantity
            document.getElementById("peach_quantity").innerHTML = peach_quantity
        })
        E10.appendChild(peach_btn_delete)
        E1.appendChild(E10)

    }
    //second time click
    else if (peach_quantity < document.getElementById("peach_quantity").value && peach_quantity > 0 && document.getElementById("peach_to_buy").value <= peach_quantity)
    {
        //second click to modify value
        peach_to_buy = parseInt(document.getElementById("peach_to_buy").value,10)
        peach_quantity = peach_quantity - peach_to_buy
        document.getElementById("peach_quantity").innerHTML = peach_quantity
        
        //update the peach bought
        peach_bought = parseInt(document.getElementById("peach_bought").value,10)
        peach_bought = peach_bought + peach_to_buy
        document.getElementById("peach_bought").innerHTML = peach_bought
        document.getElementById("peach_bought").value = peach_bought

        //update the subtotal
        peach_subtotal = peach_bought*peach_price
        document.getElementById("peach_subtotal").innerHTML = peach_subtotal
        document.getElementById("peach_subtotal").value = peach_subtotal

        //update tax 
        peach_tax = peach_subtotal*peach_tax_rate
        document.getElementById("peach_tax").innerHTML = peach_tax
        document.getElementById("peach_tax").value = peach_tax

        //update total including tax
        peach_total = peach_subtotal + peach_tax
        document.getElementById("peach_total").innerHTML = peach_total
        document.getElementById("peach_total").value = peach_total
    }
    else 
    {
        window.alert("Ah oh, there is no peach available. Please check with store manager.")
    }
}

function buy_pear()
{
    //first time click
    if (pear_quantity == document.getElementById("pear_quantity").value && document.getElementById("pear_to_buy").value <= pear_quantity)
    {
        //add a row for pear
        var E1 = document.createElement("tr")
        E1.id = "pear info"
        document.getElementById("shopping cart").appendChild(E1)

        //add pear name
        var E2 = document.createElement("th")
        var p1 = document.createTextNode("Pear")
        E2.appendChild(p1)
        E1.appendChild(E2)

        //change available quantity
        pear_to_buy = document.getElementById("pear_to_buy").value
        pear_quantity = pear_quantity - pear_to_buy
        //window.alert(pear_quantity);
        document.getElementById("pear_quantity").innerHTML = pear_quantity

        //add pear bought quantity 
        var E3 = document.createElement("th")
        E3.id = "pear_bought"
        E1.appendChild(E3)
        pear_bought = pear_bought + pear_to_buy
        pear_bought = parseInt(pear_bought,10)
        document.getElementById("pear_bought").value = pear_bought
        document.getElementById("pear_bought").innerHTML = pear_bought
        
        //add price of each item
        var E4 = document.createElement("th")
        E4.id = "pear_price_each"
        E1.append(E4)
        document.getElementById("pear_price_each").value = pear_price
        document.getElementById("pear_price_each").innerHTML = pear_price

        //add subtotal of pear before tax
        var E5 = document.createElement("th")
        E5.id = "pear_subtotal"
        E1.append(E5)
        var pear_subtotal = pear_price * document.getElementById("pear_bought").value
        document.getElementById("pear_subtotal").value = pear_subtotal
        document.getElementById("pear_subtotal").innerHTML = pear_subtotal

        //add pear tax
        var E6 = document.createElement("th")
        E6.id = "pear_tax"
        E1.appendChild(E6)
        var pear_tax = pear_tax_rate * document.getElementById("pear_subtotal").value
        document.getElementById("pear_tax").value = pear_tax
        document.getElementById("pear_tax").innerHTML = pear_tax

        //add total including tax
        var E7 = document.createElement("th")
        E7.id = "pear_total"
        E1.appendChild(E7)
        var pear_total = pear_tax + pear_subtotal
        document.getElementById("pear_total").value = pear_total
        document.getElementById("pear_total").innerHTML = pear_total

        //add a plus button
        var E8 = document.createElement("th")
        var pear_btn_plus = document.createElement('input')
        pear_btn_plus.type = "button"
        pear_btn_plus.value = "+"
        
        pear_btn_plus.onclick = (function pear_plus()
        {
        
        if(pear_bought<document.getElementById("pear_quantity").value){
        pear_quantity--
        document.getElementById("pear_quantity").innerHTML = pear_quantity
        
        pear_bought = parseInt(document.getElementById("pear_bought").value,10)
        pear_bought++
        document.getElementById("pear_bought").innerHTML = pear_bought
        document.getElementById("pear_bought").value = pear_bought

        pear_subtotal = pear_bought*pear_price
        document.getElementById("pear_subtotal").innerHTML = pear_subtotal
        document.getElementById("pear_subtotal").value = pear_subtotal

        pear_tax = pear_subtotal*pear_tax_rate
        document.getElementById("pear_tax").innerHTML = pear_tax
        document.getElementById("pear_tax").value = pear_tax

        pear_total = pear_subtotal + pear_tax
        document.getElementById("pear_total").innerHTML = pear_total
        document.getElementById("pear_total").value = pear_total
        }
    else (window.alert("Ah oh, there is no pear available. Please check with store manager."))})

        E8.appendChild(pear_btn_plus)
        E1.appendChild(E8)

        //add a minus button
        var E9 = document.createElement("th")
        var pear_btn_minus = document.createElement('input')
        pear_btn_minus.type = "button"
        pear_btn_minus.value = "-"

        pear_btn_minus.onclick = (function pear_minus()
    {
        
        if(pear_bought > 0){
        pear_quantity++
        document.getElementById("pear_quantity").innerHTML = pear_quantity

        pear_bought = parseInt(document.getElementById("pear_bought").value,10)
        pear_bought--
        document.getElementById("pear_bought").innerHTML = pear_bought
        document.getElementById("pear_bought").value = pear_bought

        pear_subtotal = pear_bought*pear_price
        document.getElementById("pear_subtotal").innerHTML = pear_subtotal
        document.getElementById("pear_subtotal").value = pear_subtotal

        pear_tax = pear_subtotal*pear_tax_rate
        document.getElementById("pear_tax").innerHTML = pear_tax
        document.getElementById("pear_tax").value = pear_tax

        pear_total = pear_subtotal + pear_tax
        document.getElementById("pear_total").innerHTML = pear_total
        document.getElementById("pear_total").value = pear_total
    }
        else (window.alert("Ah oh, there is no pear available. Please check with store manager."))
    })
        
        E9.appendChild(pear_btn_minus)
        E1.appendChild(E9)
        
        //add a delete button
        var E10 = document.createElement("th")
        var pear_btn_delete = document.createElement('input')
        pear_btn_delete.type = "button"
        pear_btn_delete.value = "delete"
        pear_btn_delete.onclick = (function pear_delete(){
            var pear_remove = document.getElementById("pear info")
            pear_remove.parentNode.removeChild(pear_remove)
            //reset pear quantity back to original value
            pear_quantity = 5;
            document.getElementById("pear_quantity").value = pear_quantity
            document.getElementById("pear_quantity").innerHTML = pear_quantity
        })
        E10.appendChild(pear_btn_delete)
        E1.appendChild(E10)

    }
    //second time click
    else if (pear_quantity < document.getElementById("pear_quantity").value && pear_quantity > 0 && document.getElementById("pear_to_buy").value <= pear_quantity)
    {
        //second click to modify value
        pear_to_buy = parseInt(document.getElementById("pear_to_buy").value,10)
        pear_quantity = pear_quantity - pear_to_buy
        document.getElementById("pear_quantity").innerHTML = pear_quantity
        
        //update the pear bought
        pear_bought = parseInt(document.getElementById("pear_bought").value,10)
        pear_bought = pear_bought + pear_to_buy
        document.getElementById("pear_bought").innerHTML = pear_bought
        document.getElementById("pear_bought").value = pear_bought

        //update the subtotal
        pear_subtotal = pear_bought*pear_price
        document.getElementById("pear_subtotal").innerHTML = pear_subtotal
        document.getElementById("pear_subtotal").value = pear_subtotal

        //update tax 
        pear_tax = pear_subtotal*pear_tax_rate
        document.getElementById("pear_tax").innerHTML = pear_tax
        document.getElementById("pear_tax").value = pear_tax

        //update total including tax
        pear_total = pear_subtotal + pear_tax
        document.getElementById("pear_total").innerHTML = pear_total
        document.getElementById("pear_total").value = pear_total
    }
    else 
    {
        window.alert("Ah oh, there is no pear available. Please check with store manager.")
    }
}

function buy_pineapple()
{
    //first time click
    if (pineapple_quantity == document.getElementById("pineapple_quantity").value && document.getElementById("pineapple_to_buy").value <= pineapple_quantity)
    {
        //add a row for pineapple
        var E1 = document.createElement("tr")
        E1.id = "pineapple info"
        document.getElementById("shopping cart").appendChild(E1)

        //add pineapple name
        var E2 = document.createElement("th")
        var p1 = document.createTextNode("Pineapple")
        E2.appendChild(p1)
        E1.appendChild(E2)

        //change available quantity
        pineapple_to_buy = document.getElementById("pineapple_to_buy").value
        pineapple_quantity = pineapple_quantity - pineapple_to_buy
        //window.alert(pineapple_quantity);
        document.getElementById("pineapple_quantity").innerHTML = pineapple_quantity

        //add pineapple bought quantity 
        var E3 = document.createElement("th")
        E3.id = "pineapple_bought"
        E1.appendChild(E3)
        pineapple_bought = pineapple_bought + pineapple_to_buy
        pineapple_bought = parseInt(pineapple_bought,10)
        document.getElementById("pineapple_bought").value = pineapple_bought
        document.getElementById("pineapple_bought").innerHTML = pineapple_bought
        
        //add price of each item
        var E4 = document.createElement("th")
        E4.id = "pineapple_price_each"
        E1.append(E4)
        document.getElementById("pineapple_price_each").value = pineapple_price
        document.getElementById("pineapple_price_each").innerHTML = pineapple_price

        //add subtotal of pineapple before tax
        var E5 = document.createElement("th")
        E5.id = "pineapple_subtotal"
        E1.append(E5)
        var pineapple_subtotal = pineapple_price * document.getElementById("pineapple_bought").value
        document.getElementById("pineapple_subtotal").value = pineapple_subtotal
        document.getElementById("pineapple_subtotal").innerHTML = pineapple_subtotal

        //add pineapple tax
        var E6 = document.createElement("th")
        E6.id = "pineapple_tax"
        E1.appendChild(E6)
        var pineapple_tax = pineapple_tax_rate * document.getElementById("pineapple_subtotal").value
        document.getElementById("pineapple_tax").value = pineapple_tax
        document.getElementById("pineapple_tax").innerHTML = pineapple_tax

        //add total including tax
        var E7 = document.createElement("th")
        E7.id = "pineapple_total"
        E1.appendChild(E7)
        var pineapple_total = pineapple_tax + pineapple_subtotal
        document.getElementById("pineapple_total").value = pineapple_total
        document.getElementById("pineapple_total").innerHTML = pineapple_total

        //add a plus button
        var E8 = document.createElement("th")
        var pineapple_btn_plus = document.createElement('input')
        pineapple_btn_plus.type = "button"
        pineapple_btn_plus.value = "+"
        
        pineapple_btn_plus.onclick = (function pineapple_plus()
        {
        
        if(pineapple_bought<document.getElementById("pineapple_quantity").value){
        pineapple_quantity--
        document.getElementById("pineapple_quantity").innerHTML = pineapple_quantity
        
        pineapple_bought = parseInt(document.getElementById("pineapple_bought").value,10)
        pineapple_bought++
        document.getElementById("pineapple_bought").innerHTML = pineapple_bought
        document.getElementById("pineapple_bought").value = pineapple_bought

        pineapple_subtotal = pineapple_bought*pineapple_price
        document.getElementById("pineapple_subtotal").innerHTML = pineapple_subtotal
        document.getElementById("pineapple_subtotal").value = pineapple_subtotal

        pineapple_tax = pineapple_subtotal*pineapple_tax_rate
        document.getElementById("pineapple_tax").innerHTML = pineapple_tax
        document.getElementById("pineapple_tax").value = pineapple_tax

        pineapple_total = pineapple_subtotal + pineapple_tax
        document.getElementById("pineapple_total").innerHTML = pineapple_total
        document.getElementById("pineapple_total").value = pineapple_total
        }
    else (window.alert("Ah oh, there is no pineapple available. Please check with store manager."))})

        E8.appendChild(pineapple_btn_plus)
        E1.appendChild(E8)

        //add a minus button
        var E9 = document.createElement("th")
        var pineapple_btn_minus = document.createElement('input')
        pineapple_btn_minus.type = "button"
        pineapple_btn_minus.value = "-"

        pineapple_btn_minus.onclick = (function pineapple_minus()
    {
        
        if(pineapple_bought > 0){
        pineapple_quantity++
        document.getElementById("pineapple_quantity").innerHTML = pineapple_quantity

        pineapple_bought = parseInt(document.getElementById("pineapple_bought").value,10)
        pineapple_bought--
        document.getElementById("pineapple_bought").innerHTML = pineapple_bought
        document.getElementById("pineapple_bought").value = pineapple_bought

        pineapple_subtotal = pineapple_bought*pineapple_price
        document.getElementById("pineapple_subtotal").innerHTML = pineapple_subtotal
        document.getElementById("pineapple_subtotal").value = pineapple_subtotal

        pineapple_tax = pineapple_subtotal*pineapple_tax_rate
        document.getElementById("pineapple_tax").innerHTML = pineapple_tax
        document.getElementById("pineapple_tax").value = pineapple_tax

        pineapple_total = pineapple_subtotal + pineapple_tax
        document.getElementById("pineapple_total").innerHTML = pineapple_total
        document.getElementById("pineapple_total").value = pineapple_total
    }
        else (window.alert("Ah oh, there is no pineapple available. Please check with store manager."))
    })
        
        E9.appendChild(pineapple_btn_minus)
        E1.appendChild(E9)
        
        //add a delete button
        var E10 = document.createElement("th")
        var pineapple_btn_delete = document.createElement('input')
        pineapple_btn_delete.type = "button"
        pineapple_btn_delete.value = "delete"
        pineapple_btn_delete.onclick = (function pineapple_delete(){
            var pineapple_remove = document.getElementById("pineapple info")
            pineapple_remove.parentNode.removeChild(pineapple_remove)
            //reset pineapple quantity back to original value
            pineapple_quantity = 5;
            document.getElementById("pineapple_quantity").value = pineapple_quantity
            document.getElementById("pineapple_quantity").innerHTML = pineapple_quantity
        })
        E10.appendChild(pineapple_btn_delete)
        E1.appendChild(E10)

    }
    //second time click
    else if (pineapple_quantity < document.getElementById("pineapple_quantity").value && pineapple_quantity > 0 && document.getElementById("pineapple_to_buy").value <= pineapple_quantity)
    {
        //second click to modify value
        pineapple_to_buy = parseInt(document.getElementById("pineapple_to_buy").value,10)
        pineapple_quantity = pineapple_quantity - pineapple_to_buy
        document.getElementById("pineapple_quantity").innerHTML = pineapple_quantity
        
        //update the pineapple bought
        pineapple_bought = parseInt(document.getElementById("pineapple_bought").value,10)
        pineapple_bought = pineapple_bought + pineapple_to_buy
        document.getElementById("pineapple_bought").innerHTML = pineapple_bought
        document.getElementById("pineapple_bought").value = pineapple_bought

        //update the subtotal
        pineapple_subtotal = pineapple_bought*pineapple_price
        document.getElementById("pineapple_subtotal").innerHTML = pineapple_subtotal
        document.getElementById("pineapple_subtotal").value = pineapple_subtotal

        //update tax 
        pineapple_tax = pineapple_subtotal*pineapple_tax_rate
        document.getElementById("pineapple_tax").innerHTML = pineapple_tax
        document.getElementById("pineapple_tax").value = pineapple_tax

        //update total including tax
        pineapple_total = pineapple_subtotal + pineapple_tax
        document.getElementById("pineapple_total").innerHTML = pineapple_total
        document.getElementById("pineapple_total").value = pineapple_total
    }
    else 
    {
        window.alert("Ah oh, there is no pineapple available. Please check with store manager.")
    }
}

function to_buy(){
    
    //show total price
    var total_price =0
    if(document.getElementById("apple_total") != null){
    total_price = total_price+document.getElementById("apple_total").value
    }
    if(document.getElementById("avocado_total") != null){
        total_price = total_price+document.getElementById("avocado_total").value
    }
    if(document.getElementById("banana_total") != null){
        total_price = total_price+document.getElementById("banana_total").value
    }
    if(document.getElementById("blueberry_total") != null){
        total_price = total_price+document.getElementById("blueberry_total").value
    }
    if(document.getElementById("cherry_total") != null){
        total_price = total_price+document.getElementById("cherry_total").value
    }
    if(document.getElementById("coconut_total") != null){
        total_price = total_price+document.getElementById("coconut_total").value
    }
    if(document.getElementById("grape_total") != null){
        total_price = total_price+document.getElementById("grape_total").value
    }
    if(document.getElementById("peach_total") != null){
        total_price = total_price+document.getElementById("peach_total").value
    }
    if(document.getElementById("pear_total") != null){
        total_price = total_price+document.getElementById("pear_total").value
    }
    if(document.getElementById("pineapple_total") != null){
        total_price = total_price+document.getElementById("pineapple_total").value
    }

    //show message
    var check = confirm("Do you want to continue? the total price is: " + total_price + "$")
    
    if(check == true){
       
       //document.getElementById("apple quantity").value

       
       //clear the table content
       var new_tbody = document.createElement('tbody')
       var old_tbody = document.getElementById("shopping cart")
       old_tbody.parentNode.replaceChild(new_tbody,old_tbody)
    } else{
        
        //return the canceled quantity 
        if(document.getElementById("apple_total") != null){
            document.getElementById("apple_quantity").value = 5
            document.getElementById("apple_quantity").innerHTML = 5
            }
            if(document.getElementById("avocado_total") != null){
            document.getElementById("avocado_quantity").value = 5
            document.getElementById("avocado_quantity").innerHTML = 5
            }
            if(document.getElementById("banana_total") != null){
            document.getElementById("banana_quantity").value = 5
            document.getElementById("banana_quantity").innerHTML = 5
            }
            if(document.getElementById("blueberry_total") != null){
                document.getElementById("blueberry_quantity").value = 5
                document.getElementById("blueberry_quantity").innerHTML = 5
            }
            if(document.getElementById("cherry_total") != null){
                document.getElementById("cherry_quantity").value = 5
                document.getElementById("cherry_quantity").innerHTML = 5
            }
            if(document.getElementById("coconut_total") != null){
                document.getElementById("coconut_quantity").value = 5
                document.getElementById("coconut_quantity").innerHTML = 5
            }
            if(document.getElementById("grape_total") != null){
                document.getElementById("grape_quantity").value = 5
                document.getElementById("grape_quantity").innerHTML = 5
            }
            if(document.getElementById("peach_total") != null){
                document.getElementById("peach_quantity").value = 5
                document.getElementById("peach_quantity").innerHTML = 5
            }
            if(document.getElementById("pear_total") != null){
                document.getElementById("pear_quantity").value = 5
                document.getElementById("pear_quantity").innerHTML = 5
            }
            if(document.getElementById("pineapple_total") != null){
                document.getElementById("pineapple_quantity").value = 5
                document.getElementById("pineapple_quantity").innerHTML = 5
            }
        //clear the table content
        var new_tbody = document.createElement('tbody')
        var old_tbody = document.getElementById("shopping cart")
        old_tbody.parentNode.replaceChild(new_tbody,old_tbody)

    }
}

function password_check(){
    if (document.getElementById("password box").value == "chunyang_jia"){
        var z1 = document.getElementById("available quantity")
        
        //box to modify apple quantity
        var y1 = document.createElement('li')
        var y2 = document.createTextNode("Item: Apple; Tax rate is: ")
        var y3 = document.createTextNode(apple_tax_rate)
        var y4 = document.createTextNode("  Apple quantity")
        var y5 = document.createElement('input')
        y5.id ="apple_change_quantity"
        y5.type = 'textbox'
        var y6 = document.createElement('input')
        y6.id = "apple change button"
        y6.type = 'button'
        y6.value = 'apple new quantity'
        y6.onclick = (function update_apple_quantity(){
            apple_quantity = document.getElementById("apple_change_quantity").value
            document.getElementById("apple_quantity").value = apple_quantity
            document.getElementById("apple_quantity").innerHTML = apple_quantity
        })
        y1.appendChild(y2)
        y1.appendChild(y3)
        y1.appendChild(y4)
        y1.appendChild(y5)
        y1.appendChild(y6)
        z1.appendChild(y1)
        
        //box to modify avocado quantity
        var y1 = document.createElement('li')
        var y2 = document.createTextNode("Item: Avocado; Tax rate is: ")
        var y3 = document.createTextNode(avocado_tax_rate)
        var y4 = document.createTextNode("  Avocado quantity")
        var y5 = document.createElement('input')
        y5.id ="avocado_change_quantity"
        y5.type = 'textbox'
        var y6 = document.createElement('input')
        y6.id = "avocado change button"
        y6.type = 'button'
        y6.value = 'avocado new quantity'
        y6.onclick = (function update_avocado_quantity(){
            avocado_quantity = document.getElementById("avocado_change_quantity").value
            document.getElementById("avocado_quantity").value = avocado_quantity
            document.getElementById("avocado_quantity").innerHTML = avocado_quantity
        })
        y1.appendChild(y2)
        y1.appendChild(y3)
        y1.appendChild(y4)
        y1.appendChild(y5)
        y1.appendChild(y6)
        z1.appendChild(y1)

        //box to modify banana quantity
        var y1 = document.createElement('li')
        var y2 = document.createTextNode("Item: Banana; Tax rate is: ")
        var y3 = document.createTextNode(banana_tax_rate)
        var y4 = document.createTextNode("  Banana quantity")
        var y5 = document.createElement('input')
        y5.id ="banana_change_quantity"
        y5.type = 'textbox'
        var y6 = document.createElement('input')
        y6.id = "banana change button"
        y6.type = 'button'
        y6.value = 'banana new quantity'
        y6.onclick = (function update_banana_quantity(){
            banana_quantity = document.getElementById("banana_change_quantity").value
            document.getElementById("banana_quantity").value = banana_quantity
            document.getElementById("banana_quantity").innerHTML = banana_quantity
        })
        y1.appendChild(y2)
        y1.appendChild(y3)
        y1.appendChild(y4)
        y1.appendChild(y5)
        y1.appendChild(y6)
        z1.appendChild(y1)

        //box to modify blueberry quantity
        var y1 = document.createElement('li')
        var y2 = document.createTextNode("Item: Blueberry; Tax rate is: ")
        var y3 = document.createTextNode(blueberry_tax_rate)
        var y4 = document.createTextNode("  Blueberry quantity")
        var y5 = document.createElement('input')
        y5.id ="blueberry_change_quantity"
        y5.type = 'textbox'
        var y6 = document.createElement('input')
        y6.id = "blueberry change button"
        y6.type = 'button'
        y6.value = 'blueberry new quantity'
        y6.onclick = (function update_blueberry_quantity(){
            blueberry_quantity = document.getElementById("blueberry_change_quantity").value
            document.getElementById("blueberry_quantity").value = blueberry_quantity
            document.getElementById("blueberry_quantity").innerHTML = blueberry_quantity
        })
        y1.appendChild(y2)
        y1.appendChild(y3)
        y1.appendChild(y4)
        y1.appendChild(y5)
        y1.appendChild(y6)
        z1.appendChild(y1)

        //box to modify cherry quantity
        var y1 = document.createElement('li')
        var y2 = document.createTextNode("Item: Cherry; Tax rate is: ")
        var y3 = document.createTextNode(cherry_tax_rate)
        var y4 = document.createTextNode("  Cherry quantity")
        var y5 = document.createElement('input')
        y5.id ="cherry_change_quantity"
        y5.type = 'textbox'
        var y6 = document.createElement('input')
        y6.id = "cherry change button"
        y6.type = 'button'
        y6.value = 'cherry new quantity'
        y6.onclick = (function update_cherry_quantity(){
            cherry_quantity = document.getElementById("cherry_change_quantity").value
            document.getElementById("cherry_quantity").value = cherry_quantity
            document.getElementById("cherry_quantity").innerHTML = cherry_quantity
        })
        y1.appendChild(y2)
        y1.appendChild(y3)
        y1.appendChild(y4)
        y1.appendChild(y5)
        y1.appendChild(y6)
        z1.appendChild(y1)

        //box to modify coconut quantity
        var y1 = document.createElement('li')
        var y2 = document.createTextNode("Item: Coconut; Tax rate is: ")
        var y3 = document.createTextNode(coconut_tax_rate)
        var y4 = document.createTextNode("  Coconut quantity")
        var y5 = document.createElement('input')
        y5.id ="coconut_change_quantity"
        y5.type = 'textbox'
        var y6 = document.createElement('input')
        y6.id = "coconut change button"
        y6.type = 'button'
        y6.value = 'coconut new quantity'
        y6.onclick = (function update_coconut_quantity(){
            coconut_quantity = document.getElementById("coconut_change_quantity").value
            document.getElementById("coconut_quantity").value = coconut_quantity
            document.getElementById("coconut_quantity").innerHTML = coconut_quantity
        })
        y1.appendChild(y2)
        y1.appendChild(y3)
        y1.appendChild(y4)
        y1.appendChild(y5)
        y1.appendChild(y6)
        z1.appendChild(y1)
        

    //box to modify grape quantity
    var y1 = document.createElement('li')
    var y2 = document.createTextNode("Item: Grape; Tax rate is: ")
    var y3 = document.createTextNode(grape_tax_rate)
    var y4 = document.createTextNode("  Grape quantity")
    var y5 = document.createElement('input')
    y5.id ="grape_change_quantity"
    y5.type = 'textbox'
    var y6 = document.createElement('input')
    y6.id = "grape change button"
    y6.type = 'button'
    y6.value = 'grape new quantity'
    y6.onclick = (function update_grape_quantity(){
        grape_quantity = document.getElementById("grape_change_quantity").value
        document.getElementById("grape_quantity").value = grape_quantity
        document.getElementById("grape_quantity").innerHTML = grape_quantity
    })
    y1.appendChild(y2)
    y1.appendChild(y3)
    y1.appendChild(y4)
    y1.appendChild(y5)
    y1.appendChild(y6)
    z1.appendChild(y1)
    
    //box to modify peach quantity
    var y1 = document.createElement('li')
    var y2 = document.createTextNode("Item: Peach; Tax rate is: ")
    var y3 = document.createTextNode(peach_tax_rate)
    var y4 = document.createTextNode("  Peach quantity")
    var y5 = document.createElement('input')
    y5.id ="peach_change_quantity"
    y5.type = 'textbox'
    var y6 = document.createElement('input')
    y6.id = "peach change button"
    y6.type = 'button'
    y6.value = 'peach new quantity'
    y6.onclick = (function update_peach_quantity(){
        peach_quantity = document.getElementById("peach_change_quantity").value
        document.getElementById("peach_quantity").value = peach_quantity
        document.getElementById("peach_quantity").innerHTML = peach_quantity
    })
    y1.appendChild(y2)
    y1.appendChild(y3)
    y1.appendChild(y4)
    y1.appendChild(y5)
    y1.appendChild(y6)
    z1.appendChild(y1)

    //box to modify pear quantity
    var y1 = document.createElement('li')
    var y2 = document.createTextNode("Item: Pear; Tax rate is: ")
    var y3 = document.createTextNode(pear_tax_rate)
    var y4 = document.createTextNode("  Pear quantity")
    var y5 = document.createElement('input')
    y5.id ="pear_change_quantity"
    y5.type = 'textbox'
    var y6 = document.createElement('input')
    y6.id = "pear change button"
    y6.type = 'button'
    y6.value = 'pear new quantity'
    y6.onclick = (function update_pear_quantity(){
        pear_quantity = document.getElementById("pear_change_quantity").value
        document.getElementById("pear_quantity").value = pear_quantity
        document.getElementById("pear_quantity").innerHTML = pear_quantity
    })
    y1.appendChild(y2)
    y1.appendChild(y3)
    y1.appendChild(y4)
    y1.appendChild(y5)
    y1.appendChild(y6)
    z1.appendChild(y1)

    //box to modify pineapple quantity
    var y1 = document.createElement('li')
    var y2 = document.createTextNode("Item: Pineapple; Tax rate is: ")
    var y3 = document.createTextNode(pineapple_tax_rate)
    var y4 = document.createTextNode("  Pineapple quantity")
    var y5 = document.createElement('input')
    y5.id ="pineapple_change_quantity"
    y5.type = 'textbox'
    var y6 = document.createElement('input')
    y6.id = "pineapple change button"
    y6.type = 'button'
    y6.value = 'pineapple new quantity'
    y6.onclick = (function update_pineapple_quantity(){
        pineapple_quantity = document.getElementById("pineapple_change_quantity").value
        document.getElementById("pineapple_quantity").value = pineapple_quantity
        document.getElementById("pineapple_quantity").innerHTML = pineapple_quantity
    })
    y1.appendChild(y2)
    y1.appendChild(y3)
    y1.appendChild(y4)
    y1.appendChild(y5)
    y1.appendChild(y6)
    z1.appendChild(y1)


    } else {
        window.alert("Ah oh, wrong password")
    }
}