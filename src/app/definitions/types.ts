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

export interface LibraryItem {
  book: Book;
  status: LibraryItemStatus;
  isOwned: true;
  rating: number;
  review: string;
}

export enum LibraryItemStatus {
  READING_LIST = "reading_list",
  IN_PROGRESS = "in_progress",
  FINISHED = "finished",
  DID_NOT_FINISH = "did_not_finish",
}

