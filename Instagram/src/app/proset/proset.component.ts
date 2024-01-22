import { Component } from '@angular/core';

@Component({
  selector: 'app-proset',
  templateUrl: './proset.component.html',
  styleUrls: ['./proset.component.css']
})
export class ProsetComponent {

  width: number = 500; // Initial width of the rectangle
  height: number = 400; // Initial height of the rectangle

  increaseHeight() {
    this.height += 10;
  }
}
