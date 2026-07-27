function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const res: number[][] = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const total = nums[i] + nums[left] + nums[right];
            if (total > 0) {
                right--;
            } else if (total < 0) {
                left++;
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                right--;
                left++;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
            }
        }
    }
    return res;
}