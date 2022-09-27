let entryNum = 0;
let introBlogItems = Array.from(document.getElementsByClassName("blog_item"));

function createSinglePictureGrid() {
    introBlogItems.forEach(item => {
        className = item.className;
        if (className.includes("SINGLE_PICTURE_GRID")) {
            const grid = document.createElement("div");
            grid.className = "one_picture_grid";
            const image = document.createElement("img");
            image.src = blogPost[entryNum].SINGLE_PICTURE_GRID.IMAGE;
            const text = document.createElement("p")
            text.innerHTML = blogPosts[entryNum].SINGLE_PICTURE_GRID.TEXT;
            grid.appendChild(image);
            grid.appendChild(text);
            gridContainer = document.getElementById("picture_grids");
            gridContainer.appendChild(grid);
        }
    });
}
// Very aware this is the lazy way of doing this. But I'm in too much of a rush to figure it out so suck it future self.
function initBlogValues() {
    introBlogItems[0].innerHTML = blogPosts[entryNum].TITLE;
    introBlogItems[1].innerHTML = blogPosts[entryNum].STATUS;
    introBlogItems[2].style.backgroundImage = "url("+blogPosts[entryNum].IMAGE_1+")";
    introBlogItems[3].style.backgroundImage = "url("+blogPosts[entryNum].IMAGE_2+")";
    introBlogItems[4].style.backgroundImage = "url("+blogPosts[entryNum].IMAGE_3+")";
    introBlogItems[5].innerHTML = blogPosts[entryNum].PROBLEM;
    introBlogItems[6].innerHTML = blogPosts[entryNum].SOLUTION;
    createSinglePictureGrid();
}

initBlogValues();