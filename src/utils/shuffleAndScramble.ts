function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function shuffleAndScramble({ word }: { word: string }) {
  const array = word.split("");

  // Shuffle the array
  const scrambledArray = shuffleArray(array);

  // Create an array of 20 boxes, filled with characters and empty spaces
  const totalBoxes = 20;
  const filledBoxes = [...scrambledArray];

  // Add empty values to fill up to 20 boxes
  while (filledBoxes.length < totalBoxes) {
    filledBoxes.push("");
  }

  // Shuffle the filled boxes (characters + empty boxes)
  const finalArray = shuffleArray(filledBoxes);
  return finalArray;
}
