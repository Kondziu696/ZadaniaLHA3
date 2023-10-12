function generateArrayWithRandomNumbers(
  howManyNumbers: number = 5,
  min: number = 1,
  max: number = 10
): number[] {
  const arrayWithRandomNumbers: number[] = [];
  let randomNumber: number;
  for (let i = 1; i <= howManyNumbers; i++) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    arrayWithRandomNumbers.push(randomNumber);
  }

  console.log(arrayWithRandomNumbers);
  return arrayWithRandomNumbers;
}

function generateArrayOfArrays(
  howManyArrays: number = 10,
  howManyNumbers: number = 10,
  min: number = 1,
  max: number = 10
): number[][] {
  const arrayOfArrays: number[][] = [];
  let tempArray: number[] = [];

  for (let i = 1; i <= howManyArrays; i++) {
    tempArray = generateArrayWithRandomNumbers(howManyNumbers, min, max);
    arrayOfArrays.push(tempArray);
  }

  console.log(arrayOfArrays);
  return arrayOfArrays;
}

generateArrayWithRandomNumbers();
//generateArrayOfArrays(5, 2, 1, 5);
