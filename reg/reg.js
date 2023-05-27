const chek = document.querySelector('.checkbox');
const chek1 = document.querySelector('.checkbox-1');
const line = document.querySelector('.line');
const line2 = document.querySelector('.line2');

chek.addEventListener('click', function() {

line.classList.toggle('active');


});

chek1.addEventListener('click', function() {

    line2.classList.toggle('active');
    
    
    });