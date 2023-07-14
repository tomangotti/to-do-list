import { Component, Input } from '@angular/core';
import { Item } from '../../item.model';

@Component({
  selector: 'app-completed-item',
  templateUrl: './completed-item.component.html',
  styleUrls: ['./completed-item.component.css']
})
export class CompletedItemComponent {
  @Input() item: Item;
  @Input() index: number;
}
