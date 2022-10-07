const createWoodBlock = () => {
    // Return an object with 4 properties.
    const woodObject = {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }
    return woodObject
}


const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object
    const stringRepresentation = `The ${woodObject.length}-inch, ${woodObject.material} woodblock was carved into a wooden ${woodObject.purpose}`
    return stringRepresentation
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)