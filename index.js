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

const arr = [1, 2, 3];
console.log(map(arr, (x) => x * 2));


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

const ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

console.log(filter(ages, checkAdult));

const arrFilter = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filter(arrFilter, num => num % 2 === 0));


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

const agesFind = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

console.log(find(agesFind, checkAdult));


//--- CLONE DEEP -----


const testObject = {
  a: 1,
  b: 2,
  c: 3
};
const cloned = JSON.parse(JSON.stringify(testObject));

console.log(cloned);
cloned.a = 2;
console.log(cloned);
console.log(testObject);



//--- CONCAT -----
function concat(arr1, arr2) {
  const result = arr1.join(',') + ',' + arr2.join(',');
  return result;
}

const hege = ["Cecilie", "Lone"];
const stale = ["Emil", "Tobias", "Linus"];
console.log(concat(hege, stale));