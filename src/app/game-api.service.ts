import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/app.component'

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  api_url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {  }

  getCategories(): Observable<Category[]> {
    console.log(this.http.get<Category[]>(this.api_url+"genres"));

    return this.http.get<Category[]>(this.api_url+"genres");
  }
  
}
