def sumToN(n: int) -> int:
    if not isinstance(n, int) or n < 0:
        raise ValueError("n должно быть неотрицательным целым числом")
    if n <= 1:
        return n
    return n + sumToN(n - 1)