$(document).ready(function () {
    console.log("jQuery active")

    // var deck = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11];


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
    console.log(deck1);

    // console.log(deck);
    // var shuffledDeck = _.shuffle(deck1);
    // console.log(shuffledDeck);


    var playerArray = []
    var playerTotal = 0
    var playAddTotal = 0;
    var dealerArray = []
    var dealerTotal = 0
    var dealAddTotal = 0;

    // playerArray.push(shuffledDeck[Math.floor(Math.random() * shuffledDeck.length)])
    // playerArray.push(shuffledDeck[Math.floor(Math.random() * shuffledDeck.length)])

    playerArray.push(deck1.deck[Math.floor(Math.random() * deck1.deck.length)])
    playerArray.push(deck1.deck[Math.floor(Math.random() * deck1.deck.length)])

    // dealerArray.push(shuffledDeck[Math.floor(Math.random() * shuffledDeck.length)])
    // dealerArray.push(shuffledDeck[Math.floor(Math.random() * shuffledDeck.length)])

    dealerArray.push(deck1.deck[Math.floor(Math.random() * deck1.deck.length)])
    dealerArray.push(deck1.deck[Math.floor(Math.random() * deck1.deck.length)])


    for (let i = 0; i < playerArray.length; i++) {
        console.log(playerArray[i]);
        if (playerArray[i] == 'Ace of Spades' || playerArray[i] == 'Ace of Clubs' || playerArray[i] == 'Ace of Diamonds' || playerArray[i] == 'Ace of Hearts') {
            playAddTotal += 11;
        }
        else if (playerArray[i] == 'King of Spades' || playerArray[i] == 'King of Clubs' || playerArray[i] == 'King of Diamonds' || playerArray[i] == 'King of Hearts') {
            playAddTotal += 10;
        }
        else if (playerArray[i] == 'Queen of Spades' || playerArray[i] == 'Queen of Clubs' || playerArray[i] == 'Queen of Diamonds' || playerArray[i] == 'Queen of Hearts') {
            playAddTotal += 10;
        }
        else if (playerArray[i] == 'Jack of Spades' || playerArray[i] == 'Jack of Clubs' || playerArray[i] == 'Jack of Diamonds' || playerArray[i] == 'Jack of Hearts') {
            playAddTotal += 10;
        }
        else {
            playAddTotal += parseInt(playerArray[i].charAt(0));
        }
        console.log(playAddTotal)
    }

    playerTotal += playAddTotal;

    for (let i = 0; i < dealerArray.length; i++) {
        console.log(dealerArray[i]);
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

        console.log(dealerTotal)
    }

    dealerTotal += dealAddTotal

    $('#dealer1').text(dealerArray)
    $('#dealer2').text("Total : " + dealerTotal)

    $('#player1').text(playerArray)
    $('#player2').text("Total : " + playerTotal);

    function playerCheck() {
        if (playerTotal > 21) {
            for (let i = 0; i < playerArray.length; i++) {
                if (playerArray[i] == 11) {
                    playerTotal -= 11
                    playerTotal++
                    console.log(playerTotal)
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
                if (dealerArray[i] == 11) {
                    dealerArray.splice(i, 1, 1)
                    dealerTotal -= 11
                    dealerTotal++
                    console.log(dealerTotal)
                    $('#dealer1').text(dealerArray);
                    $('#dealer2').text("Total : " + dealerTotal)
                    return;
                }
            }
        }
    }

    playerCheck();
    dealerCheck();


    $('#hit').on('click', function () {
        playerTotal = 0;

        // playerArray.push(shuffledDeck[Math.floor(Math.random() * shuffledDeck.length)])

        for (let i = 0; i < playerArray.length; i++) {
            playerTotal += playerArray[i];
        }
        $('#player1').text(playerArray);
        $('#player2').text("Total : " + playerTotal);
        if (playerTotal > 21) {
            for (let i = 0; i < playerArray.length; i++) {
                if (playerArray[i] == 11) {
                    playerArray.splice(i, 1, 1)
                    playerTotal -= 11
                    playerTotal++
                    console.log(playerTotal)
                    $('#player1').text(playerArray);
                    $('#player2').text("Total : " + playerTotal);
                }
            }
            if (playerTotal > 21) {
                $('#bust').text("You have busted!");
            }
        }
    })

    $('#stand').on('click', function () {

        if (dealerTotal >= 16 && dealerTotal == playerTotal) {
            $('#bust').text("House and player have tied!")
        }

        if (dealerTotal > playerTotal) {
            $('#bust').text("House wins!");
        }

        if (dealerTotal < playerTotal) {
            $('#bust').text("Player wins!");
        }

        while (dealerTotal < 16 && playerTotal > dealerTotal) {

            dealerTotal = 0;
            // dealerArray.push(shuffledDeck[Math.floor(Math.random() * shuffledDeck.length)])
            console.log(dealerArray)

            for (let i = 0; i < dealerArray.length; i++) {
                dealerTotal += dealerArray[i];
            }
            $('#dealer1').text(dealerArray);
            $('#dealer2').text("Total : " + dealerTotal)
            if (dealerTotal > 21) {
                for (let i = 0; i < dealerArray.length; i++) {
                    if (dealerArray[i] == 11) {
                        dealerArray.splice(i, 1, 1)
                        dealerTotal -= 11
                        dealerTotal++
                        console.log(dealerTotal)
                        $('#dealer1').text(dealerArray);
                        $('#dealer2').text("Total : " + dealerTotal)
                    }
                }
                if (dealerTotal > 21) {
                    $('#bust').text("House has busted! You won!");
                }
            }
            else if (dealerTotal >= 16 && dealerTotal > playerTotal) {
                $('#bust').text("House wins!")
            }

            else if (dealerTotal >= 16 && playerTotal > dealerTotal) {
                $('#bust').text("You won!")
            }
            else if (dealerTotal == playerTotal) {
                $('#bust').text("House and player have tied!")
            }
        }
    })
    $('#reset').on('click', function () {
        location.reload();
    })
})