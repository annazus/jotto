export function getLetterMatchingCount(secretWord, guessWord) {
  const secretLetterSet = new Set(secretWord.split(""));
  const guessedLetterSet = new Set(guessWord.split(""));

  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length;
}
