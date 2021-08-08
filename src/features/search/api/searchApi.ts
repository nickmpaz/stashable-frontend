import { AxiosResponse } from "axios";
import { api } from "../../../app/api/api";
import { SEARCH } from "../../../app/definitions/apiRoutes";
import { Book } from "../../../app/definitions/types";

export const fetchSearchResultsRequest = (
  query: string
): Promise<AxiosResponse<Book[]>> => {
  return api({
    method: "POST",
    url: SEARCH,
    data: { query },
  });
};
