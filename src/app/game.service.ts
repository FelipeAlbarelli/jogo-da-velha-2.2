import { Injectable, signal } from '@angular/core';
import { Game, Player, createNewGame, createPlayer } from './gameLogic/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  game = signal<Game | null>(null)

  constructor() { }


  startGame() {
    const p1 = createPlayer('p1' , 'blue');
    const p2 = createPlayer('p2' , 'orange');

    const game = createNewGame(p1 , p2);
    this.game.set(game);
  }

  makePlayerMovement( {} : {player : Player , cellIndex : number} ) {

  }

}
