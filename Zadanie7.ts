const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const settings: { actualPageIdx: number; entriesOnPage: number } = {
  actualPageIdx: 0,
  entriesOnPage: 3,
};

const paginateArray = (
  dataEntries: any[],
  settings: { actualPageIdx: number; entriesOnPage: number }
): any[] => {
  const dataStart = settings.actualPageIdx * settings.entriesOnPage;
  const dataEnd = (settings.actualPageIdx + 1) * settings.entriesOnPage;
  const entriesOnSelectedPage = dataEntries.slice(dataStart, dataEnd);

  return entriesOnSelectedPage;
};

const result_7 = paginateArray(data, settings);
console.log(result_7);
