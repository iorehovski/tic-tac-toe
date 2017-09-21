class TicTacToe {
    constructor() {
        this.a = [];
        for(var i = 0; i < 3; i++){
            this.a[i] = [];
            for(var j = 0; j < 3; j++){
                this.a[i][j] = '';
            }
        }
        this.ctSymbol = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.ctSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.a[rowIndex][columnIndex].length === 0){
            this.a[rowIndex][columnIndex] = this.ctSymbol;
//диагонали
            var ld = true, rd=true;
            for(var i = 0; i < 3; i++){
                if(this.a[i][i] != this.ctSymbol){
                    ld = false;
                }
                if(this.a[2-i][i] != this.ctSymbol){
                    rd = false;
                }
            }
            if(ld || rd) this.winner = this.ctSymbol; 
//строки и колонки
            for(var i = 0; i < 3; i++){
                var r = true, c = true;
                for(var j = 0; j < 3; j++){
                    if(this.a[i][j] != this.ctSymbol){
                        r = false;
                    }
                    if(this.a[j][i] != this.ctSymbol){
                        c = false;
                    }
                }
                if(r || c) this.winner = this.ctSymbol;
            }
            this.ctSymbol == 'x' ? this.ctSymbol = 'o' : this.ctSymbol = 'x';
        }
    }

    isFinished() {
        if(this.winner != null || this.isDraw()) return true;
        return false;
    }

    getWinner() {
        if(this.winner != null) return this.winner;
        return null;
    }

    noMoreTurns() {
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                if(this.a[i][j] == '')
                    return false;
            }
        }   
        return true;
    }

    isDraw() {
        if(this.winner != null || !this.noMoreTurns())
            return false;
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.a[rowIndex][colIndex] != '') return this.a[rowIndex][colIndex];
        else return null;
    }
}
            
module.exports = TicTacToe;
