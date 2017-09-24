import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Hero } from '../component/hero';
import 'rxjs/add/operator/toPromise';
import { HEROES } from "./mock-heroes";

@Injectable()
export class HeroService {
  // getHeroes(): Hero[] {
  //   console.log("HeroService.getHeroes got called...");
  //   return HEROES;
  // }

  // getHeroes(): Promise<Hero[]> {
  //   console.log("HeroService.getHeroes got called...");
  //   return Promise.resolve(HEROES);
  // }

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(this.handleResponse)
      //.then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  private handleResponse(response : Response): Hero[] {
    return response.json().data as Hero[];
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  getHero2(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  // old way of doing it, see the method above for the new way of doing it
  // getHero(id: number) {
  //   if (id >= HEROES.length) {
  //     throw 'Index ' + id + ' exceeds length of the array: ' + HEROES.length;
  //   }
  //   return HEROES[id];
  // }

}
