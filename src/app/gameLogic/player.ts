import {produce} from "immer"

export type Player = {
    id : string;
    piecesInventory : number[];
    color : string;
}

export type GameBoardCell = {playerId : string , pieceStr : number}[]

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

export const createPlayer = (id : string , color : string) => {
    return {
        id,
        color,
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
            [],[],[],
            [],[],[],
            [],[],[]
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
    } , { 0 : 0 , 1 : 0 , 2 : 0} as Record<number , number> )

    return piecesTable;
}

export const applyPlayerMovementOnBoard = (game : Game , targetCell : number , pieceToUseStr : number) => {

    if (targetCell < 0 || targetCell > 8) {
        return null;
    }

    const targetCellOnBoard = game.board[targetCell];
    const currentPlayer = game.currentTurnPlayer

    // checar se player tem peça que quer jogar:

    const currentPlayerPieces = getPlayerRemainedPieces(currentPlayer);

    if ( (currentPlayerPieces[pieceToUseStr] ?? 0 )  < 1 ) {
        return
    }


    // caso 1 : casa está vazia, basta colocar a peça lá então
    if ( targetCellOnBoard.length === 0 ) {
        const nextGameState = produce( game , draft => {
            draft.board[targetCell] = [{
                pieceStr : pieceToUseStr,
                playerId : currentPlayer.id
            }]
        })
        return nextGameState;
    }

    // caso 2 : casa não vazia, ver força atual

    // todo: convencionar usar GameBoard como pilha, só vendo primeiro item
    // talvez seja melhor (dado que sempre terá um tamanho pequeno) sempre pegar
    // o máximo. Mas por enquanto é mais simples assim, dado que dá para retirar
    // a ultima peça.

    const targetCellLastPiece = targetCellOnBoard[0]

    // jogada invalida : peça tem que ser propriamente maior
    if (pieceToUseStr <= targetCellLastPiece.pieceStr ) {
        return null
    }

    const nextGameState = produce( game , draft => {
        draft.board[targetCell] = [
            {
                pieceStr : pieceToUseStr,
                playerId : currentPlayer.id
            } ,
            ...targetCellOnBoard
        ]
    })
    return nextGameState;




}

export const makePlayerMovement = ( game : Game , targetCell : number , pieceToUseStr : number ) => {

}

export type Turn = null | 'p1' | 'p2'