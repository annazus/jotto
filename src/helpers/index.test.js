import { getLetterMatchingCount } from "./index";
import { privateDecrypt } from "crypto";

describe("getLetterMatchCount", () => {
  const secretWord = "fried";

  test("test empty guessed word must return 0", () => {
    expect(getLetterMatchingCount(secretWord, "")).toBe(0);
  });

  test("test empty guessed word must return 0 if there are no matching letters", () => {
    expect(getLetterMatchingCount(secretWord, "lucky")).toBe(0);
  });
  test("test return correct count if guess word has duplicate matching letters", () => {
    expect(getLetterMatchingCount(secretWord, "order")).toBe(3);
  });

  test("test returns corrects count when guessed word = secret word", () => {
    expect(getLetterMatchingCount(secretWord, secretWord)).toBe(5);
  });

  test("test return matched letter count if some letters match", () => {
    expect(getLetterMatchingCount(secretWord, "trite")).toBe(3);
  });
});
