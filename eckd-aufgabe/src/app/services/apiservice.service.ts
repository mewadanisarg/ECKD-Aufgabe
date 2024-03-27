import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private _http: HttpClient) {}
  // Connect Frontend to Backend

  apiUrl = 'http://localhost:7000/user';

  // Get All Users
  getAllUsersData(): Observable<any> {
    return this._http.get(this.apiUrl);
  }

  // Save User
  savePerson(userData): Observable<any> {
    return this._http.post(this.apiUrl, userData);
  }
}
