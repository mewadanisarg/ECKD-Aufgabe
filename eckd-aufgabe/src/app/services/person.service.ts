// person.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private apiUrl = 'https://api.example.com/persons'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllPersons(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createPerson(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

}
