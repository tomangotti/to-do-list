import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../list/item.model';
import { ItemService } from '../list/item.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent {

  constructor(
            private itemService: ItemService,
            private dataStorageService: DataStorageService){}

  onSubmit(form: NgForm) {
    const value = form.value;
    const isUrgent = value.Urgent === "Yes" ? true : false ;
    const newItem = new Item(value.Detail, false, isUrgent, 0)
    
    this.itemService.addNewItem(newItem)
    this.dataStorageService.onSaveNewItem(newItem)
    form.reset()
  }
}
