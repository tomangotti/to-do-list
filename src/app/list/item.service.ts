import { Subject } from "rxjs";
import { Item } from "./item.model";



export class ItemService {
    itemsChanged = new Subject<Item[]>()
    private items: Item[] = []


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

    onRemoveItem(index: number) {
        this.items.splice(index, 1)
        this.itemsChanged.next(this.items.slice())
    }

    updateList() {
        this.itemsChanged.next(this.items.slice())
    }
}