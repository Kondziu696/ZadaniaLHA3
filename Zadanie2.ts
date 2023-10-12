const inputData = [
  "stwórz",
  "sobie",
  "tutaj",
  "więcej",
  "wyrazów",
  "nie",
  "wiem ",
  "cotutaj",
  "więcej",
  "wymyśleć",
  "ale",
  "sobie",
  "coś",
  "tutaj",
  "wpisze",
];

const findPhraseInArray = (array: string[], phrase: string): any[] | string => {
  const newArray: any[] = [];
  let tempArray: any = [];
  array.reduce((accumulator, currentString: string, index: number) => {
    if (currentString.includes(phrase)) {
      tempArray.push(index);
      tempArray.push(currentString);
      newArray.push(tempArray);
      tempArray = [];
    }
    return accumulator;
  }, 0);

  if (newArray.length === 0) {
    return "Brak wyników";
  } else {
    return newArray;
  }
};

const result11 = findPhraseInArray(inputData, "cjdfcdsf");
console.log(result11);
