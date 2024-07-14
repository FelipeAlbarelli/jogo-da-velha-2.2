import { Component } from '@angular/core';
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

  constructor(protected gameService : GameService) {}

  startGame() {
    this.gameService.startGame()

    console.log(this.game())
  }

}
