import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private httpClient: HttpClient) { }

  skladistiServere(serveri: any[]){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(
      'https://nekiprojekat-ffc97.firebaseio.com/data.json',
       serveri,
       {observe: 'events'});
  }

  vratiServere(){
    return this.httpClient.get<any[]>('https://nekiprojekat-ffc97.firebaseio.com/data.json',
    {observe:'response', responseType:'json'})
            .pipe(map(
              (serveri) => {
                  console.log(serveri)               
                  return serveri;                  
              }),
              catchError(
                (err) => throwError("Nesto ne radi")
              ))              
  }
}
