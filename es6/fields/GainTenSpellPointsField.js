import Field from "../Field";
import actionService from '../ActionService';

export default class GainTenSpellPointsField extends Field {

    doAction(player, callback) {
        actionService.changeSp(player, 10);
        message(`Well done, ${player.name}`, "You gained ten spell points");
        callback();
    }
}