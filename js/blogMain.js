let introBlogItems = Array.from(document.getElementsByClassName("blog_item"));
let entryNum = sessionStorage.getItem("entry");
//let entryNum = 0; 
console.log(entryNum);

function createSinglePictureGrid(item) {
    if (item.includes("SINGLE_PICTURE_GRID")) {
        const grid = document.createElement("div");
        const image = document.createElement("img");
        const text = document.createElement("p");
        grid.className = "one_picture_grid";
        image.src = blogPosts[entryNum].SINGLE_PICTURE_GRID.IMAGE;
        image.className = "one_picture";
        text.innerHTML = blogPosts[entryNum].SINGLE_PICTURE_GRID.TEXT;
        grid.appendChild(image);
        gridContainer = document.getElementById("picture_grids");
        gridContainer.appendChild(grid);
        gridContainer.appendChild(text);
    }
}

function createTwoPictureGrid() {
    if (item.includes("TWO_PICTURE_GRID")) {
        const grid = document.createElement("div");
        const image1 = document.createElement("img");
        const image2 = document.createElement("img");
        const text = document.createElement("p");
        grid.className = "two_picture_grid";
        image1.src = blogPosts[entryNum].TWO_PICTURE_GRID.IMAGE_ONE;
        image2.src = blogPosts[entryNum].TWO_PICTURE_GRID.IMAGE_TWO;
        image1.className = "two_picture";
        image2.className = "two_picture";
        text.className = "two_picture_text";
        text.innerHTML = blogPosts[entryNum].TWO_PICTURE_GRID.TEXT;
        grid.appendChild(image1);
        grid.appendChild(image2);
        gridContainer = document.getElementById("picture_grids");
        gridContainer.appendChild(grid);
        gridContainer.appendChild(text);
    }
    return 0;
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
    introBlogItems[7].innerHTML = blogPosts[entryNum].SKILLS_USED;
    introBlogItems[8].innerHTML = blogPosts[entryNum].FUTURE
    for (item in blogPosts[entryNum]) {
        createSinglePictureGrid(item);
        createTwoPictureGrid(item);
    }
}

initBlogValues();