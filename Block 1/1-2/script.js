// Korrigierte Methode: getElementById (statt getElementByID)
const addButton = document.getElementById("add-releas");
const removeButton = document.getElementById("remove-releas");
const releasesGrid = document.getElementById("bild");
const tracks = document.getElementById('tracks');
const randomCoverURL = 'https://loremflickr.com/480/480/cd,album,cover?random=';
const currentlyPlaying = document.getElementById('currently-playing'); // Korrigiert: getElementById

let currentIndex = 0; // Initialisiere currentIndex

// Funktion zum Hinzufügen von 3 neuen Releases
function addThreeReleases() {
    removeButton.style.display = 'inline';
    for (let i = 0; i < 3; i++) {
        currentIndex++;
        currentIndex = currentIndex % 20; // Damit der Index zwischen 0 und 19 bleibt
        const newReleaseLi = document.createElement('li');
        newReleaseLi.classList.add("bildik");
        const newReleaseImg = document.createElement('img');
        newReleaseImg.setAttribute("width","50%");

        newReleaseImg.src = randomCoverURL + currentIndex; // URL für das Albumcover
        newReleaseLi.appendChild(newReleaseImg);
        releasesGrid.appendChild(newReleaseLi); // Füge das neue Element zur Liste hinzu
    }
}

// Event Listener für den "Add"-Button
addButton.addEventListener('click', addThreeReleases);

// Funktion zum Entfernen der ersten 3 Releases
function removeFirstReleases() {
    for (let i = 0; i < 3; i++) { // Korrigiert: Bedingung und Zählvariable
        if (releasesGrid.children.length > 0) {
            releasesGrid.children[0].remove();
        }
        if(releasesGrid.children.length == 0)removeButton.style.display = 'none';
    }
}

// Event Listener für den "Remove"-Button
removeButton.onclick = removeFirstReleases;

const zahl = 9; // Konstante für die Tracklist

// Funktion zum Ersetzen der Tracklist
function replaceTracklist() {
    console.log('Bild geklickt');

    tracks.replaceChildren([]); // Entfernt alle Kinder (bestehende Tracks)

    const randomNumber = Math.floor(Math.random() * zahl); // Zufallszahl für die Tracklist

    const liElement = document.createElement('li');
    liElement.innerText = 'New Track ' + randomNumber; // Fügt den Tracknamen hinzu
    tracks.append(liElement);
}

// Hinzufügen eines Event Listeners für alle Releases-Bilder
function addImageEventListeners() {
    const allReleases = document.querySelectorAll('#bild li img');
    allReleases.forEach((releaseImg) => {
        console.log(releaseImg); // Zeigt die Bilder in der Konsole
        releaseImg.onclick = replaceTracklist; // Tracklist wird ersetzt, wenn auf ein Bild geklickt wird
    });
}

// Neue Event Listener hinzufügen, wenn neue Releases hinzugefügt werden
addButton.addEventListener('click', addImageEventListeners);
