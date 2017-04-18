import {shuffle} from './utils/MathUtils';
import actionService from './ActionService';
import swal from 'sweetalert2';
import Field from './Field';
import dice from './Dice';
import gameLoop from './GameLoop';
import $ from 'jquery';

class EventCardManager {

    constructor() {
        this.nextIndex = 0;
    }

    drawCard(player, callback) {
        var card = EventCardManager.events[this.nextIndex];
        swal({title: card.title, html: card.message}).then(() => {
            card.doAction(player, callback);
        });

        this.nextIndex++;
        if(this.nextIndex >= EventCardManager.events.length) {
            this.reshuffle();
        }
    }

    reshuffle() {
        shuffle(EventCardManager.events);
        this.nextIndex = 0;
    }

}


EventCardManager.events = [
    {
        title: "Visited by Moaning Myrtle.",
        message: "Get complained at for a round by her (or other players).<br><br>Lose (5/10) SP",
        doAction: function(player, callback) {
            actionService.changeSp(player, player.field.isUpperLevel ? -10 : -5);
            callback();
        }
    }, {
        title: "Help Hagrid catch a Creature.",
        message: "Lose (2/4) HP and Gain (15/25) SP<br><br>Move to Hagrids Cabin. Do not play that square.",
        doAction: function(player, callback) {
            actionService.changeSp(player, player.field.isUpperLevel ? 25 : 15);
            actionService.changeHp(player, player.field.isUpperLevel ? -4 : -2);
            player.setField(Field.HAGRIDS_CABIN);
            callback();
        }
    }, {
        title: "Professor Umbridge",
        message: "summons you to her office and makes you write “I must not tell lies”.<br>Roll 1 die to see how many times you must write it, losing 1 HP each time.",
        doAction: function(player, callback) {
            $(".message").text("Roll the dice to determine your detention.");
            dice.enableClick((number) => {
                actionService.changeHp(player, -number);
                callback();
            });
        }
    }, {
        title: "Ministry of Magic issues a warning of a Dementor Attack on Hogwarts.",
        message: "All players must be returned to their House Common Rooms.",
        doAction: function(player, callback) {
            for(var i=0; i<gameLoop.players.length; i++) {
                gameLoop.players[i].setToHome();
            }
            callback();
        }
    }

];


let manager =  new EventCardManager();
manager.reshuffle();
export default manager;