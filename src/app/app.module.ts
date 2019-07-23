// describes features of the app, split by modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // must import without file extension

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component/app.component';
import { BlogpostViewComponent } from './blogposts/blogpost-view/blogpost-view.component';

@NgModule({
  declarations: [ // register component to angular app
    AppComponent,
    BlogpostViewComponent
  ],
  imports: [ // other imported modules
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // tells angular to search the current running page for this component by its selector (<app-root>)
})
export class AppModule { }
