var allQuotes = [
  {
    quote: " “Be yourself; everyone else is already taken.” ",
    author: "― Oscar Wilde",
  },

  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "― Mark Twain",
  },
  {
    quote:
      "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” ",
    author: "― Maya Angelou ",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "― Elbert Hubbard ",
  },
  {
    quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "― Oscar Wilde",
  },
  {
    quote: "“Always forgive your enemies; nothing annoys them so much.” ",
    author: "― Oscar Wilde ",
  },
  {
    quote:
      " “Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.” ",
    author:
      "― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches ",
  },
  {
    quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "― Mahatma Gandhi",
  },
  {
    quote: "“We accept the love we think we deserve.”",
    author: "― Stephen Chbosky, The Perks of Being a Wallflower",
  },
  {
    quote: "“Without music, life would be a mistake.”",
    author: "― Friedrich Nietzsche, Twilight of the Idols",
  },
  {
    quote:
      "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    author: "― Oscar Wilde, The Happy Prince and Other Stories ",
  },
  {
    quote:
      "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” ",

    author: "― Ralph Waldo Emerson",
  },
];

function randomQuote() {
  var randomQuoteArrange = Math.trunc(Math.random() * allQuotes.length + 1);
  document.getElementById("quote").innerHTML = allQuotes[randomQuoteArrange].quote;
  document.getElementById("author").innerHTML = allQuotes[randomQuoteArrange].author;
}

