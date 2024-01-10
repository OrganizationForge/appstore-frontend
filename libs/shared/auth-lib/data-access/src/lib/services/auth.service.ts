import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, ApiService } from '@angular-monorepo/http-client';
import { User} from '../models/user';
import { LoginUser, LoginUserRequest, NewUser, NewUserRequest } from '../models/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiService = inject(ApiService);

  user(): Observable<ApiResponse<User>> {
    return this.apiService.get<ApiResponse<User>>('/user');
  }

  login(credentials: LoginUser): Observable<ApiResponse<User>> {
    return this.apiService.post<ApiResponse<User>, LoginUserRequest>('/Account/Authenticate', { email: credentials.email, password: credentials.password });
  }

  register(credentials: NewUser): Observable<ApiResponse<User>> {
    return this.apiService.post<ApiResponse<User>, NewUserRequest>('/users', { user: credentials });
  }
}
