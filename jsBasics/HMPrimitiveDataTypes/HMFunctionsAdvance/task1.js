function handleNum(num, onEven, onOdd) {
  if (num % 2 === 0) {
    onEven();
  } else {
    onOdd();
  }
}

function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

handleNum(10, handleEven, handleOdd); // number is even
handleNum(7, handleEven, handleOdd);  // number is odd

