import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['spiderman', 'hulck', 'thor']

  heroreBorrado: string = '';


  borrarHeroe() {
  this.heroreBorrado = this.heroes.shift() || '';
  }

}
