import { ApiResponse } from "./api-response.model";

export interface ApiPagedResponse<T> extends ApiResponse<T> {

  pageNumber: number;
  pageSize: number;
  totalRecords: number;
}
