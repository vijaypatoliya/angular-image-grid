import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import {HttpClientModule} from '@angular/common/http';
import { LazyImgDirective } from './lazy-img.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    LazyImgDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
