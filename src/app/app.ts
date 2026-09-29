import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1 } from './Components/componente1/componente1';
import { Componente2 } from './Components/componente2/componente2';
import { Componente3 } from './Components/componente3/componente3';

@Component({
  imports: [RouterOutlet, Componente1, Componente2, Componente3],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('WebHospitalDrSano');
}
