var choice = prompt(
  "Welcome to perimeter calculator.\nPlease enter your choice:\n1. Perimeter of Rectangle\n2. Perimeter of Triangle\n3. Circumference of Circle\n4. Perimeter of Parallelogram"
);

if (choice == "1") {
  var l = prompt("Enter the length");
  var b = prompt("Enter the breadth");
  var result = 2 * (Number(l) + Number(b));
  alert("The Perimeter is " + result);
}

if (choice == "2") {
  var a = prompt("Enter the length of the first side");
  var b = prompt("Enter the length of the second side");
  var c = prompt("Enter the length of the third side");
  var result = Number(a) + Number(b) + Number(c);
  alert("The Perimeter is " + result);
}

if (choice == "3") {
  var r = prompt("Enter the radius");
  var result = 2 * 3.1416 * Number(r);
  alert("The Circumference is " + result);
}

if (choice == "4") {
  var h = prompt("Enter the length of one pair of parallel sides");
  var b = prompt("Enter the length of the other pair of parallel sides");
  var result = 2 * (Number(h) + Number(b));
  alert("The Perimeter is " + result);
}
