import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HomePage } from '../home-page/home-page.model';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  apiUrl =  environment.apiUrl;

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<HomePage>(this.apiUrl);
  }
}
