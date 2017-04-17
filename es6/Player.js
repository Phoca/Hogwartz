import $ from 'jquery';


class Player {

    constructor(name, house) {

        this.name = name;
        this.house = house;
        this.sp = 0;
        this.hp = 10;
    }

    getSp() {
        return this.sp;
    }

    changeSp(val) {
        this.sp += val;
    }

    getHp() {
        return this.hp;
    }

    changeHp(val) {
        this.hp += val;
    }


    setField(field) {
        this.field = field;
    }

    draw() {
        if(!this.$el) {
            var colour;
            switch(this.house) {
                case Player.HOUSES.SLYTHERIN:
                    colour = "green";
                    break;
                case Player.HOUSES.GRYFFINDOR:
                    colour = "red";
                    break;
                case Player.HOUSES.HUFFLEPUFF:
                    colour = "yellow";
                    break;
                case Player.HOUSES.RAVENCLAW:
                    colour = "blue";
                    break;

            }
            this.$el = $(`<div class="player" style="background-color: ${colour}"></div>`);
            this.$el.appendTo($(".main"));
        }

        this.$el.css("left", this.field.getCenterX() - Player.RADIUS);
        this.$el.css("top", this.field.getCenterY() - Player.RADIUS);
    }

    moveBy(steps) {
        var possibleFields = this.field.getNeighbours([], steps);

        for(var i=0; i<possibleFields.length; i++) {
            possibleFields[i].highlight();
        }

    }
}

Player.HOUSES = {
    SLYTHERIN: 0,
    GRYFFINDOR: 1,
    HUFFLEPUFF: 2,
    RAVENCLAW: 3
};

Player.RADIUS = 15;

export default Player;