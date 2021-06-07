import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.scss']
})
export class TopTracksComponent {

  @Input() trackTitle: String = '';
  @Input() trackPlay: String = '';
  @Input() trackImgPath: String = 'http://dummyimage.com/200x200/f0f/fff';

}
