"use strict";

const box = document.getElementById("box"),
    btns = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName("circle"),
    hearts = document.querySelectorAll(".heart"),  
// hearts = wrapper.querySelectorAll(".heart"),. document na to gde KONKRETNO i6im  //! >>>> OBJAZATELJNO TOCHA .HEART
    oneFirstHeart = document.querySelector(".heart");
// wparrer  = document....... (wparrer);   //? esli ispoljzuem e6e raz delaem peremennuju

                                         //!  inline style
box.style.backgroundColor = "black";
box.style.borderRadius = "20px";

// !  >>>>>>>>>>>  srazu v rjad     box.style.cssText = "backgroung-color: red;  width: 500px; ........ `${num}`   "

btns[1].style.fontSize = "30px";
btns[3].style.color = "green";
btns[3].style.backgroundColor = "orange";
console.log(btns);

oneFirstHeart.style.backgroundColor = "green";
console.log(hearts);

hearts[1].style.backgroundColor = "black";
hearts[1].style.width = "100px";



// ! ------------------------- 1 metod dobavitj vse srazu ------------------- FOR

// for (let i = 0; i < hearts.length; i++ ) {
//     hearts[i].style.backgroundColor = "green";
// }

// ! ------------------------- 2 metod projtisj i dobavitj forEach -------------

hearts.forEach(item => {                   // forEach - eto metod - v kotorom estj 1 argument item i funkcija )
    item.style.backgroundColor = "blue";     //!forEach(item , function);
});                                                             //! function (item.style.backgroundColor = "blue"; )


const div = document.createElement("div");  //! sozdaem element div ( viden toljko v js)
div.classList.add("black");  // prisvoili divu vse svoistva klassa  black CSS

document.body.append(div);   // dobavili v samij niz body

//document.querySelector(".wrapper").append(div);   // ! >>>>>>>>>> v opredelennoe mesto esli ispoljzuem 1 raz.

// hearts[0].before(div);
// hearts[0].after(div);
          //.remove
//    hearts[0].replaceWith(circles[0]);    // menjaem odin element drugim.

div.innerHTML = "hello Ilja";      // <h1>Hello world</h1>;  opasen - mogut slomatj sajt tegami

// div.textContent = "Hello";  >>>>>>>>> rabotaet toljko S TEKSTOM .
const div2 = document.createElement("div");
document.body.append(div2); 


div2.insertAdjacentHTML("afterbegin" , "<h2>Hi Man</h>"); //<  4 metoda f 1 argumente , i dalj6e kod HTML.

