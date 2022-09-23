
const userLists = [];

function createListArrayObject(name) {
    return { name }
}

function pushToUserLists(name) {
    userLists.push(createListArrayObject(name));
    console.log(userLists);
}

function createDOMListItems() {
    const item = document.createElement("div");

    for (let i = 0; i < userLists.length; i++) {
        console.log(userLists[i].name);
        const p = document.createElement("p");
        p.textContent = userLists[i].name;
        item.appendChild(p);
      }

    return item;
}

export { userLists, pushToUserLists, createDOMListItems }