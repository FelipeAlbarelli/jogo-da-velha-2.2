import { Component, computed } from '@angular/core';
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
  

  currentTurnPlayerId = computed(() => {
    return this.game()?.currentTurnPlayer.id ?? 'neither'
  })

  constructor(protected gameService : GameService) {}

  startGame() {
    this.gameService.startGame()

    console.log(this.game())
  }

}
