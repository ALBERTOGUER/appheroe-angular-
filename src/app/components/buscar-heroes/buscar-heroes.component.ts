import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroeService } from '../../sevices/heroe.service';


@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html',
  styles: []
})
export class BuscarHeroesComponent implements OnInit {

  private termino: string = "";
  public heroesFiltrados: any = {};
  public loading:boolean= true;

  constructor(private ActivatedRoute: ActivatedRoute, private _heroeService: HeroeService) {

    this.ActivatedRoute.params.subscribe((terminoURL) => {
      this.loading=true;
      this.termino = terminoURL.termino
      
      this.heroesFiltrados=this._heroeService.buscarHeroes(this.termino);
        console.log(this.heroesFiltrados);
        this.loading=false;
    });

  }

  ngOnInit() {
  }

}
