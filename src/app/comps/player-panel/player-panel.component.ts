import { Component, input } from '@angular/core';
import { Player } from '../../gameLogic/player';

@Component({
  selector: 'app-player-panel',
  standalone: true,
  imports: [],
  templateUrl: './player-panel.component.html',
  styleUrl: './player-panel.component.css'
})
export class PlayerPanelComponent {

  thisPlayerTurn = input(false)

  player = input<null | Player>(null)

}
