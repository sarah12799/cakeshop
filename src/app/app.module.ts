import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SiteHeaderComponent } from './site-header/site-header.component';
import { CakeListComponent } from './cake-list/cake-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    SiteHeaderComponent,
    
    CakeListComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
