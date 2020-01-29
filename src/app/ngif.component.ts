import { Component } from "@angular/core";
import { DataService } from "./data.service";

@Component ({
    selector: 'ngif-comp',
    template: `
        <a routerLink="">На главную</a>
        <p *ngIf="condition">Веселье</p>
        <p *ngIf="!condition">Тоска</p>
        <button (click)="toggle()">Переключить</button>
        <br>
        <br>
        <div>
            <input [(ngModel)]="name" placeholder="название"/>
            <button (click)="addItem(name)">Добавить</button>
        </div>
        <ul>
            <li class="list-elem" *ngFor="let item of items">
                <span class="to-do" *ngIf="!itemsChecked.includes(item)">{{item}}</span>
                <span class="checked" *ngIf="itemsChecked.includes(item)">{{item}}</span>
                <span class="checkbox" (click)="addItemChecked(item)"> &#10004;</span>
            </li>
        </ul>
    `,
    styles: [`
        span { font-weight: bold; }
        li { list-style-type: none; }
        .checked {
            color: grey;
            text-decoration: line-through;
        }
        .checkbox { color: grey; }
        .checkbox:hover { color: red; }
    `],
    // providers: [DataService]
})

export class NgifComponent {
    condition: boolean = true;
    toggle(): void {
        this.condition = !this.condition;
    }
    items: string[] = [];
    constructor(private  dataService: DataService){}

    addItem(name: string){
        this.dataService.addData(name);
    }
    itemsChecked: string[] = [];

    addItemChecked(name: string){
        this.dataService.addDataChecked(name);
    }
    ngOnInit(){
        this.items = this.dataService.getData();
        this.itemsChecked = this.dataService.getDataChecked();
    }
}