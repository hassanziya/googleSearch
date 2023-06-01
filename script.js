// Array of words for search functionality
const wordsArray = [
  'apple',
  'banana',
  'cherry',
  'mango',
  'orange',
  'strawberry',
  'watermelon',
];

//google colors
const colors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];

// Getting the search input and matches container elements
const searchInput = document.getElementById('search-input');
const matchesContainer = document.getElementById('matches-container');

// Adding event listener to search input
searchInput.addEventListener('input', function (event) {
  const userInput = event.target.value.toLowerCase(); // Geting the user's input and converting it to lowercase
  matchesContainer.innerHTML = ''; // Clearing the matches container

  let matchedWords = [];

  // chacking whether  user's input is empty
  if (userInput.trim() !== '') {
    // Filtering the wordsArray based on the user's input
    matchedWords = wordsArray.filter(function (word) {
      return word.includes(userInput);
    });
  }

  // Iterating over the matched words and creating a list elements
  const ul = document.createElement('ul');
  matchesContainer.appendChild(ul);
  matchedWords.forEach((matchedWord) => {
    const span = document.createElement('span');
    const li = document.createElement('li');
    let highlightedText = '';

    [...matchedWord].forEach((char) => {
      if (userInput.includes(char)) {
        // Generating a random number between 1 and 4
        const randomNumber = Math.floor(Math.random() * 4) + 1;

        // Getting the google color corresponding to the random number
        const randomColor = colors[randomNumber - 1];
        highlightedText += `<span class="highlight" style="color: ${randomColor}">${char}</span>`;
      } else {
        highlightedText += `<span class="highlight">${char}</span>`;
      }
    });

    span.innerHTML = highlightedText;
    ul.appendChild(li);
    li.appendChild(span);
  });
});

// Dark/light mode toggle functionality
const toggleMode = document.getElementById('toggle-mode');
const darkModeIcon = document.getElementById('dark-mode-icon');
const lightModeIcon = document.getElementById('light-mode-icon');
const body = document.body;

toggleMode.addEventListener('change', function () {
  body.classList.toggle('dark-mode');
  const isDarkMode = toggleMode.checked;
  if (isDarkMode) {
    lightModeIcon.style.display = 'none';
    darkModeIcon.style.display = 'block';
  } else {
    darkModeIcon.style.display = 'none';
    lightModeIcon.style.display = 'block';
  }
});
