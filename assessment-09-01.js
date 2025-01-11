const n = 5;
let square = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    square += "* ";
  }
  square += "\n";
}
console.log(square);

let triangle = "";
for (let i = 1; i <= n; i++) {
  triangle += "* ".repeat(i);
  triangle += "\n";
}
console.log(triangle);

let x = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == j || i + j == 6) {
      x += "* ";
    } else {
      x += "  ";
    }
  }
  x += "\n";
}
console.log(x);

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    document.writeln("*");
  }
  document.write("<br>");
}

document.writeln("<br/>");

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i >= j) {
      document.writeln("*&nbsp");
    } else {
      document.writeln("&nbsp");
    }
  }
  document.write("<br>");
}
document.writeln("<br/>");

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    if (i >= j) {
      document.writeln("*&nbsp");
    }
  }
  document.write("<br>");
}
document.writeln("<br/>");

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i == j || i + j == 6) {
      document.writeln("*");
    } else {
      document.writeln("&nbsp&nbsp&nbsp");
    }
  }
  document.write("<br>");
}
