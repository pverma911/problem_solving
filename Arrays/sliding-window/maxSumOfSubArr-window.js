// Maximum Sum Subarray of size K

function getMax(arr, k, n) {
  let maxi = 0;
  let sum = 0;
  let i = 0;
  let j = 0;
  while (j < n) {
    sum += arr[j]; // 600,900
    if (j - i + 1 == k) {
      // calculate window size
      maxi = Math.max(maxi, sum); // 9000
      sum -= arr[i]; // 500
      i++; // 1
      j++; // 3
    } else j++;
  }
  return maxi;
}

console.log(getMax([100, 200, 300, 400], 2, 4));

// O/P = 700
