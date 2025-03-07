import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { ConfigComponent } from './components/config/config.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { FormConfigService } from './services/form-config.service';
import { DragAndDropModule } from '@progress/kendo-angular-utils';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    ConfigComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    GridModule,
    BrowserAnimationsModule,
    SortableModule,
    DragAndDropModule,
  ],
  providers: [FormConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
