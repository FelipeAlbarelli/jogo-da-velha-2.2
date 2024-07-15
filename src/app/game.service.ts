import { Injectable, signal } from '@angular/core';
import { Game, Player, applyPlayerMovementOnBoard, createNewGame, createPlayer, makePlayerMovement } from './gameLogic/player';

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

  makePlayerMovement( {cellIndex , pieceStr} : {cellIndex : number , pieceStr : number} ) {
    const currentGameState = this.game()
    if ( currentGameState == null) {
      return
    }
    const nextGameState = makePlayerMovement( currentGameState , cellIndex , pieceStr);
    if (nextGameState !== null) {
      this.game.set(nextGameState)
    }
    console.log({nextGameState})
  }

}
