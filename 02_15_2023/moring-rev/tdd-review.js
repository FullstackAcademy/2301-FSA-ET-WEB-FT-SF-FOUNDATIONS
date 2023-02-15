const isRelevant = (topics, paragraph) => {

    // Account for LowerCase
    for (let i = 0; i < topics.length; i++) {
        topics[i] = topics[i].toLowerCase()
    }
    paragraph = paragraph.toLowerCase() // make the sentence all lowercase

    // Check for is relevant
    const words = paragraph.split(" ");
   
    for (const word of words) {
      if (topics.includes(word)) {
        return true;
      }
    }
    return false;
}


// isRelevant(['cat', 'kitten'], "The quick brown fox jumps over the lazy dog"); // false
// console.log(isRelevant(['cat', 'fox'], "The quick brown fox jumps over the lazy dog")); // true


const about = (topics) => (sentence) => isRelevant(topics, sentence)

// const aboutCats = about(["cat", "kitten", "cats"]);
// let ans = aboutCats('there once was a DOG')
// console.log(ans)

const getRelevantSentences = (criteriaFn, sentences) => {

    let sentencesToKeep = []

    for ( const sent of sentences) {
        if (criteriaFn(sent)) {
            // keep the sentence to return later
            sentencesToKeep.push(sent)
        } // else do nothing
    }

    return sentencesToKeep
}

const sentences = [
    "I have a pet cat.",
    "I have a pet dog.",
    "I don't have a pet.",
    "less",
    "than",
    "five"
  ];

// let ans = getRelevantSentences((s) => s.length > 5, sentences)

const getLengthDistance = (s1, s2) => Math.abs(s1.length - s2.length);


const getClosestDistance = (words, inputWord, limit) => {

    let currentClosestWord;
    let currentClosestDistance = Number.MAX_VALUE

    for (let i = 0; i < words.length; i++) {
        let nextWord = words[i]

        let distance = getLengthDistance(nextWord, inputWord)

        if (distance < currentClosestDistance) {
            currentClosestDistance = distance // replaces with the new smallest
            currentClosestWord = nextWord
        }
    }

    // currentClosestDistance is the smallest distance we found
    // currentClosestWord is the word that is closest to the input Word
    
    // if ( currentClosestDistance < limit) {
    //     return currentClosestWord
    // } else {
    //     return inputWord
    // }

    return currentClosestDistance < limit ? currentClosestWord : inputWord;
}


const isSame = (s1, s2) => {
    /// Base Cases
    // Both empty
    if (s1.length === 0 && s2.length === 0) {
      return true;
    }
  
    // Difference in lengths
    if (s1.length === 0 || s2.length === 0) {
      return false;
    }
  
    /// Different first letter
    if (s1[0] !== s2[0]) {
      return false;
    }
  
    /// Recursive case
    return isSame(s1.slice(1), s2.slice(1));
  };

  const getClosestWord = (words, word, distanceFn, limit) => {
    let currentClosestWord;
    let currentClosestDistance = Number.MAX_VALUE;
  
    for (const w of words) {
      const distance = distanceFn(w, word); // The only line that has changed
      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestWord = w;
      }
    }
      // Uses conditional ternary operator (?) to return
  return currentClosestDistance < limit ? currentClosestWord : word;
};