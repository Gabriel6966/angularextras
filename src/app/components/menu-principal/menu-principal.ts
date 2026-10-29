import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostFileService } from '../../service/service.postfile';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-principal',
  standalone: false,
  styleUrl: './menu-principal.css',
  templateUrl: './menu-principal.html',
})
export class MenuPrincipal implements OnInit{

  @ViewChild("cajaimagen") cajaimagen!: ElementRef;

  constructor(private postFileService: PostFileService, private http: HttpClient) {}


  subirFile(event: any){
    let url
  }

  ngOnInit(): void {
  }

}
