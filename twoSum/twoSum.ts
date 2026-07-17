function twoSum(arr: number[], target: number): number[] | null {
    const map = new Map<number,number>()
    for (let i = 0; i < arr.length; i++) {
      const x = target - arr[i];
      if(map.has(x)) return [i, map.get(x)!] 
      map.set(arr[i], i)
  }
    return null;
}