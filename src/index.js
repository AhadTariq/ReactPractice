const colors = ["red", "yellow", "green"];

//using call back functions
const items = colors.map(function (color) {
  return "<li>" + color + "</li>";
});

//Simplfying it with arrow functions
const item = colors.map((color) => "<li>" + color + "</li>");

//another simplest way
const itemsOFcolor = colors.map((color) => `<li>${color}</li>`);

console.log(item);
console.log(items);
console.log(itemsOFcolor);
