export enum AsyncThunkStatus {
  Idle,
  Loading,
  Failed,
}

export interface Book {
  id: string;
  externalId: string;
  title: string;
  description: string;
  thumbnail: string;
  authors: Author[];
  categories: Category[];
}

export interface Category {
  id: number;
  name: string;
}

export interface Author {
  id: number;
  name: string;
}
