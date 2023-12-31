import { Component, Input } from '@angular/core';
import { Item } from '../../item.model';
import { ItemService } from '../../item.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.css']
})
export class ToDoListItemComponent {
  @Input() item: Item;
  @Input() index: number;
  editMode = false

  constructor(
      private itemService: ItemService,
      private dataStorageService: DataStorageService){}


  onComplete(){
    this.item.Completed = !this.item.Completed
    this.itemService.updateList()
    this.dataStorageService.onUpdateItem(this.item)
  }

  onDeleteItem(){
    this.itemService.onRemoveItem(this.index)
    this.dataStorageService.removeFromServer(this.item.ID)
  }

  onEdit(){
    this.editMode = !this.editMode
  }

  onSubmit(form: NgForm) {
    
    const isUrgent = form.value.Urgent === "Yes" ? true : false ;
    this.item.Detail = form.value.Detail;
    this.item.Urgent = isUrgent;
    
    this.dataStorageService.onUpdateItem(this.item)
    this.onEdit()
  }
}

