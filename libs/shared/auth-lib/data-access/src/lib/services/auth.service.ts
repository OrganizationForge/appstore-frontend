import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, ApiService } from '@angular-monorepo/http-client';
import { User } from '../models/user';
import { LoginUser, LoginUserRequest, NewUser } from '../models/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiService = inject(ApiService);

  user(): Observable<ApiResponse<User>> {
    return this.apiService.get<ApiResponse<User>>('/v1/Account/current');
  }

  login(credentials: LoginUser): Observable<ApiResponse<User>> {
    return this.apiService.post<ApiResponse<User>, LoginUserRequest>('/v1/Account/authenticate', { email: credentials.email, password: credentials.password });
  }

  register(credentials: NewUser): Observable<ApiResponse<User>> {
    return this.apiService.post<ApiResponse<User>, NewUser>('/v1/Account/register',
      {
        nombre: credentials.nombre,
        apellido: credentials.apellido,
        email: credentials.email,
        userName: credentials.userName,
        password: credentials.password,
        confirmPassword: credentials.confirmPassword
      });
  }

  refreshToken() : Observable<ApiResponse<User>> {
    return this.apiService.post<ApiResponse<User>, User>('/v1/Account/refreshtoken');
  }

  logout() : Observable<ApiResponse<boolean>> {
    return this.apiService.get<ApiResponse<boolean>>('/v1/Account/revoke-token');
  }

  tokenValido(user: User) {
    if (user && user.jwToken) {
      // parse json object from base64 encoded jwt token
      const jwtToken = JSON.parse(window.atob(user.jwToken.split('.')[1]));
      const expires = new Date(jwtToken.exp * 1000);
      return expires.getTime() > Date.now();
    } else return false;
  }
}
