let plus = document.querySelectorAll(".plus");
let qty = Array.from(document.getElementsByClassName("quantity"));
//let qty = document.querySelectorAll(".quantity");
let price = Array.from(document.getElementsByClassName("price"));
// let price = document.querySelectorAll(".price");
let total = document.querySelector("#total");
let item = document.querySelectorAll(".item");
//let item = Array.from(document.getElementsByClassName("item"));
let list = document.querySelectorAll(".list");
let trash = document.querySelectorAll(".delete");
let minus = document.querySelectorAll(".minus");

console.log(qty);
// total calculation:
function totalSum() {
  let arr2 = Array.from(document.getElementsByClassName("quantity"));
  let arr1 = Array.from(document.getElementsByClassName("price"));
  let t = 0;
  for (let i = 0; i < arr1.length; i++) {
    t = t + arr1[i].innerHTML * arr2[i].innerHTML;
  }
  return t;
}

// Plus Button:

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    qty[i].innerHTML++;
    total.innerHTML = totalSum(price, qty);
  });
}

// Minus Button:

let min = 1;
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    if (Number(qty[i].innerHTML) > min) {
      qty[i].innerHTML--;
      total.innerHTML = totalSum(price, qty);
    }
  });
}

// delete item:

for (let j = 0; j < qty.length; j++) {
  trash[j].addEventListener("click", function () {
    item[j].remove();
    total.innerHTML = totalSum(qty, price);
  });
}

// like icon :

let like = document.querySelectorAll(".heart i");
console.log(like[0].innerHTML);
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
    if (like[i].style.color == "red") {
      like[i].style.color = "black";
    } else {
      like[i].style.color = "red";
    }
  });
}
