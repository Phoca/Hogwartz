import Field from "../Field";

export default class HallwayField extends Field {


    doAction(player, callback) {
        callback(); // do nothing
    }
}