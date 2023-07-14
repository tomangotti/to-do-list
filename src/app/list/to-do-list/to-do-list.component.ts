import { Component, OnDestroy, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { Subscription } from 'rxjs';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit, OnDestroy{
  items: Item[];
  subscription: Subscription;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.subscription = this.itemService.itemsChanged
      .subscribe(
        (items: Item[]) => {
          this.items = items
        }
      )
    this.items = this.itemService.getList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}

