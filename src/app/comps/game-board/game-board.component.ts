import { Component, input, output } from '@angular/core';
import { GameBoard, GameBoardCell } from '../../gameLogic/player';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent {

  board = input< null | GameBoard>(null);

  gameOn = input(false);

  onCellClick = output<GameBoard>()

  cellClick(item: GameBoardCell , index : number) {
    console.log({item , index})
  }

}
