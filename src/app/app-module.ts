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

@NgModule({
  declarations: [App, MenuPrincipal, InformesPdfComponent, ErrorComponent, EquipoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    PostFileService,
    ServiceEquipos,
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideToastService(),
  ],
  bootstrap: [App],
})
export class AppModule {}
