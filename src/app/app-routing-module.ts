import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipal } from './components/menu-principal/menu-principal';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';

const routes: Routes = [
  { path: '', redirectTo: 'menuprincipal', pathMatch: 'full' },
  { path: 'menuprincipal', component: MenuPrincipal },
  { path: 'informes', component: InformesPdfComponent },
  { path: 'error', component: ErrorComponent },
  {path : "equipo", component: EquipoComponent},
  { path: '**', redirectTo: 'menuprincipal' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
