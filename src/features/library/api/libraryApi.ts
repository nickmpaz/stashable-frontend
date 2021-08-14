import { AxiosResponse } from "axios";
import { api } from "../../../app/api/api";
import {
  FETCH_LIBRARY_ITEM,
  LIBRARY,
  UPDATE_LIBRARY_ITEM,
} from "../../../app/definitions/apiRoutes";
import { LibraryItem, LibraryItemUpdate } from "../../../app/definitions/types";

export const createLibraryItemRequest = (
  id: number
): Promise<AxiosResponse<LibraryItem>> => {
  return api({
    method: "POST",
    url: LIBRARY,
    data: {
      bookId: id,
    },
  });
};

export const updateLibraryItemRequest = (
  id: number,
  updates: LibraryItemUpdate
): Promise<AxiosResponse<LibraryItem>> => {
  return api({
    method: "PATCH",
    url: UPDATE_LIBRARY_ITEM(id),
    data: updates,
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
