import Field from "../Field";

export default class InfirmaryField extends Field {


    doAction(player, callback) {
        callback(); // do nothing
    }
}