var winsElement = $('#wins')

var lossesElement = $('#losses')

var farElement = $('#far')

var keys = ['a','b', 'c','d','e','f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z']

var randomkey
var guessesLeft = 9
var wins = 0
var losses = 0

function setUp (){
    var random = Math.floor(Math.random() * 25) + 0 
    randomkey = keys[random]
}

setUp()

// setup event listener for keyup events on the body using jQuery 
$(document).keyup( function(event) {

    if(randomkey == event.key){
        // inform the user that they won 
        alert("You win! ")
        // reset the number of guesses
        guessesLeft = 9
        // update the guesses to the document
        $("#left").text(guessesLeft)

        // update number of wins 
        wins++

        // update to the document
        $('#wins').text(wins)

        // reset the "gueseses so far" span 
        $('#far').text("")

        // generate a new random number
        setUp()


    } else {
        // if not correctly guessed subtract one guess
        guessesLeft = guessesLeft - 1
        // update the value to the document
        $("#left").text(guessesLeft)

        // append the guessed key to the "guesses so far" span 
        $('#far').append(event.key)

        // if the values of guesses is zero, you lost 
        if(guessesLeft == 0){


            // tell the user they lost
            alert("you lost")
            
            // update the number of losses
            losses++

            // update the number of losses to the docyment 
            $('#losses').text(losses)

            // reset the amount of guesses
            guessesLeft = 9
            //updated the resset value into the document 
            $("#left").text(guessesLeft)
            // call the setup function again
            // this generates a new randomkey to guess against
            setUp()

            // reset the "gueseses so far" span 
            $('#far').text("")

        }
    }

    

})



