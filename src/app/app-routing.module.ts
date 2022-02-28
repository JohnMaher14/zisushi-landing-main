import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { NotfoundComponent } from './content/notfound/notfound.component';
import { ThankyouComponent } from './content/thankyou/thankyou.component';

const routes: Routes = [
  {path:'' , pathMatch:'full' , redirectTo:'home'},
  {path:'home' , component:HomeComponent},
  {path:'thank-you' , component: ThankyouComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
