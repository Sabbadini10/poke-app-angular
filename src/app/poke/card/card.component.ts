import { Component, Input, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input()
info: any;

 url: string = '';
 alto: string = '';
 peso: string = '';
 ability1: Array<String> =[];
 ability2: Array<String> =[];
constructor(private pokeService: PokeService){}

 ngOnInit(): void {
  this.pokeService.getPokeData(this.info.name).subscribe((res: any) => {
  this.url = res.sprites.front_default
  })
  this.pokeService.getPokeData(this.info.name).subscribe((res: any) => {
    this.ability1 = res.abilities[0].ability.name;
    this.ability2 = res.abilities[1].ability.name;
    /* console.log(res.abilities[0].ability.name && res.abilities[1].ability.name) */
    })

    this.pokeService.getPokeData(this.info.name).subscribe((res: any) => {
      this.alto = res.height;
      this.peso = res.weight;
      console.log(res)
      })

   }


}
