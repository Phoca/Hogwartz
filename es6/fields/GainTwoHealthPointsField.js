import Field from "../Field";
import actionService from '../ActionService';

export default class GainTwoHealthPointsField extends Field {


    doAction(player, callback) {
        actionService.changeHp(player, 2);
        this.showMessage(`Well done, ${player.name}`, "You gained two health points");
        callback();
    }
}