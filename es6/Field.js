export default class Field {

    init(x1, y1, x2, y2, isUpperLevel) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.isUpperLevel = isUpperLevel;
    }

    setNeighbours(neighbours) {
        this.neighbours = neighbours;
    }

    doAction() {
        console.error("Class should override doAction");
    }

}