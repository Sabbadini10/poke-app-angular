import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokeService {
pokeList : Array<any> = [];

baseUrl : string = 'https://pokeapi.co/api/v2/'
  constructor(private http: HttpClient) {}
    getList(pages: number = 0){
      return this.http.get(`${this.baseUrl}pokemon`, {
        params: {
          'offset': pages,
          'limit': 8
        }
      })
}

getPokeData(name: string){
return this.http.get(`${this.baseUrl}pokemon/${name}`)
}
  }

