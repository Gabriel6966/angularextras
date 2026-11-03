import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuPrincipal } from './components/menu-principal/menu-principal';
import { PostFileService } from './service/service.postfile';
import { InformesPdfComponent } from './components/informes-pdf-component/informes-pdf-component';

@NgModule({
  declarations: [App, MenuPrincipal, InformesPdfComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), PostFileService],
  bootstrap: [App],
})
export class AppModule {}
