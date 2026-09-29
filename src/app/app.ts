import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1 } from './Components/componente1/componente1';
import { Componente2 } from './Components/componente2/componente2';
import { Componente3 } from './Components/componente3/componente3';
import { Componente4 } from './Components/componente4/componente4';

@Component({
  imports: [RouterOutlet, Componente1, Componente2, Componente3, Componente4],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('WebHospitalDrSano');
}
