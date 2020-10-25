import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URI } from '../../assets/config';

const API_URL = `${BASE_URI}/users/`;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getListOfUsers(): Observable<any> {
    return this.http.get(API_URL, httpOptions);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(API_URL + id, httpOptions);
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.post(API_URL + 'finduserbyemail', { email }, httpOptions);
  }

  updateUserById(userId: string, user: any): Observable<any> {
    return this.http.put(API_URL + userId, {}, httpOptions);
  }
}
