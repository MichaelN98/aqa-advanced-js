function divide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Arguments must be numbers');
  }

  if (denominator === 0) {
    throw new Error('Denominator cannot be 0');
  }

  return numerator / denominator;
}

// 1) ok
try {
  console.log(divide(10, 2));
} catch (e) {
  console.log('Error:', e.message);
} finally {
  console.log('Робота завершена');
}

// 2) denominator = 0
try {
  console.log(divide(10, 0));
} catch (e) {
  console.log('Error:', e.message);
} finally {
  console.log('Робота завершена');
}

// 3) not a number
try {
  console.log(divide('10', 2));
} catch (e) {
  console.log('Error:', e.message);
} finally {
  console.log('Робота завершена');
}
