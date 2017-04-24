/****** defining the functions ******/

//remove spaces, capital letters, etc.
function tokenizeText(text) {

    //remove all the returns in the input text
    var textWithoutReturns = text.replace(/\r?\n|\r/g, "");

    var textWithoutSpaceTabsOrReturns = textWithoutReturns.toLowerCase().match(/\b[^\s]+\b/g).sort();

    return textWithoutSpaceTabsOrReturns;
}

//how to display results (not sure where this needs to go)

//target when the 'analyze it!' button is pushed

//??? this wasn't in the solution- not sure if it's correct ???
//word count
function getWordCount(text) {
    //get the total word count
    var wordCount = tokenizeText(text).length;
}

//unique word count
//for loop to find how many of each word is in text
//create empty array for the output; convert strings to arrays
function countDistinctWords(tokens) {
    var distinctWords = [];

    //loop through the array of tokens and use .length to count words
    for (var i = 0; i < tokens.length; i++) {

        //if the current word is not already in the distinctWords words ...
        if (distinctWords.indexOf(tokens[i]) === -1) {

            //add a new distinctWord
            distinctWords.push(tokens[i]);
        }
    }

    //return the length of the distinctWords
    return distinctWords.length;
}

//average word length
function getAvgWordLength(tokens) {

    //combine all the tokens to create one long string to get the total numbers of letters in the text
    var totalNumberOfLetters = tokens.join("").length;

    //divide the total number of letters by the total number of words
    var avgWordLength = (totalNumberOfLetters / tokens.length);

    //display no more than 2 decimals for this value
    var formatAvgWordLength = avgWordLength.toFixed(2);

    return formatavgWordLength;
}

/****** using the defined functions ******/

// $(document).ready(function() {...}) == when the page loads, execute the following commands:
$(document).ready(function () {

    //when the form is submitted:
    $('.js-text-form').submit(function (event) {

        //if the page refreshes when you submit the form, use "preventDefault()" to force JS to handle the form submission
        event.preventDefault();

        //get the text the user submitted
        var userText = $(this).find('#user-text').val();

        //tokenize the user input text
        var tokens = tokenizeText(userText);

        //calculate the total number of words
        var numTotalWords = tokens.length;

        //calculate the total number of distinct words
        var numDistinctWords = countDistinctWords(tokens);

        //calculate average word length
        var avgWordLength = getAvgWordLength(tokens);



        //populate the container with the total number of words
        $('.js-text-report').find('.js-word-count').text(numTotalWords);

        //populate the container with the number of distinct words
        $('.js-text-report').find('.js-unique-word-count').text(numDistinctWords);

        //populate the container with the average word length
        $('.js-text-report').find('.js-average-word-length').text(avgWordLength + " characters");

        //show the container with all the info from above
        $('.js-text-report').removeClass('hidden');
    });
});


/****** notes ******/
// FOR LOOP
//use if you know both ends of the loop (START and STOP)
//ex: count between START and STOP value using the STEP
/*for(var counter = START; counter < END; counter + STEP) {
    do stuff
}
  */

// WHILE LOOP
//use if you know only one end of the loop (START or STOP)
//ex: count up (down) to the START (STOP) value using the STEP
/*while (var counter < LIMIT) {
    do stuff;
    //count towards the limit using some step value
    counter + STEP;
}
   */
