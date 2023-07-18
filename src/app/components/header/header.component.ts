import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMenu: boolean = false;
  rutas: string[]=['Inicio', 'Compra', 'Renta', 'Inmuebles destacados', '¿Quienes somos?', 'Lo que dicen de nosotros', 'Contacto']

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
