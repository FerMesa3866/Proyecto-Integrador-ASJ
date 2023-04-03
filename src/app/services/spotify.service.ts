import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query:string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBsj7mLaHenhkTi91VESWK9Fjth47buoVA9u4T9-p8GSdX7bpFL_lAYBIBwtPD5YWZqcC8pVdUyH0gXFt-fM0-1Ul6RnlR7gYuI9rN6XFS9yKe1rfVM'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){

    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAknHowSdkh-5OGm8xq6paqPxlVsFjeBkDoWIc5mDcmnem_dzOzla4xDJqp3Z83V1sNSlPaHaYtxFpqpCMaOnNT2X8CNHaU2H-OXQDf2hj1HUX_EUl7'
    });*/

    return this.getQuery('browse/new-releases').pipe( map( (data: any) => data.albums.items ));

    /*this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })*/

  }

  getArtistas( termino: string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map( (data: any) => data.artists.items ));

  }

  getCancion( termino: string ){

    return this.getQuery(`tracks${ termino }`).pipe( map( (data: any) => data.tracks.items ));

  }

  getArtista( id: string ){

    return this.getQuery(`artists/${id}`);
      //.pipe( map( (data: any) => data.artists.items ));

  }

  getTopTracks( id: string ){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map( (data: any) => data['tracks'] ));

  }


}
