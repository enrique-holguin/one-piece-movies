import { Character } from "@/app/types/characterById.types";

export async function getCharById(characterId: string) {
  try {
    const url = `https://api.jikan.moe/v4/characters/${characterId}/full`;
    const response = await fetch(url);
    const data = (await response.json()) as Character;
    return data;
  } catch (err) {
    console.error(err);
  }
}
