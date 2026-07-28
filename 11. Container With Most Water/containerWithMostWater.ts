function maxArea(height: number[]): number {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let width  = right - left
        let minHeight = Math.min(height[left], height[right])
        if (maxArea < minHeight * width) {
            maxArea = minHeight * width
        }
        if (height[left] > height[right]) {
            right--
        }
        else if (height[left] < height[right]) {
            left++
        }
        else {
            right--
            left++
        }
    } 
    return maxArea
};