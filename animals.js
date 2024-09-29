const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];
function showInfo() {
    //gets the number input into the box 
    const petNum = document.getElementById('petNum').value;
    // makes sure that the number is a valid entry and accounts for 0 start index
if (petNum >= 1 && petNum <= petsData.length) {
const pet = petsData[petNum - 1]
//displays info
const info = `The name of the pet is ${pet.petName}. The age of the pet is: ${pet.age}. The weight of the pet is: ${pet.weightInKilos} kg. The Breed of the pet is: ${pet.breed}`;
document.querySelector(`.selectedPetInfo`).textContent = info;
//error message when trying to find a labeled pet not listed on the site 
} else {
    document.querySelector(`.selectedPetInfo`).textContent = `INCORRECT INPUT, PLEASE ADD A VALID  PET NUMBER.`; 
} 
}