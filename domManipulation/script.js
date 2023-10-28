//const secondLi = document.getElementById("second-li");
const listItems = document.querySelectorAll("li");

//listItems[0].classList.add("big");
//console.log(window.getComputedStyle(listItems[0]).fontSize);

const scrollable = document.getElementById("scrollable");

console.log(scrollable.clientHeight);//height of visible content + padding
console.log(scrollable.offsetHeight);//height of visible height + border
console.log(scrollable.scrollHeight);//total height of visible height + border and pixels out of view
console.log(scrollable.offsetTop);// distance from outer border to inner positioned parent border.

console.log(scrollable.querySelectorAll('p')[5].offsetTop);



//const p = document.createElement('p');
///const text = document.createTextNode("Hello World");
//p.append(text);
//document.body.appendChild(p);// Can only take in a tag
//document.body.append("Test");// Can take in a tag or text
//document.body.prepend(p); // sticks at the beginning

////document.body.innerHTML += "<p>HTML Test String</p>";// not recommened - bug prone
//document.body.innerHTML = '';// clears out the entire element. Do not use when using user input.
//const parent = document.querySelector("ol");
//const fragment = document.createDocumentFragment();
//for (let i = 0;i < 3; i++) {
//    const li = document.createElement("li");
//    li.textContent = `List item with i=${i}`;
 //   fragment.append(li);
//}
//parent.append(fragment);

//listItems[0].parentNode.removeChild(listItems[0]);
//listItems[0].remove();// Does the same thing but newer and not supported on all browsers



//listItems[0].style.color = 'red';
//listItems[0].style.backgroundColor = 'violet';
// listItems[0].textContent = 'violet';
// listItems[1].style.color = 'midnightblue';
// listItems[1].style.backgroundColor = 'dodgerblue';
// listItems[2].style.color = 'beige';
// listItems[2].style.backgroundColor = 'darkgrey';

//listItems[0].value = 5;
// listItems[0].setAttribute('class', 'blue big'); 
// listItems[0].classList.remove("big");
// listItems[0].classList.toggle("big");
// listItems[0].className = 'blue big';//going to delete any previous classes - overrriding properties

//console.log(listItems);

//Array.from(listItems).map(li => {
//    console.log(li);
//});
