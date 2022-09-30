let introBlogItems = Array.from(document.getElementsByClassName("blog_item"));
let entryNum = sessionStorage.getItem("entry");
let numOfGrids = 0;

function createPictureSideRight(item) {
    if (item.includes("PICTURE_SIDE_RIGHT")) {
        console.log("Trying to make it");
        const grid = document.createElement("div");
        const image = document.createElement("img");
        const text = document.createElement("p");
        gridContainer = document.getElementById("picture_grids");
        grid.className = "picture_side_grid RIGHT"
        image.src = blogPosts[entryNum][item].IMAGE;
        text.innerHTML = blogPosts[entryNum][item].TEXT;
        grid.appendChild(text);
        grid.appendChild(image);
        gridContainer.appendChild(grid);
        return 1;
    }
    return 0;
}

function createPictureSideLeft(item) {
    if (item.includes("PICTURE_SIDE_LEFT")) {
        console.log("Trying to make it");
        const grid = document.createElement("div");
        const image = document.createElement("img");
        const text = document.createElement("p");
        gridContainer = document.getElementById("picture_grids");
        grid.className = "picture_side_grid left"
        image.src = blogPosts[entryNum][item].IMAGE;
        text.innerHTML = blogPosts[entryNum][item].TEXT;
        grid.appendChild(image);
        grid.appendChild(text);
        gridContainer.appendChild(grid);
        return 1;
    }
    return 0;
}

function createSinglePictureGrid(item) {
    if (item.includes("SINGLE_PICTURE_GRID")) {
        const grid = document.createElement("div");
        const image = document.createElement("img");
        const text = document.createElement("p");
        gridContainer = document.getElementById("picture_grids");
        grid.className = "one_picture_grid";
        image.src = blogPosts[entryNum][item].IMAGE;
        text.innerHTML = blogPosts[entryNum][item].TEXT;
        grid.appendChild(image);
        gridContainer.appendChild(grid);
        gridContainer.appendChild(text);
        return 1;
    }
    return 0;
}

function createTwoPictureGrid() {
    if (item.includes("TWO_PICTURE_GRID")) {
        const grid = document.createElement("div");
        const image1 = document.createElement("img");
        const image2 = document.createElement("img");
        const text = document.createElement("p");
        gridContainer = document.getElementById("picture_grids");
        grid.className = "two_picture_grid";
        image1.src = blogPosts[entryNum][item].IMAGE_ONE;
        image2.src = blogPosts[entryNum][item].IMAGE_TWO;
        text.innerHTML = blogPosts[entryNum][item].TEXT;
        grid.appendChild(image1);
        grid.appendChild(image2);
        gridContainer.appendChild(grid);
        gridContainer.appendChild(text);
        return 1;
    }
    return 0;
}

function initSkillsFuture() {
    gridContainer = document.getElementById("picture_grids");
    container = document.createElement("div");
    const skills = initSkillsEntry();
    const future = initFutureEntry();
    container.appendChild(skills);
    container.appendChild(future);
    gridContainer.appendChild(container);
}

function initFutureEntry() {
    const future = document.createElement("div");
    const title = document.createElement("h1");
    const text = document.createElement("p");
    title.innerHTML = "Future:";
    text.innerHTML = blogPosts[entryNum].FUTURE;
    future.appendChild(title);
    future.appendChild(text);
    return future;
}

function initSkillsEntry() {
    const skills = document.createElement("div");
    const title = document.createElement("h1");
    const text = document.createElement("p");
    title.innerHTML = "Skills Used:";
    text.innerHTML = blogPosts[entryNum].SKILLS_USED;
    skills.appendChild(title);
    skills.appendChild(text);
    return skills;
}

function populateBlogPage() {
    initBlogValues();
    initBlogGrids();

}

// Very aware this is the lazy way of doing this. But I'm in too much of a rush to figure it out so suck it future self.
function initBlogValues() {
    introBlogItems[0].innerHTML = blogPosts[entryNum].TITLE;
    introBlogItems[1].innerHTML = blogPosts[entryNum].STATUS;
    introBlogItems[1].style.backgroundColor = blogPosts[entryNum].STATUS_COLOR;
    introBlogItems[2].style.backgroundImage = "url("+blogPosts[entryNum].IMAGE_1+")";
    introBlogItems[3].style.backgroundImage = "url("+blogPosts[entryNum].IMAGE_2+")";
    introBlogItems[4].style.backgroundImage = "url("+blogPosts[entryNum].IMAGE_3+")";
    introBlogItems[5].innerHTML = blogPosts[entryNum].PROBLEM;
    introBlogItems[6].innerHTML = blogPosts[entryNum].SOLUTION;
}

function initBlogGrids() {
    for (item in blogPosts[entryNum]) {
        numOfGrids += createSinglePictureGrid(item);
        numOfGrids += createTwoPictureGrid(item);
        numOfGrids += createPictureSideLeft(item);
        numOfGrids += createPictureSideRight(item);
        if (numOfGrids == 1) {
            initSkillsFuture();
        }
    }
}

populateBlogPage();