export type Response<T> = {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
};

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
}

export type MovieResponse = Response<Movie>;
