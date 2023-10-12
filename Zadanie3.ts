function generateArrayWithRandomNumbers1(
  howManyNumbers: number = 10,
  min: number = 1,
  max: number = 10
): number[] {
  const arrayWithRandomNumbers: number[] = [];

  for (let i = 0; i < howManyNumbers; i++) {
    arrayWithRandomNumbers.push(
      Math.floor(Math.random() * (max - min + 1) + min)
    );
  }

  console.log(arrayWithRandomNumbers);
  return arrayWithRandomNumbers;
}

const forEachFn = (
  array: any,
  callback: (element: any, index: number, array: any[]) => void
): void => {
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  } else {
    console.log("Pusty Array");
  }
};

const mapFn = (
  array: any,
  callback: (element: any, index: number, array: any[]) => any
): void => {
  const newArray: any = [];
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      const x: any = callback(array[i], i, array);
      newArray.push(x);
    }
  } else {
    console.log("Pusty Array");
  }
  return newArray;
};

const filterFn = (
  // leci przez wszystkie indeksy arraya, jeśli spełniają warunek funkcji callback to true i return shallowcopy arraya wejściowego
  array: any,
  callback: (element: any, index: number, array: any[]) => boolean
): void => {
  const newArray: any = [];
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      //- true or false to zwraca
      if (callback(array[i], i, array)) {
        newArray.push(array[i]); //przypisuje tylko te wartości spełniające warunek
      }
    }
  } else {
    console.log("Pusty Array");
  }
  return newArray;
};

function isBigEnough(value: number): boolean {
  return value >= 5;
}

function squareIt(value: number): number {
  return value * value;
}

//tworzy nowy array, który ma indeks + wejściowy eleement
const entriesFn = (array: any) => {
  const newArray: any = [];
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      newArray.push([i, array[i]]);
    }
  } else {
    console.log("Pusty Array");
  }
  return newArray;
};

function sum(accumulator: any, currentValue: any) {
  const sum = accumulator + currentValue;
  return sum;
}

const reduceFn = (
  array: any,                   
  callback: (
    accumulator: any,
    element: any,
    index: number,
    array: any[]
  ) => any,
  initialValue?: any
): void => {
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  if (array.length > 0) {
    for (let i = 1; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array); 
    }
  } else {
    console.log("Pusty Array");
  }
  return accumulator;
};

let inputArray: number[] = generateArrayWithRandomNumbers1(5, 1, 10);
//console.log(filterFn(inputArray, isBigEnough));
//console.log(mapFn(inputArray, squareIt));
//console.log(forEachFn(inputArray, squareIt));
//console.log(entriesFn(inputArray));
console.log(reduceFn(inputArray, sum));
