import $ from 'jquery';
import eventBus from './utils/EventBus';
import dice from './Dice';

export default class GameLoop {


    constructor() {
        this.players = [];
        this.turnIndex = -1;
        this.$name = $('.nameField');
        this.$message = $('.message');
        this.$tableContainer = $('.standings');
    }

    addPlayer(player) {
        this.players.push(player);
        player.draw();
    }

    go() {
        this.drawTable();

        this.$message.text("Roll the dice!");
        this.turnIndex = (this.turnIndex + 1) % this.players.length;
        var player = this.players[this.turnIndex];

        this.$name.text(player.name);
        this.$name.css("color", player.colour);
        dice.enableClick((number) => {
            player.moveBy(number, this.go.bind(this));
        });
    }

    drawTable() {
        var table = `<table class="standings-table table table-striped"><tr><td></td>`;
        for(var i=0; i<this.players.length; i++) {
            table += `<td style="color: ${this.players[i].colour}">${this.players[i].name}</td>`;
        }
        table += "</tr><tr><td>Spell Points</td>";
        for(i=0; i<this.players.length; i++) {
            table += `<td>${this.players[i].sp}</td>`;
        }
        table += "</tr><tr><td>Health Points</td>";
        for(i=0; i<this.players.length; i++) {
            table += `<td>${this.players[i].hp}</td>`;
        }
        table += "</tr></table>";
        this.$tableContainer.html(table);
    }



}