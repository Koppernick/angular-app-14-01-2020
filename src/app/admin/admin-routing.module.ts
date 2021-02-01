import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from '../core/can-activate.guard';
import { HomeadmComponent } from './components/homeadm/homeadm.component';

const routes: Routes = [
  {
    path: 'home', component : HomeadmComponent
  },
  {
    path: '**',
    redirectTo: '/auth/landing'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
