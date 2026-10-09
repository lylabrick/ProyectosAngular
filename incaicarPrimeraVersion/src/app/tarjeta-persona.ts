// src/app/tarjeta-persona.component.ts
import { Component, input } from '@angular/core';

@Component({
    selector: 'app-tarjeta-persona',
    template: `
    <article class="tarjeta">
      <h2>{{ nombre() }} {{ apellido() }}</h2>
      <p class="ocupacion">{{ ocupacion() }}</p>
      <p class="edad">{{ edad() }} años</p>
    </article>
  `,
    styles: `
    .tarjeta {
      width: 240px;
      padding: 16px 20px;
      border-radius: 12px;
      background: #fff;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      font-family: system-ui, sans-serif;
    }
    h2 { margin: 0 0 4px; font-size: 1.2rem; }
    .ocupacion { margin: 0; color: #555; font-weight: 600; }
    .edad { margin: 8px 0 0; color: #888; font-size: 0.9rem; }
  `,
})
export class TarjetaPersonaComponent {
    nombre = input.required<string>();
    apellido = input.required<string>();
    edad = input.required<number>();
    ocupacion = input.required<string>();
}