const BASE_URL = 'https://thatcopy.pw/catapi/rest/'

const catHtmlImg = document.getElementById("cat-pic");
const changePicButton = document.getElementById("changeCatPicture");
const loadingButton = document.getElementById("loadingButton");


let current_status = 0; 

const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();   
        return json.webpurl;
    }catch(e){
        console.log(e.message);
    }
}

const changeButtonState = (isLoading) => {
    if(isLoading){
        changePicButton.style.display = "none";
        loadingButton.style.display = "initial";
    }else{
        changePicButton.style.display = "initial";
        loadingButton.style.display = "none";
    }
}

const loadImg = async () => {
    changeButtonState(true);
    catHtmlImg.src = await getCats();
    changeButtonState(false);
}

changePicButton.addEventListener('click', loadImg);
loadImg();