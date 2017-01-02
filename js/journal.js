function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.countVowels = function () {
  var letters = this.body.match(/[aeiou]/gi).length;
  return letters;
};

Entry.prototype.countConsonants = function () {
 var letters = this.body.match(/[bcdfghjklmnpqrstvwxz]/gi).length;
 console.log(letters);
 return letters;
};

var test = new Entry("asdf", "A man from portland had a plan");
test.countConsonants();
