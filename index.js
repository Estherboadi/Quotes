// create a list to contain all quotes and their authors
const QUOTES = [
	{
		text: "Life isn't about getting and having, it's about giving and being.",
		author: "Kevin Kruse",
	},
	{
		text: "There is only on way to avoid criticism: do nothing, say nothing and be nothing.",
		author: "Aristotle",
	},
	{
		text: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
		author: "Dalai Lama",
	},
];

// function to get random quote from the list
function getRandomQoute() {
    // get number of quotes in list
	const numOfQuotes = QUOTES.length;

    // use inbuilt random function to get a random index that is less than the number of quotes
	const randomIndex = Math.floor(Math.random() * numOfQuotes);

    // use that random index to select an item from QUOTES
	const randomQuote = QUOTES[randomIndex];
	// console.log(randomQuote)

    // use document selectors to get the elements that will display the data
	const quoteTextElement = document.getElementById("quote-text");
	const quoteAuthorElement = document.getElementById("quote-author");

    // set their text to show the randomized quote text and author
	quoteTextElement.innerHTML = randomQuote.text;
	quoteAuthorElement.innerHTML = randomQuote.author;
}

// var currentQuote = ".blockquote p";

// var currentQuote ="";

// function changeQuote(){
//     $(allQuotes[currentQuote]).fadeOut(200 ,function(){

//         if (currentQuote==allQuotes.length -1){
//             currentQuote=0;
//         }else{
//             currentQuote++;
//         }
//         $(allQuotes[currentQuote]).fadeIn(200);

//         $("#new-quote").on("click", changeQuote());

//     });
// };

// event listeners as their name implies listen for actions on your page. Something like domcontentloaded listens for when the page has been able to show all elements that need to be shown on the page. Onclick listens for any click event on the element the event is attached to. If you look through the html, the 'New Quote' button has the id 'new-quote'. So anytime this button is 'clicked', it will run the function 'getRandomQuote'. The reason why 'getRandomQoute' runs when domcontentloaded is fired is because by default no quote is showing (refer to the html, there is nothing there except for the tags themselves). So in order to show a quote when the page is first loaded, we run it with that event listener.
document.addEventListener("DOMContentLoaded", getRandomQoute);
document.getElementById("new-quote").addEventListener("click", getRandomQoute);
