import './style.css';


function addListCardDOMLoad(s1, s2) {
    //const content = document.getElementById('content');
    const card = document.createElement('div');
        card.classList.add('newListCard');
    card.appendChild(cardInput());
    card.appendChild(buttonIntegrator(s1, s2));

    //event listener: pushes user text into userLists array when click 'create';
    card.lastChild.lastChild.addEventListener('click', (event) => {
        let name = card.firstChild.firstChild.value;
        pushToUserLists(name);
        let lists = content.firstChild.nextSibling.lastChild.lastChild;
        lists.textContent = "";
        lists.appendChild(createDOMListItems());
        card.remove();
    });
    content.appendChild(card);
}

function cardInput() {
    const div = document.createElement('div');
        div.classList.add('cardTextBorder');
    const inputText = document.createElement('input');
        inputText.classList.add('cardInputText');
    div.appendChild(inputText);

    return div;
}
function buttonIntegrator(s1, s2) {
    const div = document.createElement('div');
        div.classList.add('cardButtonIntegrator');
    div.appendChild(cardButton(s1));
    div.appendChild(cardButton(s2));

    return div;
}

function cardButton(s) {
    const button = document.createElement('button');
        button.classList.add('newListCardButton');
    const buttonText = document.createElement('div');
        buttonText.textContent = s;
    button.appendChild(buttonText);
    return button;
}

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

export { addListCardDOMLoad, userLists }