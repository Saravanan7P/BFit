import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import{ContactComponent} from './contact/contact.component';
import {HomeworkoutsComponent} from './homeworkouts/homeworkouts.component';
import {GymworkoutsComponent} from './gymworkouts/gymworkouts.component';
import {CardioworkoutsComponent} from './cardioworkouts/cardioworkouts.component';
import {WeightlossComponent} from './weightloss/weightloss.component';
import {WeightgainComponent} from './weightgain/weightgain.component';
const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"about",component:AboutComponent},
{path:"homeworkouts",component:HomeworkoutsComponent},
{path:"gymworkouts",component:GymworkoutsComponent},
{path:"cardioworkouts",component:CardioworkoutsComponent},
{path:"weightloss",component:WeightlossComponent},
{path:"weightgain",component:WeightgainComponent},
{path:"contact",component:ContactComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
