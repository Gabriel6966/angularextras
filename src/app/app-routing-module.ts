import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipal } from './components/menu-principal/menu-principal';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';

const routes: Routes = [
  { path: "menuprincipal", component: MenuPrincipal },
  {path: "informes", component: InformesPdfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
