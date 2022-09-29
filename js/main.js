sessionStorage.setItem("entry", "0");
indexHash = {};

function shuffle(arr) {
    let currentIndex = arr.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temp = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
    return arr;
}

function initPorfolioTiles() {
    shuffledBlogs = shuffle(blogPosts);
    let portfolioTiles = Array.from(document.getElementsByClassName("portfolio_tile"));
    portfolioTiles.forEach(tile => {
        const tileText = document.createElement("p");
        index = portfolioTiles.indexOf(tile);
        tileText.innerHTML = shuffledBlogs[index].TITLE;
        tileText.id = shuffledBlogs[index].ID;
        tile.appendChild(tileText);
        tile.style.backgroundImage = "url("+shuffledBlogs[index].IMAGE_1+")";
        tile.addEventListener("click", e => {
            sessionStorage.setItem("entry", e.target.id);
            //tile.addEventListener("mouseover", coverBlock(e));
            //tile.addEventListener("mouseleave", removeCover(e));
        });
    });
}

function coverBlock(e) {
    tile = document.getElementById(e.target.id);
    tile.style.backgroundImage = "none";
    console.log("Cover on -> " + parent.id)
}

function removeCover(e) {
    parent = document.getElementById(e.target.id);
    console.log("Cover off -> " + parent.id)
}

function initMainText() {
    document.getElementById("intro_picture").src = mainText.MAIN_IMAGE;
    document.getElementById("about_picture").src = mainText.ABOUT_IMAGE;
    document.getElementById("intro_text").innerHTML = mainText.SAMPLE_TEXT;
    document.getElementById("about_text").innerHTML = mainText.SAMPLE_TEXT;
    document.getElementById("contact_text").innerHTML = mainText.SAMPLE_TEXT;
    initPorfolioTiles();
}

initMainText();