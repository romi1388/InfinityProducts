import {Component, Input,Output, OnChanges, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  ngOnChanges() : void {
    this.starWidth = this.rating * 75 / 5;
  }
  onClick() : void {
    this.ratingClicked.emit(`The rating of this product is ${this.rating}.`)
  }

}
