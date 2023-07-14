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
}