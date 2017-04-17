import "../Field";

export default class GainTenSpellPointsField extends Field {


    doAction(player) {
        player.gainSp(10);
    }
}