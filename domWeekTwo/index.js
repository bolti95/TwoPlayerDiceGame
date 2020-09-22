// difference between class and id = class is multiple, id is only one element


// classes
const heading = document.getElementsByClassName("heading");
//tagName
// const orderedList = document.getElementById("test");
// ids
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const helloOne = document.getElementById("helloOne");

helloOne.nodeValue = ("hello");

helloOne.style.color = "green";
helloOne.style.textDecoration = "underline";

// helloOne.addEventListener("click", () => {
//     helloOne.style.color = "yellow";
//     // can't do heading.style.color because 
//     //can't process HTMLCollection unless targeted
//     //like an array
//     heading[0].style.color = "red";
// })

const orderedList = document.getElementsByTagName("li"); //collection
let colors = ["red", "yellow", "orange"];

for (let i =0; i < colors.length; i++) {
    orderedList[i].style.color = colors[i];
}




helloOne.addEventListener("click", () => {
    for (let i =0; i < heading.length; i++) {
        heading[i].style.color = "green";
    }
    // helloOne.style.color = "red";
    console.log(`hello ${helloOne.nodeValue}`)
})

submit.addEventListener("click", () => {
    helloOne.textContent = input.value;
})