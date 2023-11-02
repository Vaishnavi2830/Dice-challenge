let state = history.state || {};//Create a variable to store reloadcount,0if it is null create an empty object
let reloadCount = state.reloadCount || 0;
if (performance.navigation.type === 1) { // Reload
    state.reloadCount = ++reloadCount;
    // history.replaceState(state, null, document.URL);
} 
if (reloadCount >= 1) {
    var randomNumber1 = Math.floor(Math.random() * 6)+1;//1 to 6 value will be selected randomly

    var randomDiceImage1 = "dice" + randomNumber1 + ".png";//dice1.png - dice6.png will be choosen randomly

    var randomImageSource1 = "images/" + randomDiceImage1 ;//images/dice1.png - images/dice6.png

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomImageSource1);

    var randomNumber2 = Math.floor(Math.random() * 6)+1;//1-6

    var randomDiceImage2 = "dice" + randomNumber2 +".png"//dice1.png-dice6.png

    var randomImageSource2 = "images/" + randomDiceImage2 ;//image/dice1.png-image/dice6.png

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomImageSource2);

    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🎉 Player 1 wins!";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="🎉 Player 2 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML="Its a Draw!";
    }
}