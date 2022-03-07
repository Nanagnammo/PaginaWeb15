let maxNum = parseInt(prompt('Enter maximun number'));
while (!maxNum){
    maxNum = parseInt(prompt('Enter maximun number'));
}
const targetNum = Math.floor(Math.random() * maxNum)+1;
console.log(targetNum)

let guessNum = parseInt(prompt('Enter your first guess'));
let attempts = 1;

while (parseInt(guessNum) !== targetNum){
    if(guessNum === 'q'){break}

    attempts ++ ;

    if(guessNum > targetNum){
        guessNum = prompt('Too high! Enter a new guess');
    } else{
        guessNum = prompt('Too low! Enter a new guess');
    }
}
if(guessNum === 'q'){
    console.log('Okay loser, You can try again next time')
} else {
    console.log(`Nice! You finally got it!! It took you only ${attempts} attempts.`);
}
