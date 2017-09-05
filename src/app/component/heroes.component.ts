import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from "./hero";
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

//export class HeroesComponent {
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  // constructor(private heroService: HeroService) {
  //   this.heroes = this.heroService.getHeroes();
  // }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    console.log("HeroesComponent selectedHero: " + JSON.stringify(hero));
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
