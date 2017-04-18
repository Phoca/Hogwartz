import Field from "../Field";
import actionService from '../ActionService';
import swal from 'sweetalert2';

export default class GainTwoHealthPointsField extends Field {

    doAction(player, callback) {
        actionService.changeHp(player, 2);
        swal({
            title: `Well done, ${player.name}`,
            text: "You gained two health points",
            type: "success"
        }).then(() => {callback()});
    }
}