import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html'
})
export class CriteriaComponent implements OnInit,OnChanges, AfterViewInit {
  //listFilter: string;
  @ViewChild('filterElement') filterElRef: ElementRef;
  @Input() displayDetails: boolean;
  @Input() hitCount: number;
  @Output() changeValue: EventEmitter<string> = new EventEmitter<string>();

  hitMessage: string;
  private _listFilter;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value) {
    this._listFilter = value;
    this.changeValue.emit(value);
  }
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.filterElRef.nativeElement.focus();

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['hitCount'] && !changes['hitCount'].currentValue) {
      this.hitMessage = "No matches found";
    } else {
      this.hitMessage = 'Hits: ' + this.hitCount;
    }
  }

}
