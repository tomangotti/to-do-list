import { HttpClient } from "@angular/common/http";
import { Item } from "../list/item.model";
import { tap } from "rxjs";
import { ItemService } from "../list/item.service";
import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})

export class DataStorageService {
    constructor(private http: HttpClient, private itemService: ItemService){}

    fetchList(){
        return this.http
                    .get<Item[]>('http://localhost:8080/todos')
                    .pipe(
                        tap(item => {
                            console.log(item)
                            this.itemService.setList(item)
                        })
                    )
    }

    onSaveNewItem(newItem: Item) {
        console.log(newItem)
        this.http.post('http://localhost:8080/todos', newItem).subscribe( res => {
            console.log(res)
            
        })
    }
}