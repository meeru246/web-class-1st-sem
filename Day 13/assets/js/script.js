//selection method
// .getElementById()
// .querySelector()
// .querySelectorAll()
// .getElementsByTagName()
// .getElementsByClassName()

console.log(document.getElementsByTagName("h1"));
const myHeader1 = document.getElementById("header1");
console.log(header1);

//select element using querySelector
const myHeader = document.querySelector
("#header1");
console.log(myHeader);

const myList =document.querySelector
(".my-list");

console.log(myList);

const listItem = document.querySelector
(".my-list .list-item");
console.log(listItem);

//using querySelectorAll
const myListItems = document.querySelectorAll
(
    ".my-list .list-item"
);
console.log(myListItems);
console.log(myListItems[0]);
console.log(myListItems[1]);

const list2 = document.getElementById("list-two");
console.log(list2);

const listTwo = document.querySelector("#list-two li");
console.log(listTwo);


const listTwo1 = document.querySelectorAll("#list-two li");
console.log(listTwo1);


const listTwo2 = document.querySelectorAll("#list-two li ul li");
console.log(listTwo2);

//manipulating the dom element 
myHeader1.style.backgroundColor = "red";
myHeader1.style.fontSize = "60px";

//changing text: .innerText, .innerHtml, .textContent
myHeader1.innerText = "Changed header 1";

const anchorTag = document.querySelector("a");
anchorTag.textContent ="My link update";

anchorTag.innerHTML ="<h1>using innerHTML</h1>";

//setting and removing attribute
//removing href from anchor tag
anchorTag.removeAttrribute("href");
console.log(anchorTag,"removed");

//set href in the anchor tag again 
anchorTag.setAttribute("href","");
console.log(anchorTag);

listItemThree.setAttribute("class","some-class");
console.log()


