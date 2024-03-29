import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  
  
{path:'',
component:HomeComponent
},
{path:'aboutus',
component:AboutUsComponent
},
{path:'contactus/:id',
component:ContactUsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
