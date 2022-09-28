sessionStorage.setItem("entry", "0");

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
        tile.innerHTML = blogPosts[index].TITLE;
        tile.style.backgroundImage = "url("+blogPosts[index].IMAGE_1+")";
        tile.addEventListener("click", sessionStorage.setItem("entry", blogPosts[index].ID));
    });
}

function initMainText() {
    document.getElementById("intro_picture").src = mainText.MAIN_IMAGE;
    document.getElementById("intro_text").innerHTML = mainText.SAMPLE_TEXT;
    document.getElementById("about_text").innerHTML = mainText.SAMPLE_TEXT;
    document.getElementById("contact_text").innerHTML = mainText.SAMPLE_TEXT;
    initPorfolioTiles();
}

initMainText();