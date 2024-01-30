// 1-mashq DOM FizzBuzz mashqi bajarish

var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elResult = document.querySelector(".js-result");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var inputValue = elInput.value;
  var fizzBuzzResult = "";

  if (inputValue % 3 == 0) {
    fizzBuzzResult += "Fizz";
  }
  if (inputValue % 5 == 0) {
    fizzBuzzResult += "Buzz";
  }
  elResult.textContent =
    fizzBuzzResult || `${inputValue} bu son 3 ga va 5 ga bo'linmaydi`;
});

// 2-mashq // Find the number kiritilgan son random som ga o'xshshmi.

// var elForm = document.querySelector(".js-form");
// var elInput = elForm.querySelector(".js-input");
// var elResult = document.querySelector(".js-result");
// var elLimir = document.querySelector(".js-limit");
// var elButton = elForm.querySelector(".js-button");

// var maxLimit = 6;
// var randomNumber = Math.round(Math.random() * 100);
// elLimir.textContent = `Urinishlar: ${maxLimit}`;
// elLimir.textContent = `Urinishlar: ${maxLimit}`;
// console.log(randomNumber);

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   var inputValue = elInput.value;
//   --maxLimit;
//   elLimir.textContent = `Urinishlar: ${maxLimit}`;
//   // urunishlar soni uchun shart //
//   if (maxLimit == 0) {
//     elLimir.textContent = "Urinshlar soni tugadi!";
//     elInput.disabled = true;
//     elButton.disabled = true;
//     alert("Urinishlar soni tugadi!");
//   } else if (inputValue == randomNumber) {
//     console.log("malumod topildi!");
//   } else {
//     console.log("Malumod topilmadi!");
//   }

//   // kiritilgan raqam kotta yoki kichik yoki ten aniqlash uchun misol //
//   if (inputValue > randomNumber) {
//     elResult.textContent = "kritilgan raqam ixtiyoriy raqamdan kotta!";
//   } else if (inputValue < randomNumber) {
//     elResult.textContent = "kritilgan raqam ixtioriy raqamdan kichik!";
//   } else {
//     elResult.textContent = "Topdingiz !!!";
//     elInput.disabled = true;
//     elButton.disabled = true;
//     alert("Topdingiz !!!");
//   }
//   elForm.reset();
// });
