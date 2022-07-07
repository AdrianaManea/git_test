function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  // console.log(firstNum);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);
  // console.log(secondNum);

  let total = firstNum + secondNum;
  // console.log(total);
  document.getElementById('answer').innerHTML = `${firstNum} +
   ${secondNum}, eguals to: ${total}`;

}
// displaySum();

document.getElementById('sumButton').addEventListener('click', displaySum);