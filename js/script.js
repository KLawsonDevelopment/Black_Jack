$(document).ready(function () {
    console.log("jQuery active")

    //Took this Deck class from https://wsvincent.com/javascript-object-oriented-deck-cards/
    // Deck class

    class Deck {
        constructor(deck) {
            this.deck = [];

            const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
            const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

            for (let suit in suits) {
                for (let value in values) {
                    this.deck.push(`${values[value]} of ${suits[suit]}`);
                }
            }
        }
    }

    var deck1 = new Deck();

    //Target player side cards for manipulation
    var playcard1 = document.querySelector('.playcard1')
    var playcard2 = document.querySelector('.playcard2')
    var playcard3 = document.querySelector('.playcard3')
    var playcard4 = document.querySelector('.playcard4')
    var playcard5 = document.querySelector('.playcard5')


    //Target dealer side cards for manipulation
    var dealcard1 = document.querySelector('.dealcard1')
    var dealcard2 = document.querySelector('.dealcard2')
    var dealcard3 = document.querySelector('.dealcard3')
    var dealcard4 = document.querySelector('.dealcard4')
    var dealcard5 = document.querySelector('.dealcard5')


    //Global variables
    var playerArray = []
    var playerTotal = 0
    var playerCardArr = [playcard1, playcard2, playcard3, playcard4, playcard5]
    var dealerArray = []
    var dealerTotal = 0
    var dealerCardArr = [dealcard1, dealcard2, dealcard3, dealcard4, dealcard5];




    //Player draws a card
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
                playerTotal += parseInt(playerArray[i].substring(0, 2));
            }
        }
        return;
    }

    //Dealer draws a card
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
                dealerTotal += parseInt(dealerArray[i].substring(0, 2));
            }
        }
        return;
    }

    //Flip player side card to proper card image
    function playCardFlip(playcard) {
        for (let i = 0; i < playcard.length; i++) {
            if (playerArray[i] == 'Ace of Spades') {
                $(playcard[i]).attr('src', '/JPEG/AS.jpg');
            }
            else if (playerArray[i] == 'Ace of Diamonds') {
                $(playcard[i]).attr('src', '/JPEG/AD.jpg');
            }
            else if (playerArray[i] == 'Ace of Clubs') {
                $(playcard[i]).attr('src', '/JPEG/AC.jpg');
            }
            else if (playerArray[i] == 'Ace of Hearts') {
                $(playcard[i]).attr('src', '/JPEG/AH.jpg');
            }
            else if (playerArray[i] == '2 of Spades') {
                $(playcard[i]).attr('src', '/JPEG/2S.jpg');
            }
            else if (playerArray[i] == '2 of Diamonds') {
                $(playcard[i]).attr('src', '/JPEG/2D.jpg');
            }
            else if (playerArray[i] == '2 of Clubs') {
                $(playcard[i]).attr('src', '/JPEG/2C.jpg');
            }
            else if (playerArray[i] == '2 of Hearts') {
                $(playcard[i]).attr('src', '/JPEG/2H.jpg');
            }
            else if (playerArray[i] == '3 of Spades') {
                $(playcard[i]).attr('src', '/JPEG/3S.jpg');
            }
            else if (playerArray[i] == '3 of Diamonds') {
                $(playcard[i]).attr('src', '/JPEG/3D.jpg');
            }
            else if (playerArray[i] == '3 of Clubs') {
                $(playcard[i]).attr('src', '/JPEG/3C.jpg');
            }
            else if (playerArray[i] == '3 of Hearts') {
                $(playcard[i]).attr('src', '/JPEG/3H.jpg');
            }
            else if (playerArray[i] == '4 of Spades') {
                $(playcard[i]).attr('src', '/JPEG/4S.jpg');
            }
            else if (playerArray[i] == '4 of Diamonds') {
                $(playcard[i]).attr('src', '/JPEG/4D.jpg');
            }
            else if (playerArray[i] == '4 of Clubs') {
                $(playcard[i]).attr('src', '/JPEG/4C.jpg');
            }
            else if (playerArray[i] == '4 of Hearts') {
                $(playcard[i]).attr('src', '/JPEG/4H.jpg');
            }
            else if (playerArray[i] == '5 of Spades') {
                $(playcard[i]).attr('src', '/JPEG/5S.jpg');
            }
            else if (playerArray[i] == '5 of Diamonds') {
                $(playcard[i]).attr('src', '/JPEG/5D.jpg');
            }
            else if (playerArray[i] == '5 of Clubs') {
                $(playcard[i]).attr('src', '/JPEG/5C.jpg');
            }
            else if (playerArray[i] == '5 of Hearts') {
                $(playcard[i]).attr('src', '/JPEG/5H.jpg');
            }
            else if (playerArray[i] == '6 of Spades') {
                $(playcard[i]).attr('src', '/JPEG/6S.jpg');
            }
            else if (playerArray[i] == '6 of Diamonds') {
                $(playcard[i]).attr('src', '/JPEG/6D.jpg');
            }
            else if (playerArray[i] == '6 of Clubs') {
                $(playcard[i]).attr('src', '/JPEG/6C.jpg');
            }
            else if (playerArray[i] == '6 of Hearts') {
                $(playcard[i]).attr('src', '/JPEG/6H.jpg');
            }
            else if (playerArray[i] == '7 of Spades') {
                $(playcard[i]).attr('src', '/JPEG/7S.jpg');
            }
            else if (playerArray[i] == '7 of Diamonds') {
                $(playcard[i]).attr('src', '/JPEG/7D.jpg');
            }
            else if (playerArray[i] == '7 of Clubs') {
                $(playcard[i]).attr('src', '/JPEG/7C.jpg');
            }
            else if (playerArray[i] == '7 of Hearts') {
                $(playcard[i]).attr('src', '/JPEG/7H.jpg');
            }
            else if (playerArray[i] == '8 of Spades') {
                $(playcard[i]).attr('src', '/JPEG/8S.jpg');
            }
            else if (playerArray[i] == '8 of Diamonds') {
                $(playcard[i]).attr('src', '/JPEG/8D.jpg');
            }
            else if (playerArray[i] == '8 of Clubs') {
                $(playcard[i]).attr('src', '/JPEG/8C.jpg');
            }
            else if (playerArray[i] == '8 of Hearts') {
                $(playcard[i]).attr('src', '/JPEG/8H.jpg');
            }
            else if (playerArray[i] == '9 of Spades') {
                $(playcard[i]).attr('src', '/JPEG/9S.jpg');
            }
            else if (playerArray[i] == '9 of Diamonds') {
                $(playcard[i]).attr('src', '/JPEG/9D.jpg');
            }
            else if (playerArray[i] == '9 of Clubs') {
                $(playcard[i]).attr('src', '/JPEG/9C.jpg');
            }
            else if (playerArray[i] == '9 of Hearts') {
                $(playcard[i]).attr('src', '/JPEG/9H.jpg');
            }
            else if (playerArray[i] == '10 of Spades') {
                $(playcard[i]).attr('src', '/JPEG/10S.jpg');
            }
            else if (playerArray[i] == '10 of Diamonds') {
                $(playcard[i]).attr('src', '/JPEG/10D.jpg');
            }
            else if (playerArray[i] == '10 of Clubs') {
                $(playcard[i]).attr('src', '/JPEG/10C.jpg');
            }
            else if (playerArray[i] == '10 of Hearts') {
                $(playcard[i]).attr('src', '/JPEG/10H.jpg');
            }
            else if (playerArray[i] == 'Jack of Spades') {
                $(playcard[i]).attr('src', '/JPEG/JS.jpg');
            }
            else if (playerArray[i] == 'Jack of Diamonds') {
                $(playcard[i]).attr('src', '/JPEG/JD.jpg');
            }
            else if (playerArray[i] == 'Jack of Clubs') {
                $(playcard[i]).attr('src', '/JPEG/JC.jpg');
            }
            else if (playerArray[i] == 'Jack of Hearts') {
                $(playcard[i]).attr('src', '/JPEG/JH.jpg');
            }
            else if (playerArray[i] == 'Queen of Spades') {
                $(playcard[i]).attr('src', '/JPEG/QS.jpg');
            }
            else if (playerArray[i] == 'Queen of Diamonds') {
                $(playcard[i]).attr('src', '/JPEG/QD.jpg');
            }
            else if (playerArray[i] == 'Queen of Clubs') {
                $(playcard[i]).attr('src', '/JPEG/QC.jpg');
            }
            else if (playerArray[i] == 'Queen of Hearts') {
                $(playcard[i]).attr('src', '/JPEG/QH.jpg');
            }
            else if (playerArray[i] == 'King of Spades') {
                $(playcard[i]).attr('src', '/JPEG/KS.jpg');
            }
            else if (playerArray[i] == 'King of Diamonds') {
                $(playcard[i]).attr('src', '/JPEG/KD.jpg');
            }
            else if (playerArray[i] == 'King of Clubs') {
                $(playcard[i]).attr('src', '/JPEG/KC.jpg');
            }
            else if (playerArray[i] == 'King of Hearts') {
                $(playcard[i]).attr('src', '/JPEG/KH.jpg');
            }
        }
    }


    //Flip dealer side cards for proper card image
    function dealCardFlip(dealcard) {
        for (let i = 0; i < dealcard.length; i++) {
            if (dealerArray[i] == 'Ace of Spades') {
                $(dealcard[i]).attr('src', '/JPEG/AS.jpg');
            }
            else if (dealerArray[i] == 'Ace of Diamonds') {
                $(dealcard[i]).attr('src', '/JPEG/AD.jpg');
            }
            else if (dealerArray[i] == 'Ace of Clubs') {
                $(dealcard[i]).attr('src', '/JPEG/AC.jpg');
            }
            else if (dealerArray[i] == 'Ace of Hearts') {
                $(dealcard[i]).attr('src', '/JPEG/AH.jpg');
            }
            else if (dealerArray[i] == '2 of Spades') {
                $(dealcard[i]).attr('src', '/JPEG/2S.jpg');
            }
            else if (dealerArray[i] == '2 of Diamonds') {
                $(dealcard[i]).attr('src', '/JPEG/2D.jpg');
            }
            else if (dealerArray[i] == '2 of Clubs') {
                $(dealcard[i]).attr('src', '/JPEG/2C.jpg');
            }
            else if (dealerArray[i] == '2 of Hearts') {
                $(dealcard[i]).attr('src', '/JPEG/2H.jpg');
            }
            else if (dealerArray[i] == '3 of Spades') {
                $(dealcard[i]).attr('src', '/JPEG/3S.jpg');
            }
            else if (dealerArray[i] == '3 of Diamonds') {
                $(dealcard[i]).attr('src', '/JPEG/3D.jpg');
            }
            else if (dealerArray[i] == '3 of Clubs') {
                $(dealcard[i]).attr('src', '/JPEG/3C.jpg');
            }
            else if (dealerArray[i] == '3 of Hearts') {
                $(dealcard[i]).attr('src', '/JPEG/3H.jpg');
            }
            else if (dealerArray[i] == '4 of Spades') {
                $(dealcard[i]).attr('src', '/JPEG/4S.jpg');
            }
            else if (dealerArray[i] == '4 of Diamonds') {
                $(dealcard[i]).attr('src', '/JPEG/4D.jpg');
            }
            else if (dealerArray[i] == '4 of Clubs') {
                $(dealcard[i]).attr('src', '/JPEG/4C.jpg');
            }
            else if (dealerArray[i] == '4 of Hearts') {
                $(dealcard[i]).attr('src', '/JPEG/4H.jpg');
            }
            else if (dealerArray[i] == '5 of Spades') {
                $(dealcard[i]).attr('src', '/JPEG/5S.jpg');
            }
            else if (dealerArray[i] == '5 of Diamonds') {
                $(dealcard[i]).attr('src', '/JPEG/5D.jpg');
            }
            else if (dealerArray[i] == '5 of Clubs') {
                $(dealcard[i]).attr('src', '/JPEG/5C.jpg');
            }
            else if (dealerArray[i] == '5 of Hearts') {
                $(dealcard[i]).attr('src', '/JPEG/5H.jpg');
            }
            else if (dealerArray[i] == '6 of Spades') {
                $(dealcard[i]).attr('src', '/JPEG/6S.jpg');
            }
            else if (dealerArray[i] == '6 of Diamonds') {
                $(dealcard[i]).attr('src', '/JPEG/6D.jpg');
            }
            else if (dealerArray[i] == '6 of Clubs') {
                $(dealcard[i]).attr('src', '/JPEG/6C.jpg');
            }
            else if (dealerArray[i] == '6 of Hearts') {
                $(dealcard[i]).attr('src', '/JPEG/6H.jpg');
            }
            else if (dealerArray[i] == '7 of Spades') {
                $(dealcard[i]).attr('src', '/JPEG/7S.jpg');
            }
            else if (dealerArray[i] == '7 of Diamonds') {
                $(dealcard[i]).attr('src', '/JPEG/7D.jpg');
            }
            else if (dealerArray[i] == '7 of Clubs') {
                $(dealcard[i]).attr('src', '/JPEG/7C.jpg');
            }
            else if (dealerArray[i] == '7 of Hearts') {
                $(dealcard[i]).attr('src', '/JPEG/7H.jpg');
            }
            else if (dealerArray[i] == '8 of Spades') {
                $(dealcard[i]).attr('src', '/JPEG/8S.jpg');
            }
            else if (dealerArray[i] == '8 of Diamonds') {
                $(dealcard[i]).attr('src', '/JPEG/8D.jpg');
            }
            else if (dealerArray[i] == '8 of Clubs') {
                $(dealcard[i]).attr('src', '/JPEG/8C.jpg');
            }
            else if (dealerArray[i] == '8 of Hearts') {
                $(dealcard[i]).attr('src', '/JPEG/8H.jpg');
            }
            else if (dealerArray[i] == '9 of Spades') {
                $(dealcard[i]).attr('src', '/JPEG/9S.jpg');
            }
            else if (dealerArray[i] == '9 of Diamonds') {
                $(dealcard[i]).attr('src', '/JPEG/9D.jpg');
            }
            else if (dealerArray[i] == '9 of Clubs') {
                $(dealcard[i]).attr('src', '/JPEG/9C.jpg');
            }
            else if (dealerArray[i] == '9 of Hearts') {
                $(dealcard[i]).attr('src', '/JPEG/9H.jpg');
            }
            else if (dealerArray[i] == '10 of Spades') {
                $(dealcard[i]).attr('src', '/JPEG/10S.jpg');
            }
            else if (dealerArray[i] == '10 of Diamonds') {
                $(dealcard[i]).attr('src', '/JPEG/10D.jpg');
            }
            else if (dealerArray[i] == '10 of Clubs') {
                $(dealcard[i]).attr('src', '/JPEG/10C.jpg');
            }
            else if (dealerArray[i] == '10 of Hearts') {
                $(dealcard[i]).attr('src', '/JPEG/10H.jpg');
            }
            else if (dealerArray[i] == 'Jack of Spades') {
                $(dealcard[i]).attr('src', '/JPEG/JS.jpg');
            }
            else if (dealerArray[i] == 'Jack of Diamonds') {
                $(dealcard[i]).attr('src', '/JPEG/JD.jpg');
            }
            else if (dealerArray[i] == 'Jack of Clubs') {
                $(dealcard[i]).attr('src', '/JPEG/JC.jpg');
            }
            else if (dealerArray[i] == 'Jack of Hearts') {
                $(dealcard[i]).attr('src', '/JPEG/JH.jpg');
            }
            else if (dealerArray[i] == 'Queen of Spades') {
                $(dealcard[i]).attr('src', '/JPEG/QS.jpg');
            }
            else if (dealerArray[i] == 'Queen of Diamonds') {
                $(dealcard[i]).attr('src', '/JPEG/QD.jpg');
            }
            else if (dealerArray[i] == 'Queen of Clubs') {
                $(dealcard[i]).attr('src', '/JPEG/QC.jpg');
            }
            else if (dealerArray[i] == 'Queen of Hearts') {
                $(dealcard[i]).attr('src', '/JPEG/QH.jpg');
            }
            else if (dealerArray[i] == 'King of Spades') {
                $(dealcard[i]).attr('src', '/JPEG/KS.jpg');
            }
            else if (dealerArray[i] == 'King of Diamonds') {
                $(dealcard[i]).attr('src', '/JPEG/KD.jpg');
            }
            else if (dealerArray[i] == 'King of Clubs') {
                $(dealcard[i]).attr('src', '/JPEG/KC.jpg');
            }
            else if (dealerArray[i] == 'King of Hearts') {
                $(dealcard[i]).attr('src', '/JPEG/KH.jpg');
            }

        }
    }

    function playFlipAll(playcard) {
        for (let i = 0; i < playcard.length; i++) {
            $(playcard[i]).attr('src', '/JPEG/Gray_back.jpg')
        }
    }

    function dealFlipAll(dealcard) {
        for (let i = 0; i < dealcard.length; i++) {
            $(dealcard[i]).attr('src', '/JPEG/Gray_back.jpg')
        }
    }

    //Initial deck builds
    playerDraw();
    playerDraw();
    dealerDraw();
    dealerDraw();
    playCardFlip(playerCardArr);
    dealCardFlip(dealerCardArr);

    //Manipulate Dealer total
    $('#dealer2').text("Total : " + dealerTotal)

    //Manipulate Player total
    $('#player2').text("Total : " + playerTotal);

    //Check for Ace value
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

    //Check for Ace value
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

    //Initial check for double Ace
    playerCheck();
    dealerCheck();

    //Check for player Bust and deactivate buttons
    function playBustCheck() {
        if (playerTotal > 21) {
            $('#bust').text('You have busted! House wins!');
            $('#hit').prop("disabled", true);
            $('#stand').prop("disabled", true);
        }

    }

    //Check for Dealer Bust and deactivate buttons
    function dealBustCheck() {
        if (dealerTotal > 21) {
            $('#bust').text('House has busted! Player wins!')
            $('#hit').prop("disabled", true);
            $('#stand').prop("disabled", true);
        }
    }



    //Hit button activation
    $('#hit').on('click', function () {
        playerDraw();
        playCardFlip(playerCardArr);
        playerCheck();
        $('#player1').text(playerArray)
        $('#player2').text("Total : " + playerTotal);
        playBustCheck();
    })

    //Stand button activation
    $('#stand').on('click', function () {

        while (dealerTotal < 16 && playerTotal > dealerTotal) {
            dealerDraw();
            dealCardFlip(dealerCardArr)
            dealerCheck();
            $('#dealer1').text(dealerArray);
            $('#dealer2').text("Total : " + dealerTotal);
        }

        if (dealerTotal > 21) {
            dealBustCheck();
        }

        else if (dealerTotal >= 16 && dealerTotal == playerTotal) {
            $('#bust').text("House and player have tied!")
            $('#hit').prop("disabled", true);
            $('#stand').prop("disabled", true);
        }

        else if (dealerTotal >= 16 && dealerTotal > playerTotal) {
            $('#bust').text("House wins!");
            $('#hit').prop("disabled", true);
            $('#stand').prop("disabled", true);
        }

        else if (dealerTotal >= 16 && dealerTotal < playerTotal) {
            $('#bust').text("Player wins!");
            $('#hit').prop("disabled", true);
            $('#stand').prop("disabled", true);
        }
    })

    //Reset button to reload page
    $('#reset').on('click', function () {
        $('#hit').prop("disabled", false);
        $('#stand').prop("disabled", false);
        playerArray = [];
        dealerArray = [];
        playFlipAll(playerCardArr);
        dealFlipAll(dealerCardArr);
        playerDraw();
        playerDraw();
        dealerDraw();
        dealerDraw();
        playCardFlip(playerCardArr);
        dealCardFlip(dealerCardArr);
        $('#dealer2').text("Total : " + dealerTotal);
        $('#player2').text("Total : " + playerTotal);
        $('#bust').text("");
    })

    //Click on rules to bring up rules
    $('#rules').on('click', function () {
        $('#rulesText').removeClass('hidden')
    })

    //Click on 'I understand' to send rules away
    $('#okay').on('click', function () {
        $('#rulesText').addClass('hidden')
    })

    //Animations
    
    anime({
        targets: '.dealcard1',
        translateX: 420,
        delay: anime.stagger(100, { start: 500 })
    });

    anime({
        targets: '.dealcard2',
        translateX: 630,
        delay: anime.stagger(100, { start: 800 })
    })

    anime({
        targets: '.dealcard3',
        translateX: 840,
        delay: anime.stagger(100, { start: 1100 })
    })

    anime({
        targets: '.dealcard4',
        translateX: 1050,
        delay: anime.stagger(100, { start: 1400 })
    })

    anime({
        targets: '.dealcard5',
        translateX: 1260,
        delay: anime.stagger(100, { start: 1700 })
    })

    anime({
        targets: '.playcard1',
        translateY: 375,
        translateX: 420,
        delay: anime.stagger(100, { start: 2000 })
    })

    anime({
        targets: '.playcard2',
        translateY: 375,
        translateX: 630,
        delay: anime.stagger(100, { start: 2300 })
    })

    anime({
        targets: '.playcard3',
        translateY: 375,
        translateX: 840,
        delay: anime.stagger(100, { start: 2600 })
    })

    anime({
        targets: '.playcard4',
        translateY: 375,
        translateX: 1050,
        delay: anime.stagger(100, { start: 2900 })
    })

    anime({
        targets: '.playcard5',
        translateY: 375,
        translateX: 1260,
        delay: anime.stagger(100, { start: 3200 })
    })
})