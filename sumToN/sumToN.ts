function sumToN(n: number): number {
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("n должно быть неотрицательным целым числом");
  }

  if (n <= 1) {
    return n;
  }

  return n + sumToN(n - 1);
}