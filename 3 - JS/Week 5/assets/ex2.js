function removeVowels(str) {
  var str = document.getElementById("vowelsRemoved").value;
  let strArr = str.split("");
  for (let x = 0; x < str.length; x++) {
    let char = str[x].toLowerCase();
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      strArr[x] = "";
    }
  }
  alert("" + strArr);
  return strArr.join("");
}
