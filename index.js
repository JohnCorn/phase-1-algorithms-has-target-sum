function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++)
  {
    for(let a = 0; a < array.length; a++)
    {
      if (i == a)
        continue;

        if ((array[i] + array[a]) == target)
          return true; 
    }

  }

  return false;
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  make a var that holds sum of array
  loop through array and add each value to var
  compare var value to target
*/

/*
  Add written explanation of your solution here
  just comparing the sum to the target, not much more then that
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
