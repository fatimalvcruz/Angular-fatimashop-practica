import { ConfirmComponent } from '../confirm/confirm.component';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { keyframes } from '@angular/animations';

@Component({
 selector: 'app-stateful',
 templateUrl: './stateful.component.html',
 styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit, OnDestroy {

  @ViewChild(ConfirmComponent, {static: false})
  confirmChild: ConfirmComponent;

  errorHttp: boolean;
  shopModel: any;
  boughtItems: Array<Product>;
  myNumber = "123456789";

  private shopSubscription: Subscription;


 constructor(private http: HttpClient) {
   this.boughtItems = [];
   this.shopModel = {shopItems: []};
  }

 ngOnInit(): void {
  this.shopSubscription = this.http.get('assets/cursos.json').subscribe(
    (respuesta: Response) => { this.shopModel.shopItems  = respuesta; },
    (respuesta: Response) => { this.errorHttp  = true; }
  );

  // this.onGloblaKeyboard();
 }

 ngOnDestroy(): void {
   this.shopSubscription.unsubscribe();
  //  document.removeEventListener('keypress', this.onKeyboard);
 }

 clickItem(_curso) {
   this.boughtItems.push(_curso);
 }
 cursoMatriculado(_event: Product) {
   this.clickItem(_event);
   this.onConfirm();
   this.confirmChild.isDisabled = false;
 }

 finalPrice() {
   if (this.boughtItems) {
   return this.boughtItems.reduce(
     (prev: number, item: Product) => prev + item.price, 0
   );
 }
}

onConfirm() {
  alert('Has añadido un nuevo curso');
}

/* onKeyboard(_event){
 if( _event.key === 'Enter'){
  alert('has pulsado la tecla' +" " + _event.key );


 }else{
  alert('has pulsado la tecla' +" "+ _event.key)
 }
 console.log(_event)
  
}

onGloblaKeyboard(){
  document.addEventListener('keypress', (eventGlobal) =>{
    this.onKeyboard(eventGlobal);
  });
 
}
*/
}

// 

  
  
 
   
  
  


