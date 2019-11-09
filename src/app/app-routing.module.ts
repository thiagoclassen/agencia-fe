import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VagasComponent } from './vagas/vagas.component';


const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'vagas', component: VagasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
