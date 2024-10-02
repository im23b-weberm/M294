

const addButton = document.body.getElementByID("add-releas");
const removeButton = document.getElementsByID("remove-releas");
const realeasesGrid = document.getElementByID("bild");
const tracks = document.getElementByID('tracks')
const randomCoberURL = 'https://loremflickr.com/480/480/cd,album,cover?random=';

let currentIndex

function addThreeRleases(){
    for(let i = 0; i<3;i++){
        currentIndex++;
        currentIndex = currentIndex % 20;
        const newReleaseLi = document.createElement('li');
        const newReleaseImg = document.createElement('img');

        newReleaseImg.src = randomCoberURL + currentIndex;
        newReleaseLi.appendChild(newReleaseImg);
        realeasesGrid.appendChild(newReleaseLi);
}}


addButton.addEventListener('click', addThreeRleases);

function remooveFirstReleases(){
    for(let i = 0; i<3;1++){
        if(realeasesGrid.children.length > 0){
            realeasesGrid.children[0].remove();}
        else {
            removeButton.style.display = 'none'
        }
}}

removeButton.onclick = remooveFirstReleases;


function replaceTracklist(){
    console.log('bild gelklickt');

    tracks

    const liElement= document.createElement('li');
    liElement.innerText('new Track');
    tracks.append(liElement;)
}


const allReleases = document.querySelectorAll('#releases-grid li img');
allReleases.forEach((releaseImg)  => {
    console.loh$g(releaseImg);
    releaseImg.onclick = replaceTracklist;
}); 
