$(document).ready(function () {
    console.log("jQuery active")
    //Took this Deck class from https://wsvincent.com/javascript-object-oriented-deck-cards/

    class Deck {
        constructor(deck) {
            this.deck = [];

            const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
            const values = ['Ace', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Jack', 'Queen', 'King'];

            for (let suit in suits) {
                for (let value in values) {
                    this.deck.push(`${values[value]} of ${suits[suit]}`);
                }
            }
        }
    }

    var deck1 = new Deck();


    var playerArray = []
    var playerTotal = 0
    var dealerArray = []
    var dealerTotal = 0





    function playerDraw() {
        playerArray.push(deck1.deck[Math.floor(Math.random() * deck1.deck.length)])
        playerTotal = 0;
        for (let i = 0; i < playerArray.length; i++) {
            if (playerArray[i] == 'Ace of Spades' || playerArray[i] == 'Ace of Clubs' || playerArray[i] == 'Ace of Diamonds' || playerArray[i] == 'Ace of Hearts') {
                playerTotal += 11;
            }
            else if (playerArray[i] == 'King of Spades' || playerArray[i] == 'King of Clubs' || playerArray[i] == 'King of Diamonds' || playerArray[i] == 'King of Hearts') {
                playerTotal += 10;
            }
            else if (playerArray[i] == 'Queen of Spades' || playerArray[i] == 'Queen of Clubs' || playerArray[i] == 'Queen of Diamonds' || playerArray[i] == 'Queen of Hearts') {
                playerTotal += 10;
            }
            else if (playerArray[i] == 'Jack of Spades' || playerArray[i] == 'Jack of Clubs' || playerArray[i] == 'Jack of Diamonds' || playerArray[i] == 'Jack of Hearts') {
                playerTotal += 10;
            }
            else {
                playerTotal += parseInt(playerArray[i].charAt(0));
            }
        }
        return;
    }

    function dealerDraw() {
        dealerArray.push(deck1.deck[Math.floor(Math.random() * deck1.deck.length)])
        dealerTotal = 0;
        for (let i = 0; i < dealerArray.length; i++) {
            if (dealerArray[i] == 'Ace of Spades' || dealerArray[i] == 'Ace of Clubs' || dealerArray[i] == 'Ace of Diamonds' || dealerArray[i] == 'Ace of Hearts') {
                dealerTotal += 11;
            }
            else if (dealerArray[i] == 'King of Spades' || dealerArray[i] == 'King of Clubs' || dealerArray[i] == 'King of Diamonds' || dealerArray[i] == 'King of Hearts') {
                dealerTotal += 10;
            }
            else if (dealerArray[i] == 'Queen of Spades' || dealerArray[i] == 'Queen of Clubs' || dealerArray[i] == 'Queen of Diamonds' || dealerArray[i] == 'Queen of Hearts') {
                dealerTotal += 10;
            }
            else if (dealerArray[i] == 'Jack of Spades' || dealerArray[i] == 'Jack of Clubs' || dealerArray[i] == 'Jack of Diamonds' || dealerArray[i] == 'Jack of Hearts') {
                dealerTotal += 10;
            }
            else {
                dealerTotal += parseInt(dealerArray[i].charAt(0));
            }
        }
        return;
    }

    playerDraw();
    playerDraw();
    dealerDraw();
    dealerDraw();



    $('#dealer2').text("Total : " + dealerTotal)


    $('#player2').text("Total : " + playerTotal);

    function playerCheck() {
        if (playerTotal > 21) {
            for (let i = 0; i < playerArray.length; i++) {
                if (playerArray[i] == 'Ace of Spades' || playerArray[i] == 'Ace of Clubs' || playerArray[i] == 'Ace of Diamonds' || playerArray[i] == 'Ace of Hearts') {
                    playerTotal -= 11
                    playerTotal++
                    $('#player1').text(playerArray);
                    $('#player2').text("Total : " + playerTotal);
                    return;
                }
            }
        }
    }

    function dealerCheck() {
        if (dealerTotal > 21) {
            for (let i = 0; i < dealerArray.length; i++) {
                if (dealerArray[i] == 'Ace of Spades' || dealerArray[i] == 'Ace of Clubs' || dealerArray[i] == 'Ace of Diamonds' || dealerArray[i] == 'Ace of Hearts') {
                    dealerTotal -= 11;
                    dealerTotal++;
                    $('#dealer1').text(dealerArray);
                    $('#dealer2').text("Total: " + dealerTotal);
                    return;
                }
            }
        }
    }

    playerCheck();
    dealerCheck();

    function playBustCheck() {
        if (playerTotal > 21) {
            $('#bust').text('You have busted! House wins!');
        }

    }

    function dealBustCheck() {
        if (dealerTotal > 21){
            $('#bust').text('House has busted! Player wins!')
        }
    }


    $('#hit').on('click', function () {
        playerDraw();
        playerCheck();
        $('#player1').text(playerArray)
        $('#player2').text("Total : " + playerTotal);
        playBustCheck();
    })

    $('#stand').on('click', function () {

        while (dealerTotal < 16 && playerTotal > dealerTotal) {
            dealerDraw();
            dealerCheck();
            $('#dealer1').text(dealerArray);
            $('#dealer2').text("Total : " + dealerTotal);
        }

        if (dealerTotal>21) {
            dealBustCheck();
        }

        else if (dealerTotal >= 16 && dealerTotal == playerTotal) {
            $('#bust').text("House and player have tied!")
        }

        else if (dealerTotal >= 16 && dealerTotal > playerTotal) {
            $('#bust').text("House wins!");
        }

        else if (dealerTotal >= 16 && dealerTotal < playerTotal) {
            $('#bust').text("Player wins!");
        }

        
    })
    $('#reset').on('click', function () {
        location.reload();
    })
})