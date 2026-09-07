//DOM->Document Object model
//Tree structure
//Action in webpage->event(click,keyup,keydown)
//using function
function sayHello() {
    alert("Button is clicked");
}
const button = document.getElementById('btn');
//using event listener
button.addEventListener("click", function () {
    alert("Button is clicked using event listener");
});
// button.addEventListener("click", () => {
//     button.innerHTML("Clicked")
// })
//mouse enter
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.backgroundColor = "red";
    hoverBox.style.fontSize="30px";
})
//mouseout
hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "lightblue";
    hoverBox.style.fontSize="20px";
})
const input = document.getElementById("username");
//input
input.addEventListener("input", ()=> {
    console.log("Value",input.value);//event.target.value
});
//keydown
input.addEventListener("keydown",(event)=>{ //event->object parameter
    console.log("key down:",event.key)
})
//keyup
input.addEventListener("keyup",(event)=>{
    console.log("key up:",event.key)
})