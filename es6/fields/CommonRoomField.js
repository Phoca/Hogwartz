import Field from "../Field";

export default class CommonRoomField extends Field {

    doAction(player, callback) {
        callback(); // do nothing
    }
}