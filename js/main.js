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
        index = portfolioTiles.indexOf(tile);
        tile.innerHTML = shuffledBlogs[index].TITLE;
        tile.style.backgroundImage = "url("+shuffledBlogs[index].IMAGE_1+")";
        tile.id = shuffledBlogs[index].ID;
        tile.addEventListener("mouseover", e => {
            console.log(e.target.id);
            sessionStorage.setItem("entry", e.target.id);
        });
    });
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