def factorial_2(n: int) -> int:
    if not isinstance(n, int) or n < 0:
        raise ValueError("n должно быть неотрицательным целым числом")

    if n <= 1:
        return 1

    return n * factorial_2(n - 1)