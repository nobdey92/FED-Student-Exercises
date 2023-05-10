function titleCase(str) {
  // Lowercase the string
  str = str
    .toLowerCase()

    // Split the string into an array of strings
    .split(" ")

    // Map over the array
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

  // Return the output
  return str.join(" ");
}

console.log(titleCase("harry potter and the half blood prince"));
console.log(titleCase("lord of the rings the two towers"));
console.log(titleCase("WHITE CHICKS"));
console.log(titleCase("ClOcKwOrK OrAnGe"));
console.log(titleCase("the silence of the lambs"));
