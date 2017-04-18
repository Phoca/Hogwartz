import $ from 'jquery';
import eventBus from './utils/EventBus';
import dice from './Dice';
import swal from 'sweetalert2';


class GameLoop {


    constructor() {
        this.players = [];
        this.turnIndex = 0;
        this.$name = $('.nameField');
        this.$message = $('.message');
        this.$tableContainer = $('.standings');
    }

    addPlayer(player) {
        this.players.push(player);
        player.draw();
    }

    go() {
        this.$message.text("Roll the dice!");
        this.drawTable();

        var player = this.players[this.turnIndex];

        this.$name.text(player.name);
        this.$name.css("color", player.colour);
        dice.enableClick((number) => {
            player.moveBy(number, this.incrementTurnIndexAndGo.bind(this));
        });
    }

    incrementTurnIndexAndGo() {
        this.turnIndex += 1;
        if(this.turnIndex >= this.players.length) {
            for (var i = 0; i < this.players.length; i++) {
                this.players[i].roundOver();
            }
            swal({title: "The round is over", text: "Everyone gains 5 SP and 1 HP"}).then(this.go.bind(this));
            this.turnIndex = 0;
        } else {
            this.go();
        }
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

export default new GameLoop();