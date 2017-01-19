import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyCZ0Kt_NXjhwekjY7a_7KXPcMvu5cAjPWI",
  authDomain: "angular2-c77fe.firebaseapp.com",
  databaseURL: "https://angular2-c77fe.firebaseio.com",
  storageBucket: "angular2-c77fe.appspot.com",
  messagingSenderId: "155601858627"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
