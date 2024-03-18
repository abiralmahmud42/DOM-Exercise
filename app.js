// const price = getConvertedValue("budget");
const allBtn = document.getElementsByClassName("add-btn");

for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
       
        const selectedContainer = document.getElementById("selected-player-container");
        
        const div = document.createElement("div");
        div.classList.add("flex");
        div.classList.add("gap-11");


        event.target.setAttribute("disabled", false);
        
        const firstCartCount = getConvertedValue("cart");
        if (firstCartCount + 1 > 6) {
           alert("Maximum 6 player can be selected");
           return;
        }

        event.target.parentNode.style.backgroundColor = "gray";

        const budget = getConvertedValue("budget");
        document.getElementById("budget").innerText = budget - parseInt(price);

       const cartCount = getConvertedValue("cart");
       document.getElementById("cart").innerText = cartCount +1;
      
       const leftCount = getConvertedValue("left");
       document.getElementById("left").innerText = leftCount - 1;


        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);
        updateTotalCost(price);
        updateGrandTotal();
    });
}







function updateGrandTotal(status) {
   const totalCost = getConvertedValue("total-cost");  
   if (status == undefined) {
       
       document.getElementById("grand-total").innerText = totalCost;
   }
   else {
     const cuponCode = document.getElementById("cupon-code").value;
     
     if(cuponCode == "love") {
        const discounted = totalCost*0.2;
        document.getElementById("grand-total").innerText = totalCost - discounted ;

     } else {
        alert("enter a valid cupon");
     }
   }

    
}



function updateTotalCost(price) {
    const totalCost = getConvertedValue("total-cost");
    const sum = totalCost + parseInt(price);
    document.getElementById("total-cost").innerText = sum
  
}




function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}

