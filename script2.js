// Sample array of quotes and authors
const quotes = [
  {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
  },
  {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
  },
  {
      text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr."
  },
  {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
  },
  {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
  }
];

// Function to generate a random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById("quote-text").textContent = randomQuote.text;
  document.getElementById("quote-author").textContent = `- ${randomQuote.author}`;
}

// Event listener for the "New Quote" button
document.getElementById("new-quote-btn").addEventListener("click", generateRandomQuote);

// Initial quote generation
generateRandomQuote();
