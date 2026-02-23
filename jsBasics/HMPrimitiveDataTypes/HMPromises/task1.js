function showText(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}

showText("Привет через 2 секунды", 20000);
