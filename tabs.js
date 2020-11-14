window.addEventListener("DOMContentLoaded", function() { // Нужно, чтобы js работал только если дерево dom загрузился

    'use strict'; //использовать строгий режим

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
        
    //функция, чтобы скрыть все элементы табов
    function hideTabContent(a) {
        for(let i = a; i<tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide')
        }
    }
    hideTabContent(1);
    
    //показать табы
    function showTabContent(b) {
        //проверка, содержит ли класс hide
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
   
        }
    }
    showTabContent(0);

    //при нажатии на таб выскакивал контент
    info.addEventListener('click', function(e) {
        let target = e.target; //целью евляется то, куда я нажал
        if(target && target.classList.contains('info-header-tab')) { //target - true, если нажал; то, что я нажал содержит класс
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                break;
                }
            }
        }
    });
});
