import { Component } from '@angular/core';

@Component({
  selector: 'app-tagset',
  templateUrl: './tagset.component.html',
  styleUrls: ['./tagset.component.css']
})
export class TagsetComponent {

  width: number = 500; // Initial width of the rectangle
  height: number = 400; // Initial height of the rectangle

  increaseHeight() {
    this.height += 10;
  }

}
