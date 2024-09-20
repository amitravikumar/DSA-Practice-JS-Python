// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

var majorityElement = (nums) => {
    let hashMap = new Map();
    for(let item of nums){
        hashMap.set(item, (hashMap.get(item) || 0) + 1)
    }
    
    let maxCount = 0;
    let majorityElement = null;
    for(let [key, value] of hashMap){
        if(value > maxCount){
            maxCount = value;
            majorityElement = key;
        }
    }
    console.log(hashMap)
}

majorityElement([1,2,1,1,5])

var secondLargestElement = (nums) => {
    if(nums.lenght === 0) return -1;
    let largest = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > largest){
            largest = nums[i];
        }
    }
    let secondLargest = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > secondLargest && nums[i] < largest){
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}

var secondLargestElement2 = (nums) => {
    if(nums.length === 0) return -1;
    let largest = nums[0];
    let secondLargest = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > largest){
            if(nums[i] != largest && nums[i] < largest){
                secondLargest = nums[i];
            }
            secondLargest = largest;
            largest = nums[i];
        }
    }
    return secondLargest;
}

console.log(secondLargestElement2([1,2,4,5,6,3]))