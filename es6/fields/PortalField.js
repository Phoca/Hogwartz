import Field from "../Field";

export default class PortalField extends Field {


    doAction(player, callback) {
        callback(); // do nothing
    }
}