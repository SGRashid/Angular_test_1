import { Component} from '@angular/core';

@Component({
    selector: 'data-comp',
    template: `<div><h3 [ngClass]="{red: message == 'DataModule'}">{{message}}</h3></div>`,
    styles: [`.red { color: red; }`]
})
export class DataComponent{

    message: string = "DataModule";
}