import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaPersonaComponent } from './tarjeta-persona';

@Component({
  imports: [TarjetaPersonaComponent],
  template: `
    <main class="contenedor">
      <app-tarjeta-persona
        nombre="Laura"
        apellido="Gómez"
        [edad]="32"
        ocupacion="Desarrolladora backend"
      />
      <app-tarjeta-persona
        nombre="Martín"
        apellido="Pérez"
        [edad]="28"
        ocupacion="Diseñador UX"
      />
      <app-tarjeta-persona
        nombre="Sofía"
        apellido="Rossi"
        [edad]="41"
        ocupacion="Project Manager"
      />
    </main>
  `,
  styles: `
    .contenedor {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      padding: 24px;
      background: #f3f4f6;
      min-height: 100vh;
    }
  `,
  selector: 'app-root',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('incaicarPrimeraVersion');
}
