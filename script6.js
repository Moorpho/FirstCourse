let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].onclick = function(){
//     alert('ви нажали першу кнопку!');
// }

// btn[0].onclick = function(){
//     alert('ви знову нажали першу кнопку!');
// }

// btn[0].addEventListener('click',function(){
//     alert('ви нажали першу кнопку!');
// });

// btn[0].addEventListener('click', function(event) {
//     let target = event.target;
//     target.style.dysplay = 'none';
//     // console.log('Сталась подія: ' + event.type + ' на елементі ' + event.target)
// })

// btn[0].addEventListener('click', function(event) {
//     console.log('Сталась подія: ' + event.type + ' на елементі ' + event.target);
// })

// wrap.addEventListener('click', function(event) {
//     console.log('Сталась подія: ' + event.type + ' на елементі ' + event.target);
// })

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Сталась подія: ' + event.type + ' на елементі ' + event.target);
})

btn.forEach(function(item){
    item.addEventListener('mouseleave',function() {
        console.log('Вийшли!');
    })
})


// btn[0].addEventListener('mouseenter',function(){
//     alert('ви навели на першу кнопку!');
     
// });