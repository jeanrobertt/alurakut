import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile-relations-box',
  templateUrl: './profile-relations-box.component.html',
  styleUrls: ['./profile-relations-box.component.css'],
})
export class ProfileRelationsBoxComponent implements OnChanges {
  @Input() data?: IProfileRelationsBox;
  displayData?: IProfileRelationsBox;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.displayData = this.data;
  }

  get items() {
    return this.displayData?.items ?? [];
  }

}

export interface IProfileRelationsBox {
	smallTitle: string;
	items: IProfileRelationsBoxItems[];
}
export interface IProfileRelationsBoxItems {
	name: string;
	link: string;
	image: string;
}