// Code your solutions in this file

const gifts = [ "teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;

}
const cardNames = ["Guadalupe", "Ollie", "Aki"]
const event = []
 function writeCards(cardNames, event){

    const writtenCard = [];

    for (let p = 0; p < cardNames.length; p++){
        writtenCard.push(`Thank you, ${cardNames [p]}, for the wonderful surprise gift!`);
        
    }
    return writtenCard;
    
 }
wrapGifts(gifts);

function countDown(num) {

    while (num >= 0 ){
        console.log(num);
        num--;
    }
}


