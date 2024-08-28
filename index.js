const button = document.querySelector(".button");
const num = document.querySelector(".num");
const nul = document.querySelector(".in");
const salovat = document.querySelector(".salovat");
let sum = 0
console.log(button);
console.log(num);

button.addEventListener("click", () => {
  sum++;
  num.textContent = sum;
  if (sum >= 33) {
    salovat.textContent = "SUBHANALLOH";
  } 
 if (sum >= 66) {
   salovat.textContent = "ALHAMDULILLAH";
 } 
 if (sum >= 99) {
   salovat.textContent = "ALLOHU AKBAR";
 } 
 
});
nul.addEventListener("click",()=>{
  sum =0
  num.textContent = sum
})
