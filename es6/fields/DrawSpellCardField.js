import Field from "../Field";

export default class DrawSpellCardField extends Field {

    doAction(player, callback) {
        callback(); // do nothing
    }
}