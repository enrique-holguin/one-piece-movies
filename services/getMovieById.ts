import { MovieByID } from "../src/app/types/movieById.types";

export async function getMovieById(id: string) {
  try {
    const url = `https://api.jikan.moe/v4/anime/${id}`;
    const response = await fetch(url);
    const data = (await response.json()) as MovieByID;
    return data;
  } catch (err) {
    console.error(err);
  }
}
