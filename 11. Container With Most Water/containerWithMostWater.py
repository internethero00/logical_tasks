def container_with_most_water(height: list[int]) -> int:
    max_area: int = 0
    left: int = 0
    right: int = len(height) - 1
    while left < right:
        width = right - left
        min_height = min(height[right], height[left])

        if max_area < width * min_height:
            max_area = width * min_height

        if height[right] > height[left]:
            left += 1
        elif height[right] < height[left]:
            right -= 1
        else:
            left += 1
            right -= 1 
    
    return max_area
