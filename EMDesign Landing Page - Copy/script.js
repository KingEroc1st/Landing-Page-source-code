//SHOW HIDDEN LOGO
const logo = document.querySelector('.logo-img');
const logo2 = document.querySelector('.logo-hidden');

logo.addEventListener('mouseover', function(){
    logo2.style.display = "block";
});
logo.addEventListener('mouseout', function(){
    logo2.style.display = "none";
});

//TOGGLE COLOR MODES
let color = localStorage.getItem('color');

if(color == null){
    setColor('light')
}else{
    setColor(color)
}

let colorSwitches = document.getElementsByClassName('color-switch')

for (let i=0; colorSwitches.length > i; i++){
    colorSwitches[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log('Option clicked:', mode);
        setColor(mode);
    });
}

function setColor(mode){
    if(mode == 'light'){
        document.getElementById('color-style').href = 'css/style.css'
        logo.src = '/img/logo1.png';
        logo2.src = '/img/logo hidden1.png';
    }

    if(mode == 'dark'){
        document.getElementById('color-style').href = 'css/stylevar1.css'
        logo.src = '/img/logo2.png';
        logo2.src = '/img/logo hidden2.png';
    }

    if(mode == 'green'){
        document.getElementById('color-style').href = 'css/stylevar2.css'
        logo.src = '/img/logo1.png';
        logo2.src = '/img/logo hidden1.png';
    }

    if(mode == 'purple'){
        document.getElementById('color-style').href = 'css/stylevar3.css'
        logo.src = '/img/logo2.png';
        logo2.src = '/img/logo hidden2.png';
    }

    localStorage.setItem('color', mode)
}

//INFO POPUP
const numpop = document.getElementById('popup1');
const emailpop = document.getElementById('popup2');
const popbtn1 = document.getElementById('popupbtn1');
const popbtn2 = document.getElementById('popupbtn2');
const closebtns = document.querySelectorAll('.closebtn');

popbtn1.addEventListener('click', ()=>{
    numpop.classList.add('open');
});

popbtn2.addEventListener('click', ()=>{
    emailpop.classList.add('open');
});

for (let i=0; i<closebtns.length; i++){
    closebtns[i].addEventListener('click', ()=>{
        numpop.classList.remove('open');
        emailpop.classList.remove('open');
    });
}

document.addEventListener('mouseup', function(e){
    if (!numpop.contains(e.target)){
        numpop.classList.remove('open')
    }
    if (!emailpop.contains(e.target)){
        emailpop.classList.remove('open')
    }
});