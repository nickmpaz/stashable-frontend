export const SEARCH = "/books/search";
export const BOOK = (id: number) => `/books/${id}`;
export const LIBRARY = "/library";
export const FETCH_LIBRARY_ITEM = (id: number) => `${LIBRARY}/${id}`;
export const UPDATE_LIBRARY_ITEM = (id: number) => `${LIBRARY}/${id}`;