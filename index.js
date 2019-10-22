//--- MAP -----
function map(arr, handleFunction) {
  const newArr = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    const result = handleFunction(arr[i]);
    newArr.push(result);
  }
  return newArr;
};



//--- FILTER -----
function filter(arr, handleFunction) {
  const newArr = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (handleFunction(arr[i]) === true) {
      const result = arr[i];
      newArr.push(result);
    }
  }
  return newArr;
};



//--- FIND -----
function find(arr, handleFunction) {
  const newArr = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (handleFunction(arr[i]) === true) {
      const result = arr[i];
      newArr.push(result);
      break;
    }
  }
  return newArr;
};



//--- CLONE DEEP -----
const testObject = {
  a: 1,
  b: 2,
  c: 3
};
const cloned = JSON.parse(JSON.stringify(testObject));



//--- CONCAT -----
function concat(arr1, arr2) {
  return arr1.join(',') + ',' + arr2.join(',');
}

