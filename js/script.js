$(document).ready(function () {
    console.log("jQuery active")

    var deck = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11];
    console.log(deck);
    var shuffledDeck = _.shuffle(deck);
    console.log(shuffledDeck);


    var playerArray = []
    var playerTotal = 0
    var dealerArray = []
    var dealerTotal = 0

    playerArray.push(shuffledDeck[Math.floor(Math.random() * shuffledDeck.length)])
    playerArray.push(shuffledDeck[Math.floor(Math.random() * shuffledDeck.length)])

    dealerArray.push(shuffledDeck[Math.floor(Math.random() * shuffledDeck.length)])
    dealerArray.push(shuffledDeck[Math.floor(Math.random() * shuffledDeck.length)])
    for (let i = 0; i < playerArray.length; i++) {
        playerTotal += playerArray[i];
        dealerTotal += dealerArray[i];
    }

    $('#dealer1').text(dealerArray)
    $('#dealer2').text(dealerTotal)

    $('#player1').text(playerArray)
    $('#player2').text(playerTotal)

    function playerCheck () {if (playerTotal > 21) {
        for (let i = 0; i < playerArray.length; i++) {
            if (playerArray[i] == 11) {
                playerArray.splice(i, 1, 1)
                playerTotal -= 11
                playerTotal++
                console.log(playerTotal)
                $('#player1').text(playerArray);
                $('#player2').text(playerTotal);
                return;
            }
        }
    }}

    function dealerCheck() { if (dealerTotal > 21) {
        for (let i = 0; i < dealerArray.length; i++) {
            if (dealerArray[i] == 11) {
                dealerArray.splice(i, 1, 1)
                dealerTotal -= 11
                dealerTotal++
                console.log(dealerTotal)
                $('#dealer1').text(dealerArray);
                $('#dealer2').text(dealerTotal);
                return;
            }
        }
    }}

    playerCheck();
    dealerCheck();


    $('#hit').on('click', function () {
        playerTotal = 0;

        playerArray.push(shuffledDeck[Math.floor(Math.random() * shuffledDeck.length)])

        for (let i = 0; i < playerArray.length; i++) {
            playerTotal += playerArray[i];
        }
        $('#player1').text(playerArray);
        $('#player2').text(playerTotal);
        if (playerTotal > 21) {
            for (let i = 0; i < playerArray.length; i++) {
                if (playerArray[i] == 11) {
                    playerArray.splice(i, 1, 1)
                    playerTotal -= 11
                    playerTotal++
                    console.log(playerTotal)
                    $('#player1').text(playerArray);
                    $('#player2').text(playerTotal);
                }
            }
            if (playerTotal > 21) {
                $('#bust').text("You have busted!");
            }
        }
    })

    $('#stand').on('click', function () {

        if (dealerTotal>=16 && dealerTotal==playerTotal){
            $('#bust').text("House and player have tied!")
        }

        while (dealerTotal < 16 && playerTotal>dealerTotal) {

            dealerTotal = 0;
            dealerArray.push(shuffledDeck[Math.floor(Math.random() * shuffledDeck.length)])
            console.log(dealerArray)

            for (let i = 0; i < dealerArray.length; i++) {
                dealerTotal += dealerArray[i];
            }
            $('#dealer1').text(dealerArray);
            $('#dealer2').text(dealerTotal);
            if (dealerTotal > 21) {
                for (let i = 0; i < dealerArray.length; i++) {
                    if (dealerArray[i] == 11) {
                        dealerArray.splice(i, 1, 1)
                        dealerTotal -= 11
                        dealerTotal++
                        console.log(dealerTotal)
                        $('#dealer1').text(dealerArray);
                        $('#dealer2').text(dealerTotal);
                    }
                }
                if (dealerTotal > 21) {
                    $('#bust').text("House has busted! You won!");
                }
            }
            else if (dealerTotal>=16 && dealerTotal>playerTotal){
                $('#bust').text("House wins!")
            }

            else if (dealerTotal>=16 && playerTotal>dealerTotal){
                $('#bust').text("You won!")
            }
            else if (dealerTotal==playerTotal){
                $('#bust').text("House and player have tied!")
            }
        }
    })



})