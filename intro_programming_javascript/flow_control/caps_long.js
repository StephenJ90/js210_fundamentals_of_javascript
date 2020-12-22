function capsLong(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(capsLong('goodbye'));
console.log(capsLong('Hello World!'));