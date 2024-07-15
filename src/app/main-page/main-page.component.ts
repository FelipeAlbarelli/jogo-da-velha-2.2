import { Component, computed, effect, signal } from '@angular/core';
import { GameBoardComponent } from '../comps/game-board/game-board.component';
import { PlayerPanelComponent } from '../comps/player-panel/player-panel.component';
import { Turn } from '../gameLogic/player';
import { GameService } from '../game.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [GameBoardComponent , PlayerPanelComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {

  game = this.gameService.game

  p1 = computed( () => {
    return this.game()?.players[0] ?? null
  })
  p2 = computed( () => {
    return this.game()?.players[1] ?? null
  })

  p1SelectedPieceIndex = signal(0)
  p2SelectedPieceIndex = signal(0)

  p1SelectedPieceStr = computed( () => {
    return (this.p1()?.piecesInventory ?? [])[this.p1SelectedPieceIndex()]
  })
  p2SelectedPieceStr = computed( () => {
    return (this.p2()?.piecesInventory ?? [])[this.p2SelectedPieceIndex()]
  })

  colorsById = computed( () => {
    return {
      [this.p1()?.id ?? '!'] : this.p1()?.color ?? 'white',
      [this.p2()?.id ?? '!'] : this.p2()?.color ?? 'white' ,
    }
  })

  currentTurnPlayer = computed(() => {
    const game = this.game()
    if (game == null) {
      return null
    }
    return game.players[game.currentTurnPlayerIndex]
  })

  currentPlayerSelectedPiece = computed( () => {
    if ( this.currentTurnPlayer() == null) {
      return [null , null]
    } 
    if (this.currentTurnPlayer()?.id === this.p1()?.id) {
      return [this.p1SelectedPieceStr() , this.p1SelectedPieceIndex()]
    } else {
      return [this.p2SelectedPieceStr() , this.p2SelectedPieceIndex()]
    }
  })

  effect1 = effect( () => {
    console.log(this.currentPlayerSelectedPiece())

  })

  constructor(protected gameService : GameService) {}

  startGame() {
    this.gameService.startGame()
  }

  putPieceOnCell(index : number) {
    console.log(index)
    this.gameService.makePlayerMovement({
      cellIndex : index,
      pieceStr : this.currentPlayerSelectedPiece()[1] ?? 0
    })
  }

}
