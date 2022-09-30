let entryNum = sessionStorage.getItem("entry");

function initHeader() {
    const title = document.getElementById("header_title");
    title.innerHTML = blogPosts[entryNum].TITLE;
}

function initBlogContent() {
    content = blogPosts[entryNum].CONTENT;
    for (item in content) {
        if (item.includes("IMAGE")) { createImage(content[item]); }
        if (item.includes("TITLE")) { createTitle(content[item]); }
        if (item.includes("TEXT")) { createText(content[item]); }
    }
}

function createImage(imagePath) {
    const conatiner = document.getElementById("content_container");
    const image = document.createElement("img");
    image.src = imagePath;
    conatiner.appendChild(image);
}

function createTitle(titleData) {
    const conatiner = document.getElementById("content_container");
    const title = document.createElement("h1");
    title.innerHTML = titleData;
    conatiner.appendChild(title);
}

function createText(textData) {
    const conatiner = document.getElementById("content_container");
    const text = document.createElement("p");
    text.innerHTML = textData;
    conatiner.appendChild(text);
}

function populateBlogPage() {
    initHeader();
    initBlogContent();
    initPortfolioTiles();
}

populateBlogPage();