//--- MAP -----
const map = arr => func => {
  const newArr = [];
  arr.forEach(element => {
    newArr.push(func(element));
  });
  return newArr;
}

//--- FILTER -----
const filter = arr => func => {
  const newArr = [];
  arr.forEach(element => {
    if (func(element) === true) {
      newArr.push(element);
    }
  });
  return newArr;
}

//--- FIND -----
const find = arr => func => {
  for (const element of arr) {
    if (func(element) === true) {
      return element;
    }
  }
}

//--- CLONE DEEP -----
const testObject = {
  a: 1,
  b: 2,
  c: 3
};
const cloned = JSON.parse(JSON.stringify(testObject));

//--- CONCAT -----
const concat = arr1 => arr2 => {
  return arr1.join(',') + ',' + arr2.join(',');
}
