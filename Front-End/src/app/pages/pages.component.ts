import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `<!-- nav -->
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav">
        <a class="nav-item nav-link" routerLink="/">Inicio</a>
        <a class="nav-item nav-link" routerLink="/admin" *ngIf="isAdmin"
          >Admin</a
        >
        <a class="nav-item nav-link" (click)="logout()">Cerrar Sesión</a>
      </div>
    </nav>`,
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
