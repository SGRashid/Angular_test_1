import { Component} from '@angular/core';

@Component({
    selector: 'about-app',
    template: `
        <nav>
            <p><a routerLink="" routerLinkActive="active"
                  [routerLinkActiveOptions]="{exact:true}">Главная</a></p>
            <p><a routerLink="/about" routerLinkActive="active">О сайте</a></p>
            <p><a routerLink="/jkl;jk;" routerLinkActive="active">404 not found</a></p>
        </nav>
        <h3>О сайте</h3>`,
    styles: [`
        .active {
            color: red;
            font-weight: bold;
        }
        nav {
            display: flex;
            flex-direction: row;
            justify-content: left;
        }
        a { margin-right: 15px; }
    `]
})
export class AboutComponent { }