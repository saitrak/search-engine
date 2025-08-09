// Get the elements from the HTML
const textInput = document.getElementById('text-input');
const wordCountElem = document.getElementById('word-count');
const charCountElem = document.getElementById('char-count');
const sentenceCountElem = document.getElementById('sentence-count');

// Add an event listener that fires whenever the user types
textInput.addEventListener('input', () => {
    const text = textInput.value;

    // 1. Calculate Character Count
    const charCount = text.length;
    charCountElem.textContent = charCount;

    // 2. Calculate Word Count
    // Trim removes whitespace from both ends of a string
    // Split by spaces (and handle multiple spaces) to get an array of words
    const words = text.trim().split(/\s+/);
    // Filter out empty strings that can result from multiple spaces
    const wordCount = words.filter(word => word !== '').length;
    wordCountElem.textContent = wordCount;

    // 3. Calculate Sentence Count
    // Split by sentence-ending punctuation. Using a regular expression.
    // This looks for periods, exclamation marks, or question marks.
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;
    sentenceCountElem.textContent = sentenceCount;
});
