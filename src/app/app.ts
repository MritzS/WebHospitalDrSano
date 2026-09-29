import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1 } from './Components/componente1/componente1';
import { Componente2 } from './Components/componente2/componente2';
import { Componente3 } from './Components/componente3/componente3';
import { Componente4 } from './Components/componente4/componente4';
import { Componente5 } from './Components/componente5/componente5';
import { Componente6 } from './Components/componente6/componente6';
import { Componente7 } from './Components/componente7/componente7';

@Component({
  imports: [RouterOutlet, Componente1, Componente2, Componente3, Componente4, Componente5, Componente6, Componente7],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('WebHospitalDrSano');
}
