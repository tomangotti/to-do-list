import { Component, Input } from '@angular/core';
import { Item } from '../../item.model';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.css']
})
export class ToDoListItemComponent {
  @Input() item: Item;
  @Input() index: number;
}

