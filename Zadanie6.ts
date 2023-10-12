function getMyAge(input: number | string | Date) {
  const now = new Date();
  if (input instanceof Date) {
    const ageMiliseconds = now.getTime() - input.getTime();
    const ageYears = ageMiliseconds / (365 * 24 * 60 * 60 * 1000);
    return console.log(Math.floor(ageYears));
  } else if (typeof input === "number") {
    if (input >= 1900 && input < now.getFullYear()) {
      const ageYears = now.getFullYear() - input;
      return console.log(ageYears);
    } else {
      console.log("Błędny rok urodzenia");
    }
  } else if (typeof input === "string") {
    const stringDate = new Date(input);
    const ageMiliseconds = now.getTime() - stringDate.getTime();
    const ageYears = ageMiliseconds / (365 * 24 * 60 * 60 * 1000);
    return console.log(Math.floor(ageYears));
  }
}

const result1 = getMyAge(new Date(1990, 1, 1));
const result2 = getMyAge("1990-1-1");
const result3 = getMyAge(1990);
