//42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magician great through .map()will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define array of magicians names 
var magician_names = ["usama", "hamza", "ali"];
// call make _ great function to modify magicians nmes 
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
