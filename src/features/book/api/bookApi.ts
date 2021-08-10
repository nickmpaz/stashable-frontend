import { AxiosResponse } from "axios";
import { api } from "../../../app/api/api";
import { BOOK } from "../../../app/definitions/apiRoutes";
import { Book } from "../../../app/definitions/types";

export const fetchBookRequest = (id: number): Promise<AxiosResponse<Book>> => {
  return api({
    method: "GET",
    url: BOOK(id),
  });
};
