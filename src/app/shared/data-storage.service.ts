import { HttpClient } from "@angular/common/http";
import { Item } from "../list/item.model";
import { tap } from "rxjs";
import { ItemService } from "../list/item.service";
import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})

export class DataStorageService {
    constructor(private http: HttpClient, private itemService: ItemService){}
    serverAddress = "https://go-web-service-production.up.railway.app/todos"
    fetchList(){
        return this.http
                    .get<Item[]>(this.serverAddress)
                    .pipe(
                        tap(item => {
                            console.log(item)
                            this.itemService.setList(item)
                        })
                    )
    }

    onSaveNewItem(newItem: Item) {
        this.http.post<Item[]>(this.serverAddress, newItem).subscribe( res => {
            this.itemService.setList(res)
        })
        
    }

    onUpdateItem(updatedItem: Item) {
        this.http.put(this.serverAddress + "/" + updatedItem.ID, updatedItem).subscribe( res => {
            console.log(res)
        })
    }

    removeFromServer(id: number){
        this.http.delete(this.serverAddress + "/" + id).subscribe(
            res => {
                console.log(res)
            }
        )
    }
}