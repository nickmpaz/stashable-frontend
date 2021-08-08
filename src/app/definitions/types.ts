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
}
