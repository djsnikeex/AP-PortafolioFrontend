import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = environment.URl + '/personas/';
 
  constructor(private httpClient: HttpClient) {
  
   }
  
   public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL+'lista');
  }

  public detail(id:number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL+`detail/${id}`);
  }

  public update(id:number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL+`update/${id}`, Persona);
  }
}
