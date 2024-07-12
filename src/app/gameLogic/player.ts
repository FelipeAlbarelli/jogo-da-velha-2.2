import {produce} from "immer"

export type Player = {
    id : string;
    piecesInventory : number[]
}

export type GameBoardCell = null | {playerId : string , pieceStr : number}

export type GameBoard = [
    GameBoardCell, GameBoardCell, GameBoardCell,
    GameBoardCell, GameBoardCell, GameBoardCell,
    GameBoardCell, GameBoardCell, GameBoardCell
]

export type Game = {
    players : [Player , Player ];
    board : GameBoard,
    currentTurnPlayer : Player
}

export const createPlayer = (id : string) => {
    return {
        id,
        piecesInventory : [
            0,0,0 , 
            1,1,1 ,
            2,2,2
        ]
    } as Player
}

export const createNewGame = (p1: Player , p2: Player) => {
    const game : Game = {
        players : [p1 , p2],
        board : [
            null,null,null,
            null,null,null,
            null,null,null
        ],
        currentTurnPlayer : p1
    }

    return game
}

export const getPlayerRemainedPieces = (player : Player) => {
    const pieces = player.piecesInventory;
    const piecesTable = pieces.reduce( (prev , current ) => {
        const currentCount = prev[current]
        if (currentCount === undefined) {
            return {...prev , current : 1}
        } 
        return {...prev , current : currentCount + 1}
    } , {} as Record<number , number> )

    return piecesTable;
}

export const makePlayerMovement = (game : Game , targetCell : number , pieceToUse : number) => {

    if (targetCell < 0 || targetCell > 8) {
        return null;
    }

    const targetCellOnBoard = game.board[targetCell];
    const currentPlayer = game.currentTurnPlayer

    // caso 1 : casa está vazia, basta colocar a peça lá então
    if ( targetCellOnBoard === null ) {
        const nextGameState = produce( game , draft => {
            game.board[targetCell] = {
                pieceStr : pieceToUse,
                playerId : currentPlayer.id
            }
        })

        return nextGameState;
    }

    // caso 2 : casa já está




}

export type Turn = null | 'p1' | 'p2'