import { NgModule, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';


import { PlaceappComponent } from './placeapp/placeapp.component';
import { ViewappComponent } from './viewapp/viewapp.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
;

const appRoutes: Routes =[
    {path:'', redirectTo:'/landing', pathMatch:'full'},
    {path:'landing',component: LandingComponent},
    {path:'place-app',component:PlaceappComponent},
    {path:'view-app',component:ViewappComponent},
    {path:'search',component:SearchComponent},
    {path:'contactus',component:ContactComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}