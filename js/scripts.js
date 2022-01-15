'use strict'

const nazwiska = ['Kania', 'Nowak', 'Kowalska', 'Maszczykowska'];
const imiona = ['Piotr', 'Adam', 'Anna', 'Monika'];


for(let i=0; i<nazwiska.length; i++) {
    const row = document.createElement('tr');
    row.innerHTML = '<td>'+(i+1)+'</td><td>'+nazwiska[i]+'</td><td>'+imiona[i]+'</td>';
    document.querySelector('tbody').appendChild(row);
}