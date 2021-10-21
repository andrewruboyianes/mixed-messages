const generateRandomNumber = () => {
    const num = Math.floor(Math.random() * 4)
    return num
};

const randomQuote = () => {
    switch(generateRandomNumber()) {
        case 0:
            console.log('"The day you becom esuccessful is th day you become humble -Naveen Jane"')
            break;
        case 1:
            console.log('"A masterpiece is still a masterpiece even when the lights are off and the room is empty" -Unkown')
            break;
        case 2:
            console.log('"The cost of procrastination is a life you could\'ve lived" -Unknown')
            break;
        case 3: 
            console.log('"People don\'t care what you know unitll they know that you care" -Kevion')
            break;
        default:
            console.log('Please select a random number.')
    }


};

randomQuote()