import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetasgeneral',
  templateUrl: './tarjetasgeneral.component.html',
  styleUrls: ['./tarjetasgeneral.component.css']
})
export class TarjetasgeneralComponent {

  @Input() items:any [] = [];

  constructor( private router: Router ) {
  }

  verArtista( item: any ){
    let artistaId;

    if ( item.type === 'artist' ){
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate([ '/artist', artistaId ]);
  }

  verCancion( item: any ){
    let trackId;

    if ( item.type === 'track' ){
      trackId = item.id;
    } else {
      trackId = item.tracks[0].id;
    }

    this.router.navigate([ '/track', trackId ]);
  }

}
