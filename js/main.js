let burger = document.querySelector('.header__burger');
let list = document.querySelector('.header__menu');

burger.addEventListener('click', function() {
    document.body.classList.toggle('.lock');
    list.classList.toggle('active');
    burger.classList.toggle('active');
});

list.addEventListener('click', function() {
	document.body.classList.remove ('lock');
	list.classList.remove('active');
	menu.classList.remove('active');
});

let bg = document.querySelectorAll('.parallax');

for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        bg[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });    
}


let counters = document.querySelectorAll('.benefits__title');
let speed = 1000;

counters.forEach(counter => {
    let updateCount = () => {
        let target = +counter.getAttribute('data-target');
        let count = +counter.innerText;

        let inc = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
            console.log ('target')
        } else {
            count.innerText = target;
        }   
    }
    updateCount ();
    
});
