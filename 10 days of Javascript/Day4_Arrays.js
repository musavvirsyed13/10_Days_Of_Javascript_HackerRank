// Arrays

nums = [2, 3, 6, 6, 5];

function getSecondLargest(nums) {
  // Complete the function
  let largest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  let secondLargest = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > secondLargest && nums[i] < largest) {
      secondLargest = nums[i];
    }
  }
  return secondLargest;
}

console.log(getSecondLargest(nums));
