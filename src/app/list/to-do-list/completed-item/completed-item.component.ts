import { Component, Input } from '@angular/core';
import { Item } from '../../item.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-completed-item',
  templateUrl: './completed-item.component.html',
  styleUrls: ['./completed-item.component.css']
})
export class CompletedItemComponent {
  @Input() item: Item;
  @Input() index: number;
  

  constructor(
    private itemService: ItemService,
    private dataStorageService: DataStorageService){}

  onDeleteItem(){
    this.itemService.onRemoveItem(this.index)
    this.dataStorageService.removeFromServer(this.item.ID)
  }

  onUndo(){
    this.item.Completed = !this.item.Completed
    this.itemService.updateList()
    this.dataStorageService.onUpdateItem(this.item)
  }
}
