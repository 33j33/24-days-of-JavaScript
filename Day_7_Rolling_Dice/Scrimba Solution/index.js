/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/


/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/

// Write your code here 👇
const dice = document.querySelector('.dice')
// Converting NodeList object to Array
const allDots = Array.from(document.querySelectorAll('.dice div'))

// In this we take the approach of putting 9 dots on the dice
// and then according displaying only those according to the 
// random number generated

function rollDice() {
    let randomNumber = 1 + Math.floor(Math.random() * 6)
    console.log(randomNumber)

    // Removing ".dot" class from the div as it removes the background-color and border radius
    allDots.forEach(dot => dot.classList.remove("dot"));

    if (randomNumber === 1) {
        allDots[4].classList.add('dot')
    }

    if (randomNumber === 2) {
        allDots[0].classList.add('dot')
        allDots[8].classList.add('dot')
    }
    if (randomNumber === 3) {
        allDots[0].classList.add('dot')
        allDots[4].classList.add('dot')
        allDots[8].classList.add('dot')
    }
    if (randomNumber === 4) {
        allDots[0].classList.add('dot')
        allDots[2].classList.add('dot')
        allDots[6].classList.add('dot')
        allDots[8].classList.add('dot')
    }
    if (randomNumber === 5) {
        allDots[0].classList.add('dot')
        allDots[2].classList.add('dot')
        allDots[4].classList.add('dot')
        allDots[6].classList.add('dot')
        allDots[8].classList.add('dot')
    }
    if (randomNumber === 6) {
        allDots[0].classList.add('dot')
        allDots[2].classList.add('dot')
        allDots[3].classList.add('dot')
        allDots[5].classList.add('dot')
        allDots[6].classList.add('dot')
        allDots[8].classList.add('dot')
    }

}
dice.addEventListener('click', rollDice)