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

// Its a monstor!! I hate java script and haven't been commenting because I don't want to think about how bad my code is.
function initPortfolioTiles() {
    shuffledBlogs = shuffle(blogPosts);
    let portfolioTiles = Array.from(document.getElementsByClassName("portfolio_tile"));
    portfolioTiles.forEach(tile => {
        const tileCover = document.createElement("div");
        const tileTitle = document.createElement("h4");
        const tileText = document.createElement("h3");
        console.log(tile);
        index = portfolioTiles.indexOf(tile);
        tileTitle.innerHTML = shuffledBlogs[index].TITLE;
        tileText.innerHTML = shuffledBlogs[index].TILE_TEXT;
        tileCover.id = shuffledBlogs[index].ID;
        tileTitle.id = shuffledBlogs[index].ID;
        tileText.id = shuffledBlogs[index].ID;
        tileCover.appendChild(tileTitle);
        tileCover.appendChild(tileText);
        console.log(tileCover);
        tile.appendChild(tileCover);
        tile.style.backgroundImage = "url("+shuffledBlogs[index].TILE_IMAGE+")";
        tileCover.addEventListener("click", e => {
            sessionStorage.setItem("entry", e.target.id);
        });
    });
    console.log("Initialized portfolio tiles.")
}

function initMainText() {
    document.getElementById("intro_picture").src = mainText.MAIN_IMAGE;
    document.getElementById("about_picture").src = mainText.ABOUT_IMAGE;
    document.getElementById("intro_text").innerHTML = mainText.SAMPLE_TEXT;
    document.getElementById("about_text").innerHTML = mainText.SAMPLE_TEXT;
    document.getElementById("email").innerHTML = mainText.EMAIL;
    document.getElementById("phone").innerHTML = mainText.PHONE;
    document.getElementById("github").innerHTML = mainText.GITHUB;
    console.log("Initialized main text.")
    initPortfolioTiles();
}

//if (document.URL.includes("index")) {
    initMainText();
//}