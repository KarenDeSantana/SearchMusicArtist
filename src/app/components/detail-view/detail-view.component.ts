import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.service';
import { ActivatedRoute } from '@angular/router';

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
    // get params from routerLink
    this.route.params.subscribe(params => this.artistName = params.name);
  }

  // get artist info and formatting description
  getArtist(): void {
    this.configService.getArtist(this.artistName).subscribe((data: any) => {
      this.artistData = data.artist;
      this.artistData.bio.content = this.artistData.bio.content.replaceAll("\n", "<br>");
    });
  }

  // get the top 5 tracks from artist
  getTop5Tracks(): void {
    this.configService.getTop5Tracks(this.artistName).subscribe((data: any) => {
      this.topTracks = data.toptracks;
    });
  }

  // get the top 5 albums from artist
  getTop5Albums(): void {
    this.configService.getTop5Albums(this.artistName).subscribe((data: any) => {
      this.topAlbums = data.topalbums;
    });
  }

  ngOnInit(): void {
    this.getArtist();
    this.getTop5Albums();
    this.getTop5Tracks();
  }
}