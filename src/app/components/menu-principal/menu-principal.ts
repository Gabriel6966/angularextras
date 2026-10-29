import { Component, ElementRef, ViewChild } from '@angular/core';
import { PostFileService } from '../../service/service.postfile';
import { File } from '../../models/file';
@Component({
  selector: 'app-menu-principal',
  standalone: false,
  styleUrl: './menu-principal.css',
  templateUrl: './menu-principal.html',
})
export class MenuPrincipal {
  @ViewChild('cajaimagen') cajaimagen!: ElementRef;

  constructor(private _service: PostFileService) {}

  subirImagen() {
    let imagen = this.cajaimagen.nativeElement.files[0];

    if (!imagen) return;

    let reader = new FileReader();
    reader.onload = ()=>{
      let file = new File(
        imagen.name,
        (reader.result as string).split(',')[1],
      );

      this._service.postfile(file).subscribe({
        next: (response)=>{
          console.log('Imagen subida correctamente', response);
        },error: (error)=>{
          console.error('Error al subir la imagen', error);
        }
      })
    }
    reader.readAsDataURL(imagen);
  }
}
