export interface Character {
  data: Data;
}

export interface Data {
  mal_id: number;
  url: string;
  images: DataImages;
  name: string;
  name_kanji: string;
  nicknames: any[];
  favorites: number;
  about: string;
  anime: AnimeElement[];
  manga: any[];
  voices: Voice[];
}

export interface AnimeElement {
  role: string;
  anime: AnimeAnime;
}

export interface AnimeAnime {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  title: string;
}

export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface DataImages {
  jpg: Jpg;
  webp: Webp;
}

export interface Jpg {
  image_url: string;
}

export interface Webp {
  image_url: string;
  small_image_url: string;
}

export interface Voice {
  person: Person;
  language: string;
}

export interface Person {
  mal_id: number;
  url: string;
  images: PersonImages;
  name: string;
}

export interface PersonImages {
  jpg: Jpg;
}
