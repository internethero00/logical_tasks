function serchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        const middle = left + Math.floor((right - left) / 2);
        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return left;
}