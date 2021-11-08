function Nuller() {
  document.getElementById("p").style.display = "block";
  document.getElementById("app").style.display = "none";
}

let newElement = document.createElement("p");
let text = document.createTextNode("Hello, i am created from JS");
newElement.appendChild(text);
let element = document.getElementById("app");
element.appendChild(newElement);
