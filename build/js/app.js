(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
