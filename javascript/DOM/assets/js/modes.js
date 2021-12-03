const modeButton = document.getElementById('mode-selector');
const pageTitle = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const container = document.getElementById('container');
const darkModeClass = 'dark-mode';
const darkModeGray = 'dark-mode-gray';

let currentMode = 0;

function switchMode(){
    changeClasses();
    changeTexts();
}

function changeClasses(){
    modeButton.classList.toggle(darkModeClass);
    pageTitle.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    container.classList.toggle(darkModeGray);
}

function changeTexts(){

    if(modeButton.classList.contains(darkModeClass)){
        modeButton.innerHTML = "Click to switch to light mode";
        pageTitle.innerHTML = "Dark mode";
    }
    else if(currentMode === 0){
        modeButton.innerHTML = "Click to switch to dark mode";
        pageTitle.innerHTML = "Light mode";
    }
}

modeButton.addEventListener('click', switchMode);
