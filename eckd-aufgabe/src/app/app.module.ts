import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponentComponent } from './person-component/person-component.component';
import { PersonPrivateComponent } from './person-component/person-private/person-private.component';
import { PersonJuristischComponent } from './person-component/person-juristisch/person-juristisch.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AdresseComponent } from './adresse/adresse.component';
import { BankverbindungComponent } from './bankverbindung/bankverbindung.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './services/apiservice.service';
import { PercentagePipe } from './percentage.pipe';

@NgModule({
  declarations: [
    AppComponent,

    PersonComponentComponent,
    PersonPrivateComponent,
    PersonJuristischComponent,
    AdresseComponent,
    BankverbindungComponent,
    PercentagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [provideAnimationsAsync(), ApiserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
