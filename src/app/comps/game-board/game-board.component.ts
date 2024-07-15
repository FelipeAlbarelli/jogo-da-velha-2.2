import { Component, effect, input, output, signal } from '@angular/core';
import { GameBoard, GameBoardCell, Player } from '../../gameLogic/player';

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

  currentPlayer = input<Player | null>( null )

  selectedPieceStr = input<number | null>()

  onCellClick = output<GameBoard>()

  mouseHoverCellIndex = signal(-1);

  effectLog = effect( () => {
    // console.log(this.mouseHoverCellIndex())
  })

  cellClick(item: GameBoardCell , index : number) {
    console.log({item , index})
  }

}
