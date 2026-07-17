function factorial(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("n должно быть неотрицательным целым числом");
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}