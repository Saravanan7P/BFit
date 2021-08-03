import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeworkoutsComponent } from './homeworkouts/homeworkouts.component';
import { ContactComponent } from './contact/contact.component';
import { GymworkoutsComponent } from './gymworkouts/gymworkouts.component';
import { CardioworkoutsComponent } from './cardioworkouts/cardioworkouts.component';
import { WeightlossComponent } from './weightloss/weightloss.component';
import { WeightgainComponent } from './weightgain/weightgain.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HomeworkoutsComponent,
    GymworkoutsComponent,
    CardioworkoutsComponent,
    WeightlossComponent,
    WeightgainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
