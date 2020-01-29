import { Component} from '@angular/core';

@Component({
    selector: 'not-found-app',
    template: `
        <h3>404 Eror</h3>
        <h3>Страница не найдена</h3>
        <p><a routerLink="">На главную</a></p>`
})
export class NotFoundComponent { }