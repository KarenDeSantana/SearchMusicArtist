import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.service';

interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  top10!: any;
  selectedCountryValue!: string;
  countries: Country[] = [
    { value: 'germany', viewValue: 'Germany' },
    { value: 'spain', viewValue: 'Spain' },
    { value: 'france', viewValue: 'France' }
  ];
  selectedCountry = this.countries[0].value;

  constructor(private configService: ConfigService) { }

  // get the view value from country selection
  getCountryViewValue(value: string): string {
    for (let i = 0; i < this.countries.length; i++) {
      if (this.countries[i].value == value) {
        return this.countries[i].viewValue
      }
    }
    return '';
  }

  // get the top 10 artists from selected country and their infos
  getTop10(): void {
    this.configService.getTop10(this.selectedCountry).subscribe((data: any) => {
      this.top10 = data.topartists;

      for (let i = 0; i < this.top10?.artist.length; i++) {
        this.configService.getArtist(this.top10?.artist[i].name).subscribe((data: any) => {
          let end = data.artist.bio.summary.indexOf('<a ');
          this.top10.artist[i].description = data?.artist.bio.summary.substr(0, end);
        });
      }
    });
  }

  ngOnInit(): void {
    this.getTop10();
  }
}
