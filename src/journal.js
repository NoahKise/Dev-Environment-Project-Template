export default function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  const entryArray = this.body.split(" ");
  const numberOfWords = entryArray.length;
  return numberOfWords;
};

Entry.prototype.letterCount = function() {
  const lettersArray = this.body.split("");
  const vowelArray = ["a", "e", "i", "o", "u"];
  const space = " ";
  let vowelCount = 0;
  let consonantCount = 0;
  for (let i = 0; i < lettersArray.length; i++) {
    if (vowelArray.includes(lettersArray[i])) {
      vowelCount += 1;
    } else if (space.includes(lettersArray[i])) {
      null;
    } else {
      consonantCount += 1;
    }
  }
return {vowelCount, consonantCount};
};