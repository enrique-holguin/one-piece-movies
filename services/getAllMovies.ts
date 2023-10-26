import { ApiMovies } from "../src/app/types/movies.types";

export async function getAllMovies() {
  const url = "https://api.jikan.moe/v4/anime?q=one%20piece&type=Movie";
  const response = await fetch(url);
  const data = (await response.json()) as ApiMovies;
  return data;
}
