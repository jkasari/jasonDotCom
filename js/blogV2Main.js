let entryNum = sessionStorage.getItem("entry");

function initHeader() {
    const title = document.getElementById("header_title");
    title.innerHTML = blogPosts[entryNum].TITLE;
}

function initBlogContent() {
    content = blogPosts[entryNum].CONTENT;
    for (item in content) {
        if (item.includes("IMAGE")) { createImage(blogPosts[entryNum][item]); }
    }
}

function createImage(imagePath) {
    const conatiner = document.getElementById("content_container");
    const image = document.createElement("img");
    image.src = imagePath;
    conatiner.appendChild(image);
}

function populateBlogPage() {
    initHeader();
    initPorfolioTiles();
    initBlogContent();
}

populateBlogPage();