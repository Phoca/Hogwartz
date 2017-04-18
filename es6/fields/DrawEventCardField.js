import Field from "../Field";

export default class DrawEventCardField extends Field {

    doAction(player, callback) {
        callback(); // do nothing
    }
}