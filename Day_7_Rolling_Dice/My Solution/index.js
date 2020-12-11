/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/

// returns HTMLcollection object 
let diceFaces = document.querySelector(".dice").children;
const rollDiceBtn = document.querySelector(".btn");
const diceInt = document.querySelector(".dice-int");
console.log(diceFaces);

rollDiceBtn.addEventListener("click", () => {
    // Math.random() returns a number in range - (0, 1]
    const randomInt = Math.floor(Math.random() * 6) // Gives number in range (0, 6]

    // Assign the random integer we get to the text element
    diceInt.innerText = randomInt + 1;

    // Remove `active` class from the all dices faces
    for (let face of diceFaces) {
        face.classList.remove("active");
    }

    // Make new face active
    diceFaces[randomInt].classList.add("active");
})

