export interface ApiResponse<T> {
    succeded: boolean
    message?: string;
    data :  T;
    errors?: [];
  }
  