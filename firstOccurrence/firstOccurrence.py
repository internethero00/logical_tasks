def first_occurrence(arr: list[int], target: int) -> int | None:
    if not arr:
        return None

    left, right = 0, len(arr) - 1

    while left < right:
        middle = (left + right) // 2

        if arr[middle] < target:
            left = middle + 1
        else:
            right = middle

    return left if arr[left] == target else None