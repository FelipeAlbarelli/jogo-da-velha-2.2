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

  p1Color = 'blue'
  p2Color = 'orange'
  
  p1SelectedPieceIndex = signal(0)
  p2SelectedPieceIndex = signal(0)

  p1SelectedPieceStr = computed( () => {
    return (this.p1()?.piecesInventory ?? [])[this.p1SelectedPieceIndex()]
  })
  p2SelectedPieceStr = computed( () => {
    return (this.p2()?.piecesInventory ?? [])[this.p2SelectedPieceIndex()]
  })



  currentTurnPlayer = computed(() => {
    return this.game()?.currentTurnPlayer ?? null
  })

  currentPlayerSelectedPiece = computed( () => {
    if ( this.currentTurnPlayer() == null) {
      return null
    } 
    if (this.currentTurnPlayer()?.id === this.p1()?.id) {
      return this.p1SelectedPieceStr()
    } else {
      return this.p2SelectedPieceStr()
    }
  })

  effect1 = effect( () => {
    console.log(this.currentPlayerSelectedPiece())

  })

  constructor(protected gameService : GameService) {}

  startGame() {
    this.gameService.startGame()

    console.log(this.game())
  }

}
