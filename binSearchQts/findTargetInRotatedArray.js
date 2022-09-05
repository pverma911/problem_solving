const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[middle] >= nums[left]) {
      if (target >= nums[left] && target < nums[middle]) {
        right = middle - 1;
      } else left = middle + 1;
    } else if (target <= nums[right] && target > nums[middle])
      left = middle + 1;
    else right = middle - 1;
  }
  return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;

console.log(search(nums, target));

// var search = function(nums, target) {
//     let [left, right] = [0, nums.length - 1]

//     while(left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if(nums[mid] === target) return mid;
//         if(nums[left] <= nums[mid]) {
//             if(nums[mid] < target) left = mid + 1;
//             else {
//                 if(nums[left] === target) return left;
//                 if(nums[left] < target) right = mid - 1;
//                 else left = mid + 1;
//             }
//         } else {
//             if(nums[mid] < target) {
//                 if(nums[right] === target) return right;
//                 if(nums[right] < target) right = mid - 1;
//                 else left = mid + 1;
//             }
//             else right = mid - 1;
//         }
//     }

//     return -1;
// }
