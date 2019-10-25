import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { HeroeService } from '../../sevices/heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  
  public HeroesRecibidos:Array<any>=[];

  public loading:boolean=true;

  constructor( private router:Router, public _HeroeService:HeroeService) { }

  ngOnInit() {

    this.HeroesRecibidos = this._HeroeService.ReturnHeroes();

    setTimeout(() => {
      this.loading=false;
    }, 1000);
    
  }
  public MandaInformacion(idHero){
    console.log(idHero);
    this.router.navigate(['informacionheroe',idHero])
    
  }

}
