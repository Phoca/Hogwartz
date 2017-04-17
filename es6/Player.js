import $ from 'jquery';


class Player {

    constructor(name, house) {

        this.name = name;
        this.house = house;

        switch(this.house) {
            case Player.HOUSES.SLYTHERIN:
                this.colour = "green";
                break;
            case Player.HOUSES.GRYFFINDOR:
                this.colour = "red";
                break;
            case Player.HOUSES.HUFFLEPUFF:
                this.colour = "yellow";
                break;
            case Player.HOUSES.RAVENCLAW:
                this.colour = "blue";
                break;
        }

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
            this.$el = $(`<div class="player" style="background-color: ${this.colour}"></div>`);
            this.$el.appendTo($(".main"));
        }

        this.$el.css("left", this.field.getCenterX() - Player.RADIUS);
        this.$el.css("top", this.field.getCenterY() - Player.RADIUS);
    }

    moveBy(steps, callback) {
        var possibleFields = this.field.getNeighbours([], steps);

        var makeMove = function(field) {
            for(var i=0; i<possibleFields.length; i++) {
                possibleFields[i].unhighlight();
            }
            this.field = field;
            this.draw();
            callback(field);
        };

        for(var i=0; i<possibleFields.length; i++) {
            possibleFields[i].highlight();
            possibleFields[i].setClickListener(makeMove.bind(this));
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