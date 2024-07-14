import { Component } from '@angular/core';
import { GameBoard } from '../../gameLogic/player';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent {

  board : GameBoard | null = null;

  gameOn = false;

}
