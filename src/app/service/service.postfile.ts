import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpContext, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { File } from "../models/file";
import { SKIP_TOKEN } from "../utils/token.context";
@Injectable({
  providedIn: 'root'
})

export class PostFileService{

  url = environment.urlApiFiles;

  constructor(private _http:HttpClient){

  }

  postfile(file: File): Observable<any>{
    let json = JSON.stringify(file);
    let header = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + '/api/TestingFiles', json, { headers: header, context: new HttpContext().set(SKIP_TOKEN, true) });

  }


}
