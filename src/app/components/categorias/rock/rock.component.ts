import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.css']
})
export class RockComponent {

  @Input() name:any [] = [];

  constructor( private router: Router ) {
  }

  verCategoria( item: any ){
    let artistaId;

    if ( item.type === 'name' ){
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate([ '/name', artistaId ]);

  }


}
