import { Subject } from "rxjs";
import { Item } from "./item.model";
import { DataStorageService } from "../shared/data-storage.service";
import { Injectable } from "@angular/core";




export class ItemService {
    itemsChanged = new Subject<Item[]>()
    private items: Item[] = []

    // constructor(private dataStorageService: DataStorageService){}

    setList(fetchedItems: Item[]){
        this.items = fetchedItems
        this.itemsChanged.next(this.items.slice())
    }

    getList() {
        return this.items.slice();
    }

    addNewItem(newItem: Item) {
        
        this.items.push(newItem)
        this.itemsChanged.next(this.items.slice())
        
    }
}