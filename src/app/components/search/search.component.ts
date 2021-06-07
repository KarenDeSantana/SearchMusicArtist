import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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
export class SearchComponent implements OnInit {
  artistCtrl = new FormControl();
  filteredArtists!: Observable<Artist[]>;

  artists!: any[];

  constructor(private configService: ConfigService) {
    this.artistCtrl.valueChanges
      .subscribe((searchString: string)=>{
        this.configService.searchArtist(searchString).subscribe((data: any)=>{
          this.artists = data.results.artistmatches.artist;
          console.log(this.artists);
        });
      })
  }

  ngOnInit() {

  }
}
