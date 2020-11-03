import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }
  
  getSourcesNames(): Promise<any>{
    return this.http.get("http://localhost:3000/api/sourcesName").toPromise();
  }
  
  getNoticiasBySource(input: string) : Promise<any>{
    if(!input) return this.http.get("http://localhost:3000/api/noticias").toPromise();
    else return this.http.get(`http://localhost:3000/api/noticias${input}`).toPromise();
  }

  getTitutlares(input: string): Promise<any>{
    return this.http.get(`http://localhost:3000/api/top-headlines${input}`).toPromise();
  }
}
