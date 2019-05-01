import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { MaterialModule } from './shared/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,FormsModule,FlexLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
