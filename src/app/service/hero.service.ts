import { Injectable } from '@angular/core';
import { Hero } from '../component/hero';
import { HEROES } from "./mock-heroes";

@Injectable()
export class HeroService {
  // getHeroes(): Hero[] {
  //   console.log("HeroService.getHeroes got called...");
  //   return HEROES;
  // }

  getHeroes(): Promise<Hero[]> {
    console.log("HeroService.getHeroes got called...");
    return Promise.resolve(HEROES);
  }
}
