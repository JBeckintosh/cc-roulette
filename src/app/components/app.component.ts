import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayersTableComponent } from './players-table/players-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerFormComponent, PlayersTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
