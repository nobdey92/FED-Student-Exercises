function checkNumber() {
  const message = document.getElementById("numChecked");
  message.innerHTML = "";
  let x = document.getElementById("checkingNumber").value;
  try {
    if (x.trim() == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
    if (x % 2 == 0) numChecked.innerHTML = x + " is Even";
    else numChecked.innerHTML = x + " is Odd";
  } catch (err) {
    message.innerHTML = "Input " + err;
  } finally {
    document.getElementById("checkingNumber").value = "";
  }
}
