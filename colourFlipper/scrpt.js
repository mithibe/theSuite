const colourChanger = document.querySelector(".colourChangerButton");
const colourCode = document.querySelector(".colourName");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];



colourChanger.addEventListener("click", () => {
    // let colour = randomNumber();
    // let colourName = document.body.style.backgroundColor = `# ${colour}`;
    
    let hexColour = "#"
    for (let i = 0; i < 6; i++){
        hexColour += hex[randomNumber()];
    }
    colourCode.textContent = hexColour
    document.body.style.backgroundColor = hexColour
});

let randomNumber = () => {
    return Math.floor(Math.random() * 8);
} 

// console.log(randomNumber());
