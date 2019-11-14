import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CurriculosComponent } from './curriculos/curriculos.component';
import { MaterialModule } from "./material.module";
import { VagasComponent } from './vagas/vagas.component';
import { HttpClientModule } from "@angular/common/http";
import { CurriculoFormComponent } from './curriculos/curriculo-form/curriculo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VagasComponent,
    CurriculosComponent,
    CurriculoFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
