$(document).ready(function() {
  
  var randomQuote;
  var randomNum;
  var currentAuthor;
  getQuote();
  function getQuote() {
    
    var quotes = ["Don't cry because it's over, smile because it happened.", "Be yourself; everyone else is already taken.", "Be the change that you wish to see in the world.", "I have not failed. I've just found 10,000 ways that won't work.", "If you don't stand for something you will fall for anything.", "Love all, trust a few, do wrong to none.", "That which does not kill us makes us stronger.", "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", "If you judge people, you have no time to love them.", "Sometimes the questions are complicated and the answers are simple.", "The more that you read, the more things you will know. The more that you learn, the more places you'll go."];
    var author = ["― Dr. Seuss", "― Oscar Wilde", "― Mahatma Gandhi", "― Thomas A. Edison", "― Gordon A. Eadie", "― William Shakespeare, All's Well That Ends Well", "― Friedrich Nietzsche", "― Lao Tzu", "― Mother Teresa", "― Dr. Seuss", "― Dr. Seuss"];
    randomNum = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[randomNum];
    currentAuthor = author[randomNum];
    
    $("#text").text(randomQuote);
    $("#author").text(currentAuthor);
  }
  
  $("#tweet-quote").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " " + currentAuthor);
  });
  
  $("#new-quote").on("click", function() {
    getQuote();
    $("#quotes").animate({opacity: 0}, 500);
    $("#quotes").animate({opacity: 1}, 500);
  });
  
  
  
});