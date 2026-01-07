document.querySelectorAll(".favorite-icon").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("filled");
    button.innerHTML = button.classList.contains("filled")
      ? "&#10084;"
      : "&#9825;";
  });
});

// Previous Code (Working but old style)

// const btns = document.querySelectorAll(".favorite-icon");

// function changeIcon(btn){
//   if(btn.classList.contains("filled")){
//     btn.classList.remove("filled");
//     btn.innerHTML = "&#9825;";//outline heart
//   }else{
//     btn.classList.add("filled");
//     btn.innerHTML = "&#10084;";//filled heart
//   }
// }

// btns.forEach((btn)=>{
//   btn.addEventListener("click", ()=>{
//     changeIcon(btn);
//   })
// })
