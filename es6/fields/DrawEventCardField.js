import Field from "../Field";
import eventCardManager from "../EventCard";

export default class DrawEventCardField extends Field {

    doAction(player, callback) {
        eventCardManager.drawCard(player, callback);
    }
}