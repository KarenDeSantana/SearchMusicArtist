import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.service';
import { ActivatedRoute } from '@angular/router';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})

export class DetailViewComponent implements OnInit {
  artistName: string = '';
  artistData!: any;
  topTracks!: any;
  topAlbums!: any;

  constructor(private route: ActivatedRoute, private configService: ConfigService) {
    this.route.params.subscribe( params => this.artistName = params.name );
  }

  getArtist(): void {
    this.configService.getArtist(this.artistName).subscribe((data: any) => {
      console.log(data.artist);
       this.artistData = data.artist;
       this.artistData.bio.content = this.artistData.bio.content.replaceAll("\n", "<br>");
    });
  }

  getTop5Tracks():void {
    this.configService.getTop5Tracks(this.artistName).subscribe((data: any) => {
      console.log(data.toptracks);
      this.topTracks = data.toptracks;
    });
  }

  getTop5Albums():void {
    this.configService.getTop5Albums(this.artistName).subscribe((data: any) => {
      console.log(data.topalbums);
      this.topAlbums = data.topalbums;
    });
  }

  ngOnInit(): void {
    this.getArtist();
    this.getTop5Albums();
    this.getTop5Tracks();
  }

}