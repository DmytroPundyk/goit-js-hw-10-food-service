
import menuCard from '../templates/menu-card.hbs';
import dataList from '../menu.json';



const markup = menuCard(dataList);
const listElRef = document.querySelector('.js-menu');



listElRef.insertAdjacentHTML('beforeend', markup)
