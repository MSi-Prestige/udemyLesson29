/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//!  ---------------  o4istili na HTML stranice blok - sdelav pustuju stroku . OBAZATELJNO querySelector -- all - NET
const movieList = document.querySelector(".promo__interactive-list");
movieList.innerHTML = "";  // 4istim
movieDB.movies.sort();     // sortiruem alfavit

movieDB.movies.forEach((film, i) => {

    movieList.innerHTML +=

        `<li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div>
           </li>`;
});






// //?                       Vaviant moj - ne sovsem pravelen ! 
// //! 1------------------delete elements from HTML ---------------------baners.
// const adv = document.getElementsByClassName("promo__adv");
// console.log(adv);              
// adv[0].remove();                  // обязательно указываем массив.
// console.log(adv);

//! 1>>>>>>>>>>>>>>>>>>>>>>>>>Good Variant <<<<<<<<<<<<<<<<<<<<<<<<<<<

const adv = document.querySelectorAll(".promo__adv img");
adv.forEach(element => {      //todo -->    adv.forEach(function (item) { 
    element.remove();         //todo -->    item.remove();                        обычная запись. 
});                           //todo -->    });
// console.log(adv);





//! 2----------------- Меняем название --------------------------------- с Комедия на Драмма.
// const genres = document.getElementsByClassName("promo__genre");
// console.log(genres);
// genres[0].replaceWith("драма");
// console.log(genres);


const poster = document.querySelector(".promo__bg"),  //! >> querySelector - vzjali potomu 4to sklass promo toljko 1 raz na stranice.
    //todo tut uze ne document a poster ---- tak kak on uze vi6e vzjal vse dannie iz promo_bg
    genre = poster.querySelector(".promo__genre");
genre.textContent = "Драмма";



//! 3------------------ PIC REPLACE  background IMG--------------------------------------

poster.style.backgroundImage = "url('img/bg.jpg')";

//! 4 -------------------------task -----------------------------------------------------






