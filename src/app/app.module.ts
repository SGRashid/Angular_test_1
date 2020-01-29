import  { Routes, RouterModule } from "@angular/router";
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import {ChildComponent} from "./child.component";
import {DataModule} from "./data/data.module";
import { AboutComponent } from "./about.component";
import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";
import {NgifComponent} from "./ngif.component";
import {DataService} from "./data.service";

const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'ngif', component: NgifComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, DataModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, ChildComponent, AboutComponent, HomeComponent, NotFoundComponent, NgifComponent ],
    providers: [DataService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }