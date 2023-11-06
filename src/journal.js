export default function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function () {
  const entryArray = this.body.split(" ");
  const numberOfWords = entryArray.length;
  return numberOfWords;
};

Entry.prototype.letterCount = function () {
  const lettersArray = this.body.toLowerCase().split("");
  const vowelArray = ["a", "e", "i", "o", "u"];
  const conArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  let vowelCount = 0;
  let conCount = 0;
  for (let i = 0; i < lettersArray.length; i++) {
    if (vowelArray.includes(lettersArray[i])) {
      vowelCount += 1;
    } else if (conArray.includes(lettersArray[i])) {
      conCount += 1;
    } 
  }
  return { vowelCount, conCount };
};

Entry.prototype.teaser = function() {
  const periodArray = this.body.split(".");
  const exArray = periodArray[0].split("!");
  const qArray = exArray[0].split("?");
  const teaser = qArray[0].split(" ");
  const finalTeaser = teaser.slice(0, 8);
  const teaserString = finalTeaser.join(" ");
  return teaserString;
}