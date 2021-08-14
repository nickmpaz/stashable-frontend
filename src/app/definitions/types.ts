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
  // book: Book;
  id: number;
  status: LibraryItemStatus | null;
  isOwned: boolean | null;
  rating: number | null;
  review: string | null;
}

export interface LibraryItemUpdate {
  status: LibraryItemStatus | null;
  isOwned: boolean | null;
  rating: number | null;
  review: string | null;
}

export enum LibraryItemStatus {
  READING_LIST = "reading_list",
  IN_PROGRESS = "in_progress",
  FINISHED = "finished",
  DID_NOT_FINISH = "did_not_finish",
}
