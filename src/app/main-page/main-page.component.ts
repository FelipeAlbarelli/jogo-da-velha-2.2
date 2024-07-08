import { Component } from '@angular/core';
import { GameBoardComponent } from '../comps/game-board/game-board.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [GameBoardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {}
