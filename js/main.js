let portfolioTiles = Array.from(document.getElementsByClassName("portfolio_tile"));

function initPorfolioTiles() {
    portfolioTiles.forEach(tile => {
        tile.innerHTML = blogPost[0].TITLE;
        tile.style.backgroundImage = "url("+blogPost[0].IMAGE_ONE+")";
        console.log(blogPost[0].IMAGE_ONE);
    });
}

function initMainText() {
    document.getElementById("intro_text").innerHTML = mainText.SAMPLE_TEXT;
    document.getElementById("about_text").innerHTML = mainText.SAMPLE_TEXT;
    document.getElementById("contact_text").innerHTML = mainText.SAMPLE_TEXT;
    initPorfolioTiles();
}

initMainText();