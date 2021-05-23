// 
var navLabels = document.getElementsByClassName("nav-link");
console.log("Hello World");
var attrib;
for (i = 0; i < navLabels.length; i++){
    attrib = navLabels[i].getAttribute("href");
    console.log(attrib);
}
