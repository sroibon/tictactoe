// Game.js

(function (window) {
    'use strict';

    function Game() {} ;

    Game.prototype.start = function () {};

    Game.prototype.takeTurn = function (squareIndex) {};

    // Expose component
    window.Game = Game;
    
}(this));