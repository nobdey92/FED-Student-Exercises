function checkNumber() {
  const message = document.getElementById("output");
  message.innerHTML = "";
  let x = document.getElementById("numChecker").value;
  try {
    if (x.trim() == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
    x = Number(x);
    if (x % 15 == 0) return (message.innerHTML = "FizzBuzz");
    else if (x % 3 == 0) return (message.innerHTML = "Fizz");
    else if (x % 5 == 0) return (message.innerHTML = "Buzz");
    else return (message.innerHTML = x);
  } catch (err) {
    message.innerHTML = "Input " + err;
  } finally {
    document.getElementById("numChecker").value = "";
  }
}
