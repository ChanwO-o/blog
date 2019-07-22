// describes features of the app, split by modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component/app.component';

@NgModule({
  declarations: [ // register component to angular app
    AppComponent
  ],
  imports: [ // other imported modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // tells angular to search the current running page for this component by its selector (<app-root>)
})
export class AppModule { }
