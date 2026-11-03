import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Equipo } from '../../models/equipo';
import { ServiceEquipos } from '../../service/service.equipos';

@Component({
  selector: 'app-equipo-component',
  standalone: false,
  styleUrl: './equipo-component.css',
  templateUrl: './equipo-component.html',
})
export class EquipoComponent implements OnInit {

  public equipos!: Array<Equipo>;

  constructor(private _cdr: ChangeDetectorRef, private _service: ServiceEquipos){}


  ngOnInit(): void {
    this._service.getEquipos().subscribe({
      next: (response)=>{
        this.equipos = response;
        this._cdr.detectChanges();
      },
      error: (error)=>{
        console.error('Error al obtener los equipos', error);
      }
    });
  }
}
