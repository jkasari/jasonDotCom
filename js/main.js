let portfolioTiles = Array.from(document.getElementsByClassName("portfolio_tile"));

function initPorfolioTiles() {
    portfolioTiles.forEach(tile => {
        tile.innerHTML = blogPosts[0].TITLE;
        tile.style.backgroundImage = "url("+blogPosts[0].IMAGE_ONE+")";
        console.log(blogPosts[0].IMAGE_ONE);
    });
}

function initMainText() {
    document.getElementById("intro_text").innerHTML = mainText.SAMPLE_TEXT;
    document.getElementById("about_text").innerHTML = mainText.SAMPLE_TEXT;
    document.getElementById("contact_text").innerHTML = mainText.SAMPLE_TEXT;
    initPorfolioTiles();
}

initMainText();