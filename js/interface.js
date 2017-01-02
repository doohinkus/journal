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
