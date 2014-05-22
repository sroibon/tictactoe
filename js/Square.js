// Square.js

(function (window) {
    'use strict';

    function Square () {
        this.squareValue;
        this.square = document.createElement('div');
        this.square.className = 'square';
    } ;

    Square.prototype.setOccupied = function () {};

    Square.prototype.setEmpty = function ()  {};

    Square.prototype.isEmpty = function () {};

    window.Square = Square;

}(this));