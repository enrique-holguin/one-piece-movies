import { Characters } from "@/app/types/characters";

export async function getCharsByMovie(idMovie: string) {
  try {
    const url = `https://api.jikan.moe/v4/anime/${idMovie}/characters`;
    const response = await fetch(url);
    const data = (await response.json()) as Characters;
    return data;
  } catch (err) {
    console.error(err);
  }
}
