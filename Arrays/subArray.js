// Find the Sub Array, Fix this

const arr = [10, 20, 30, 40];
// O/P: 10 , 10,20 , 10,20,30 , 20, , 20,30 ......

function subArray(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let k = i; k <= j; k++) {
        console.log(arr[i]);
      }
    }
  }
}

subArray(arr);

// if (arr[i] === arr[j]) {
//     console.log(`Iteration #${count}: ${arr[i]}`);
//   } else {
//     console.log(`Iteration #${count}: ${arr[i]} ,${arr[j]}`);
//   }
