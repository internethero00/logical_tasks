def two_sum(arr: list[int], target: int) -> list[int] | None:
    map = {}
    for i in range(len(arr)):
        x = target - arr[i]
        if x in map:
            return [map[x], i]
        map[arr[i]] = i
    return None

