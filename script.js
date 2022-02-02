hideElement("availablePets");
hideElement("selectPet");
hideElement("showStats");
hideElement("finalizePet");

// creates empty username variable and saves to storage
let userName;
sessionStorage.setItem("userName", userName);

// sets default user item
let defaultItem = "heal";
userItems = [defaultItem];
userItems_storage = JSON.stringify(userItems);
sessionStorage.setItem("userItems", userItems_storage);
console.log(sessionStorage);

// sets text from "userNameInput" box to the variable "userName" and saves variable to storage
function setUserName() {
    if (userNameInput.value.length > 0) {
        userName = document.getElementById("userNameInput").value;
        sessionStorage.setItem("userName", userName);
        console.log(`You entered: ${userName}`);
        console.log(sessionStorage);
        greeting();
        hideElement("setUserName");
        showElement("availablePets");
        showElement("selectPet");
    }
};

function greeting() {
    document.getElementById("greeting").innerText = `Hello, ${userName}! Please choose a pet.`;
    showElement("greeting");
};

//HIDE AND SHOW ELEMENTS
function hideElement(element) {
    let elementToRemove = document.getElementById(element);
    elementToRemove.style.display = "none";
};
function showElement(element) {
    let elementToAppend = document.getElementById(element);
    elementToAppend.style.display = "";
};

// factory function to create instances of a pet
function createPet(name, species, gender, spd, str, maxHP, currentHP, heldItems,) {
    return {
        name,
        species,
        gender,
        spd,
        str,
        maxHP,
        currentHP,
        heldItems,
        pet() {
            console.log(`You pet ${this.name}.`)
        }
    }
};

const pets = [
    //        Name      species gender  spd str max/currentHP   heldItems 
    createPet("Spot",   "dog",  "m",    5,  4,  10, 10,         []),
    createPet("Kitty",  "cat",  "f",    6,  3,  10, 10,         ["heal", "treat"]),
    createPet("Daisy",  "dog",  "f",    6,  5,  10, 10,         [])
];

console.log(pets);

let activePet = pets[0];

// surely this can be made into a reusable function?
document.getElementById("petOneButton").innerText = `${pets[0].name}`;
document.getElementById("petTwoButton").innerText = `${pets[1].name}`;
document.getElementById("petThreeButton").innerText = `${pets[2].name}`;

function choosePet(choice) {
    activePet = choice;
    console.log(`You chose ${activePet.name}!`);
    showElement("finalizePet");
    showStats();
};

// can reuse this after battle
// rewrite to avoid innerHTML
function showStats() {
    showElement("showStats");
    document.getElementById('showStats').innerHTML = `
    <h3><strong>${activePet.name}'s Stats:</strong></h3>
    <table>
        <tr>
            <td><strong>Speed:</strong></td>
            <td id="st">${activePet.spd}</td>
        </tr>
        <tr>
            <td><strong>Strength:</strong></td>
            <td id="st">${activePet.str}</td>
        </tr>
        <tr>
            <td><strong>HP:</strong></td>
            <td id="st">${activePet.currentHP} / ${activePet.maxHP}</td>
        </tr>

    </table>
    `;
};


function finalizePet() {
    hideElement("availablePets");
    hideElement("selectPet");
    hideElement("finalizePet");
    hideElement("greeting");
    document.getElementById("youChose").innerText = `You chose ${activePet.name}!`
}