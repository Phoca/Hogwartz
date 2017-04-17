import $ from 'jquery';
import eventBus from './utils/EventBus';
import dice from './Dice';

export default class GameLoop {


    constructor() {
        this.players = [];
        this.turnIndex = -1;
        this.$name = $('.nameField');
    }

    addPlayer(player) {
        this.players.push(player);
        player.draw();
    }

    go() {
        this.turnIndex = (this.turnIndex + 1) % this.players.length;
        var player = this.players[this.turnIndex];

        this.$name.text(player.name);
        this.$name.css("color", player.colour);
        dice.enableClick((number) => {
            player.moveBy(number, this.go.bind(this));
        });
    }



}