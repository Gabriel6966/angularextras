import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuPrincipal } from './components/menu-principal/menu-principal';
import { PostFileService } from './service/service.postfile';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './interceptors/error-interceptor';
import { provideToastService } from 'ngx-yet-another-toast-library';
import { ErrorComponent } from './components/error-component/error-component';
import { EquipoComponent } from './components/equipo-component/equipo-component';
import { ServiceEquipos } from './service/service.equipos';
import { LoginComponent } from './components/login-component/login-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { EmpleadosService } from './service/service.empleados';
import { authTokenInterceptor } from './interceptors/auth-token-interceptor';


@NgModule({
  declarations: [App, MenuPrincipal, InformesPdfComponent, ErrorComponent, EquipoComponent, LoginComponent, SubordinadosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    PostFileService,
    ServiceEquipos,
    EmpleadosService,
    provideHttpClient(withInterceptors([authTokenInterceptor, errorInterceptor])),
    provideToastService(),
  ],
  bootstrap: [App],
})
export class AppModule {}
