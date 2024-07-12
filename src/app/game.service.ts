import { Injectable } from '@angular/core';
import { Game, Player, createNewGame, createPlayer } from './gameLogic/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  game : Game | null = null;

  constructor() { }


  startGame() {
    const p1 = createPlayer('p1');
    const p2 = createPlayer('p2');

    const game = createNewGame(p1 , p2);
  }

  makePlayerMovement( {} : {player : Player , cellIndex : number} ) {

  }

}
