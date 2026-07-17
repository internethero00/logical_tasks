def factorial(n: int) -> int:
    if n < 0 or not isinstance(n, int):
        raise ValueError("n должно быть неотрицательным целым числом")
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result