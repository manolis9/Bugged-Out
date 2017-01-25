// Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BugModule } from './bugs/bug.module';
import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [ 
        BrowserModule,
        BugModule,
        AppRoutingModule
         ],
    declarations: [ 
        AppComponent,
        NavbarComponent
         ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }