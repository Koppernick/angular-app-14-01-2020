import { NgModule } from '@angular/core';
import {DashRoutingModule} from './dash-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import {UserPartsModule} from '../shared/user-parts/user-parts.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent, ProfileComponent],
  imports: [
    DashRoutingModule,
    UserPartsModule,
    SharedModule
  ]
})
export class DashModule { }
