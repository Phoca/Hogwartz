import Field from "../Field";

export default class VanishingCabinetField extends Field {

    doAction(player, callback) {
        callback(); // do nothing
    }
}