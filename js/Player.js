// Player.js

(function (window) {
    'use strict';

    function Player () {
        this.winningScores = [];
        this.symbol; //read only
    } ;

    Player.prototype.updateScore = function (points) {};

    Player.prototype.isWinner = function () {
        var winner;
        
        return winner;	
    };

    Player.prototype.resetScore = function () {};

    window.Player = Player;

}(this));