import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from '../../config/config.service';

export interface Artist {
  image: string;
  name: string;
  listeners: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  artistCtrl = new FormControl();
  filteredArtists!: Observable<Artist[]>;
  artists!: any[];

  constructor(private configService: ConfigService, private router: Router) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    
    this.artistCtrl.valueChanges
      .subscribe((searchString: string)=>{
      if (searchString) {
        this.configService.searchArtist(searchString).subscribe((data: any)=>{
          this.artists = data.results.artistmatches.artist;
        });
      }
    })
  }
}
