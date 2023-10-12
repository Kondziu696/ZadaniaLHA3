const alphabet = "abcdefghijklmno53454prstuwxyz".split("");

const aggregateIntoChunks = (array: String[]): any[] => {
  const max: number = 7;
  const min: number = 4;
  let arrayWithChunks: any[] = [];
  let rndNumber: number;
  let lenght: number = array.length;
  let lenghtLast: number;

  if (array.length <= 3) {
    console.log("Zbyt krótki ciąg znaków");
    return array;
  }

  if (array.length > 3 && array.length < 8) {
    return array;
  }

  while (lenght > 0) {
    rndNumber = Math.floor(Math.random() * (max - min + 1) + min);
    lenghtLast = lenght;
    lenght = lenght - rndNumber;
    const splicedText = array.slice(lenght, lenghtLast);
    arrayWithChunks = [splicedText].concat(arrayWithChunks);

    if (lenght < 0) {
      lenght = array.length;
      arrayWithChunks = [];
    }
  }

  return arrayWithChunks;
};

const chunks = aggregateIntoChunks(alphabet);
console.log(chunks);
