import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServiceEquipos {
  constructor(private _http: HttpClient) {}

  getEquipos(): Observable<any> {
    let request = "api/equipos";
    let url = environment.urlApiEquipos + request;
    return this._http.get(url);
  }
}
