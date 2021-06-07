import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist-block',
  templateUrl: './artist-block.component.html',
  styleUrls: ['./artist-block.component.scss']
})
export class ArtistBlockComponent {

  @Input() title: String = '';
  @Input() description: String = '';
  @Input() imgPath: String = 'http://dummyimage.com/200x200/f0f/fff';
  @Input() name: String = '';

}
