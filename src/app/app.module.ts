import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatefulComponent } from './stateful/stateful.component';
import { StatelessComponent } from './stateless/stateless.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { StatusCartComponent } from './status-cart/status-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioprimeroComponent } from './formularioprimero/formularioprimero.component';
import { FormulariosegundoComponent } from './formulariosegundo/formulariosegundo.component';

import { environment } from '../environments/environment';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StatefulComponent,
    StatelessComponent,
    ConfirmComponent,
    StatusCartComponent,
    FormularioprimeroComponent,
    FormulariosegundoComponent,
    PhonePipe, 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, 
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
