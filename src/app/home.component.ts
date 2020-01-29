import { Component } from '@angular/core';
import { DataService } from "./data.service";

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    items: string[] = [];
    constructor(private  dataService: DataService){}

    itemsChecked: string[] = [];

    ngOnInit(){
        this.items = this.dataService.getData();
        this.itemsChecked = this.dataService.getDataChecked();
    }
    myDate = new Date;
}
