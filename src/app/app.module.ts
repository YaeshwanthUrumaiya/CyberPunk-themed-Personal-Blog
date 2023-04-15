import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sidebar1Component } from './sidebar1/sidebar1.component';
import { HeaderComponent } from './header/header.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';

@NgModule({
  declarations: [
    AppComponent,
    Sidebar1Component,
    HeaderComponent,
    Sidebar2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
