import axios from "axios";
import { WORDNIK_API } from "./";

test("check if wordnik api key is available in .env", () => {
  expect(process.env.REACT_APP_WORDNIK_API_KEY.length).toBeGreaterThan(0);
});

// describe("test wordnik api", () => {
//   const key = process.env.REACT_APP_WORDNIK_API_KEY;
//   const wordnikEndPoint = WORDNIK_API + key;
//   test("api returns a json object with a 5 letter word", () => {
//     return axios(wordnikEndPoint).then(response => {
//       expect(response.data.word.length).toBe(5);
//     });
//   });
// });
