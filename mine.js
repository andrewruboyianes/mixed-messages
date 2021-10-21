let first = ['dad', 'uncle', 'brother', 'grandpa', 'hero']
let second = ['happy', 'sad', 'excited', 'worried', 'anxious']
let third = ['won the lottery', 'just ate dinner', 'is going to a club', 'is going to the gym', 'broke up with his girlfriend']


const generateMessage = () => {
    let person = first[Math.floor(Math.random() * first.length)]
    let emotion = second[Math.floor(Math.random() * second.length)] 
    let action = third[Math.floor(Math.random() * third.length)]
    console.log (`Your ${person} is really ${emotion} because he ${action}.`)
};

generateMessage()