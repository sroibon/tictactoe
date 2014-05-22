// Board.js

(function (window) {
    'use strict';

    function Board(square) {
        this.squares = [];
        this.square = square;
    } ;

    Board.prototype.setSquareOccupied = function (squareIndex) {};

    Board.prototype.resetSquares = function () {};

    Board.prototype.isSquareEmpty = function (squareIndex) {
    	var isEmpty;

        return isEmpty;
    };

    Board.prototype.getValue = function (squareIndex) {
        var value;

        return value;
    };

    Board.prototype.isFilledIn = function () {
        var filledIn;

        return filledIn;
    };
    
    Board.prototype.createGrid = function () {
        var i = 0,
            j = 0,
            length = 3,
            board = $('.board'),
            row,
            cell;

        for (i; i < length; i += 1) {
           row = document.createElement('div'); 
           row.className = 'row';
           board.append(row);

           for (j; j < length; j += 1) {
               cell = document.createElement('div');
               cell.className = 'cell';
               row.appendChild(cell);
           }  
        }
            	
    };

    window.Board = Board;

}(this));