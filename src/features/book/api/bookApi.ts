import { AxiosResponse } from "axios";
import { api } from "../../../app/api/api";
import {
  BOOK,
  FETCH_LIBRARY_ITEM,
  LIBRARY,
} from "../../../app/definitions/apiRoutes";
import { Book, LibraryItem } from "../../../app/definitions/types";

export const fetchBookRequest = (id: number): Promise<AxiosResponse<Book>> => {
  return api({
    method: "GET",
    url: BOOK(id),
  });
};

export const createLibraryItemRequest = (
  id: number
): Promise<AxiosResponse<LibraryItem>> => {
  return api({
    method: "POST",
    url: LIBRARY,
  });
};

export const fetchLibraryItemRequest = (
  bookId: number
): Promise<AxiosResponse<LibraryItem>> => {
  return api({
    method: "GET",
    url: FETCH_LIBRARY_ITEM(bookId),
  });
};