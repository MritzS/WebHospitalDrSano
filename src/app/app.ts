import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1 } from './Components/componente1/componente1';

@Component({
  imports: [RouterOutlet, Componente1],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('WebHospitalDrSano');
}
