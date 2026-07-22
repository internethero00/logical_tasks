function twoSum(numbers: number[], target: number): number[] {
    const storage = new Map()
    for (let i = 0; i < numbers.length; i++) {
        let x = target - numbers[i];
        if (storage.has(x)) {
            return[storage.get(x), i + 1]
        }
        storage.set(numbers[i], i + 1)
    }
    return []
};

function twoSum2(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        let sum = numbers[left] + numbers[right]
        if (target === sum) return [left + 1, right + 1]
        if (target > sum) left++
        else right--
    }
    return []
};