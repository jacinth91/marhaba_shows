export interface Movie {
  id: string;
  title: string;
  image: string;
  rating: number;
  duration: string;
  genre: string[];
  language: string;
  releaseDate: string;
}

export interface ShowTime {
  id: string;
  time: string;
  price: number;
  seatsAvailable: number;
}

export interface Theater {
  id: string;
  name: string;
  location: string;
  emirate: string;
  showTimes: ShowTime[];
}

export type Emirate = 'Dubai' | 'Abu Dhabi' | 'Sharjah' | 'Ajman' | 'Ras Al Khaimah' | 'Fujairah' | 'Umm Al Quwain';