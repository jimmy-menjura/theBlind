import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServerService {
  url = "https://jsonplaceholder.org/comments";
  url2 = "https://jsonplaceholder.org/users/";
  constructor(public http:HttpClient) { 

  }
  obtenerComentarios():Observable<any[]>{
    return this.http.get<any>(this.url);
  }
  obtenerUsuariosPorId(id:String){
    return this.http.get<any>(this.url2+id);
  }
}
