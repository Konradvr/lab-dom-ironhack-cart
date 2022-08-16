// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").innerHTML 
  // console.log(price)
  const quantity = product.querySelector(".quantity input").value
  // console.log(quantity)
  let subtotal = product.querySelector(".subtotal span")
  subtotal.innerHTML = price * quantity //  the .innerHTML makes not only chaning the value of the subtotal 
  // in the console it makes changing it in the <span> to ! so uu need to use .innerHTML there 
  // console.log(subtotal)
  // console.log(subtotal)
  let totalPrice = document.querySelector("#total-value span") //use innerText to acces in the span
  let allSubtotal = document.querySelectorAll(".subtotal span")
  let sum = 0; 
  for(let i = 0; i < allSubtotal.length; i++){
    sum += parseFloat(allSubtotal[i].innerHTML) 
  }
  totalPrice.innerText = sum
}

function calculateAll() {
  // console.log()
  const allProductClasses = document.getElementsByClassName("product")
  for(let i = 0; i < allProductClasses.length; i++){
   updateSubtotal(allProductClasses[i])
  // console.log(allProductClasses)
  }
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
