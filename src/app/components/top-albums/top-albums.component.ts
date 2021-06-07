import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-albums',
  templateUrl: './top-albums.component.html',
  styleUrls: ['./top-albums.component.scss']
})
export class TopAlbumsComponent {

  @Input() albumTitle: String = '';
  @Input() albumPlay: String = '';
  @Input() albumImgPath: String = 'http://dummyimage.com/200x200/f0f/fff';

}
