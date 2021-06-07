import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
    API_KEY_LASTFM = 'c14001de885ce78a4e3cfffe711122b4';

    constructor(private http: HttpClient) { }

    public getArtist(artistName: string) {
        return this.http.get(`http://ws.audioscrobbler.com//2.0/?method=artist.getInfo&api_key=${this.API_KEY_LASTFM}&artist=${artistName}&format=json`);
    }

    public searchArtist(artistName: string) {
        return this.http.get(`http://ws.audioscrobbler.com///2.0/?method=artist.search&artist=${artistName}&limit=10&api_key=${this.API_KEY_LASTFM}&format=json`)
    }

    public getTop5Albums(artistName: string) {
        return this.http.get(`http://ws.audioscrobbler.com//2.0/?method=artist.gettopalbums&api_key=${this.API_KEY_LASTFM}&artist=${artistName}&limit=5&format=json`);
    }

    public getTop5Tracks(artistName: string) {
        return this.http.get(`http://ws.audioscrobbler.com//2.0/?method=artist.gettoptracks&api_key=${this.API_KEY_LASTFM}&artist=${artistName}&limit=5&format=json`);
    }

    public getTop10(country: string) {
        return this.http.get(`http://ws.audioscrobbler.com//2.0/?method=geo.gettopartists&country=${country}&api_key=${this.API_KEY_LASTFM}&format=json&limit=10`);
    }
}