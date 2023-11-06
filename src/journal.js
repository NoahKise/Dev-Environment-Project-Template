export default function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function () {
  return "I can't answer that yet!";
};