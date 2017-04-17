import "../Field";

export default class GainTwoHealthPointsField extends Field {


    doAction(player) {
        player.gainSp(10);
    }
}