window.onload=()=>{
    var form = document.querySelector("form");
    var add = document.querySelector("#add");
    var remove = document.querySelector("#remove");
    var quantity = document.querySelector("#quantity");
    var cartButton = document.querySelector("#cart");

    //When "Add to cart" is clicked
    function handleSubmit(e){
        //stopping the page from refreshin after submitting
        e.preventDefault();
        if(cartButton.innerHTML==="Add to Cart")
        //redirecting the user to "modal1"
        window.location.replace("#modal1");

        else if (cartButton.innerHTML==="Checkout Now")
        //redirecting the user to "checkoutModal"
        window.location.replace("#checkoutModal");

        else
        //redirecting the user to "modal1"
        window.location.replace("#modal1");
    }

    //attaching the above event to the "add to cart" button
    form.addEventListener("submit", handleSubmit);

    //when the "+" button is clicked
    function handleAdd(){
        quantity.innerHTML = parseInt(quantity.innerHTML)+1;
        //enabling the "agree" button when there are more than 0 items
        agree.disabled = false;
    }

    //attaching the above event to the "add" button
    add.addEventListener("click", handleAdd);



    //when the "-" button is clicked
    function handleRemove(){
    //making sure it does not remove if there are 0 items
        if (quantity.innerHTML !== "0"){
            quantity.innerHTML = parseInt(quantity.innerHTML)-1;
        }
        //disabling the "agree" button when there are no items
        if (quantity.innerHTML === "0"){
            agree.disabled = true;
        }   
    }

    //attaching the above event to the "remove" button
    remove.addEventListener("click", handleRemove);


    var agree = document.querySelector("#agree");
    var summary = document.querySelector("#summary");

    //when the "agree" button is clicked
    function handleAgree(){
        //changing the number on the left of "Add to cart" to reflect the number of items being bought
        var itemCount = document.querySelector("#itemCount");
        var currentAmount = parseInt(itemCount.innerHTML);
        itemCount.innerHTML = currentAmount+parseInt(quantity.innerHTML);


        //Changing the "Add to cart" button to "Checkout Now"
        cartButton.innerHTML = "Checkout Now";

        //making the "chekout now" button direct the user to the cart
        cartButton.parentElement.setAttribute("href", "#checkoutModal");
        //the parent element is the <form>

        document.querySelector("#addAgain").style.visibility = "visible";


        var chosenColor = document.querySelector("input:checked  + .circle");
        var colorChosen = document.querySelector("#chosenColor");

        var circle = chosenColor.cloneNode();
        circle.style = 
        `display: inline-block;
        margin-right: 2%;
        border-radius: 50%;
        width:20px;
        height:20px;
        background: ${colorChosen.innerHTML};`;

        var summary = document.querySelector("#summary");
        //appending a circle for every item
        for (let i = 0; i<parseInt(quantity.innerHTML); i++){ 
            let item = circle.cloneNode();
            summary.appendChild(item);
        }

        var checkoutModal = document.querySelector("#chekoutModal");
        //message for the checkout
        var message = `You are about to order ${quantity.innerHTML} ${colorChosen.innerHTML} Hickies `
        document.querySelector("#onCart").innerHTML=message;
    }

    //attaching the above event to the "agree" button
    agree.addEventListener("click", handleAgree);
};