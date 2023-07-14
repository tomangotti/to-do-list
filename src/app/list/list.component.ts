import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{
    constructor(private dataStorageService: DataStorageService){}

    ngOnInit() {
      this.dataStorageService.fetchList().subscribe();
    }
}
