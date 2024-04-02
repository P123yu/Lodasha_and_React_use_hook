import _ from "lodash"; // Import lodash library
import React from "react";

function Lodash() {
  // sum of array

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sum = _.sum(arr);
  console.log(sum);

  // max of array
  const max = _.max(arr);
  console.log(max);

  // min of array
  const min = _.min(arr);
  console.log(min);

  // zip object
  const zip = _.zip(["a", "b", "c"], [1, 2, 3]);
  console.log(zip);

  // zip object
  const zip1 = _.zip(["a", "b", "c"], [1, 2, 3], [true, false, true]);
  console.log(zip1);

  // convert object to array
  const obj1 = { a: 1, b: 2, c: 3 };
  const arr2 = _.values(obj1);
  console.log(arr2);

  // convert array to object
  const obj = _.zipObject(["a", "b", "c"], [1, 2, 3]);
  console.log(obj);

  // flatten deep
  const arr1 = [1, 2, 3, [4, [5, 6]]];
  const flat = _.flattenDeep(arr1);
  console.log(flat);

  // map over array
  const arr3 = [1, 2, 3, 4, 5];
  const mapped = _.map(arr3, (num) => num);
  console.log(mapped);

  return <div></div>;
}

export default Lodash;
