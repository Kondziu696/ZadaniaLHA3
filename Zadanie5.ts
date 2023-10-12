const Array5 = [1, 2, 3, 4, 5];

function isBigEnough1(value: number): boolean {
  return value >= 2;
}

function toSquare(value: number): number {
  return value * value;
}

function mapFnc(
  array: any[],
  callback: (element: any, index: number, array: any[]) => any
): any[] {
  const newArray: any[] = [];
  array.reduce((accumulator, currentValue, index) => {
    const transformedValue = callback(currentValue, index, array);
    newArray.push(transformedValue);
    return accumulator;
  }, 0);

  return newArray;
}

const mapFnResult = mapFnc(Array5, toSquare);
console.log(mapFnResult);

function filterFnc(
  array: any[],
  callback: (element: any, index: number, array: any[]) => boolean
): any[] {
  const newArray: any[] = [];
  array.reduce((accumulator, currentValue, index) => {
    if (callback(currentValue, index, array)) {
      newArray.push(currentValue);
    }

    return accumulator;
  }, 0);

  return newArray;
}

const filterFnResult = filterFnc(Array5, isBigEnough1);
console.log(filterFnResult);

function everyFnc(
  array: any[],
  callback: (element: any, index: number, array: any[]) => any
): boolean {
  let result: boolean = true;
  array.reduce((accumulator, currentValue, index) => {
    if (!callback(currentValue, index, array)) {
      result = callback(currentValue, index, array);
      return result;
    }
    return accumulator;
  }, 0);

  return result;
}

const everyFnResult = everyFnc(Array5, isBigEnough1);
console.log(everyFnResult);

function someFnc(
  array: any[],
  callback: (element: any, index: number, array: any[]) => any
): boolean {
  let result: boolean = false;
  array.reduce((accumulator, currentValue, index) => {
    if (callback(currentValue, index, array)) {
      result = callback(currentValue, index, array);
      return result;
    }
    return accumulator;
  }, 0);

  return result;
}

const someFncResult = someFnc(Array5, isBigEnough1);
console.log(someFncResult);
