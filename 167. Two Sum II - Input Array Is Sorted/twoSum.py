def two_sum(numbers: list[int], target: int) -> list[int]:
    seen = {}
    for i, num in enumerate(numbers):
        need = target - num
        if need in seen:
            return [seen[need], i + 1]
        seen[num] = i + 1
    return []


def two_sum_2(numbers: list[int], target: int) -> list[int]:
    left, right = 0, len(numbers) - 1
    while left < right:
        total = numbers[left] + numbers[right]
        if total == target:
            return [left + 1, right + 1]
        if total > target:
            right -= 1
        else:
            left += 1
    return []