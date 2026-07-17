def search_insert(arr: list[int], target: int) -> int:
    left = 0
    right = len(arr)

    while left < right:
        middle = left + (right - left) // 2

        if arr[middle] < target:
            left = middle + 1
        else:
            right = middle

    return left