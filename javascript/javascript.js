function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum + secondNum;
  document.getElementById("sumanswer").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
}

function displayDiff() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum - secondNum;
  document.getElementById("diffanswer").innerHTML = ` ${firstNum} - ${secondNum}, equals to ${total}` ;
}

function displayProd() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum * secondNum;
  document.getElementById("prodanswer").innerHTML = ` ${firstNum} * ${secondNum}, equals to ${total}` ;
}

function displayQuo() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum / secondNum;
  document.getElementById("quoanswer").innerHTML = ` ${firstNum} / ${secondNum}, equals to ${total}` ;
}


document.getElementById('sumButton').addEventListener("click", displaySum);
document.getElementById('diffButton').addEventListener("click", displayDiff);
document.getElementById('prodButton').addEventListener("click", displayProd);
document.getElementById('quoButton').addEventListener("click", displayQuo);

