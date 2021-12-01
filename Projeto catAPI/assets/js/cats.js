const BASE_URL = 'https://thatcopy.pw/catapi/rest/'

const catHtmlImg = document.getElementById("cat-pic");
const changePicButton = document.getElementById("changeCatPicture");


const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();   
        return json.webpurl;
    }catch(e){
        console.log(e.message);
    }
}

const loadImg = async () => {
    catHtmlImg.src = await getCats();
}

changePicButton.addEventListener('click', loadImg);
loadImg();