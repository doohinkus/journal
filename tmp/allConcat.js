var Entry = require('./../js/journal.js').journalModule;

$(document).ready(function (){
  $("#journal").submit(function (event){
    event.preventDefault();
    var title = $(".title").val();
    var body = $('.body').val();

    var entry = new Entry(title, body);

    $(".title").hide().text(title).fadeIn("slow");
    $(".teaser").hide().text(entry.getTeaser()).fadeIn();
    $(".vowels").hide().fadeIn();
    $(".vowels span").text(entry.countVowels()).fadeIn();
    $(".consonants").hide().fadeIn();
    $(".consonants span").text(entry.countConsonants()).fadeIn();

  });
});

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
   return letters;
};

Entry.prototype.getTeaser = function (){
  var sentences = this.body.match(/[^\.!\?]+[^\.!\?]+/g);
  // var wordCount = sentences[0].match(/[\s]/g).length+1;
  return sentences[0].replace(/(([^\s]+\s\s*){8})(.*)/,"$1..") + ".";
};
exports.journalModule = Entry;
