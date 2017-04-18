import Field from "../Field";
import actionService from '../ActionService';
import swal from 'sweetalert2';

export default class GainTenSpellPointsField extends Field {

    doAction(player, callback) {
        actionService.changeSp(player, 10);
        swal({
            title: `Well done, ${player.name}`,
            text: "You gained ten spell points",
            type: "success"
        }).then(() => {callback()});
    }
}