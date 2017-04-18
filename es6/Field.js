import $ from 'jquery';

class Field {

    init(name, x1, y1, x2, y2, isUpperLevel) {
        this.name = name;
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.isUpperLevel = isUpperLevel;
    }

    getCenterX() {
        return (this.x1 + this.x2) / 2;
    }

    getCenterY() {
        return (this.y1 + this.y2) / 2;
    }

    setNeighbours(neighbours) {
        this.neighbours = neighbours;
    }

    doAction(player, callback) {
        console.error("Class should override doAction");
        callback();
    }

    highlight() {
        if (!this.$el) {
            this.$el = $(`<div class="field"></div>`);
            this.$el.appendTo($(".main"));
        }

        this.$el.css("left", this.x1);
        this.$el.css("top", this.y1);
        this.$el.css("width", this.x2 - this.x1);
        this.$el.css("height", this.y2 - this.y1);
        this.$el.show();
    }

    unhighlight() {
        if(this.$el) {
            this.$el.hide();
            this.$el.removeClass('clickable');
            this.$el.off('click');
        }
    }

    getNeighbours(callers, steps) {

        if (steps == 1) {
            return this.neighbours;
        }
        var tempNeighbours = [];
        var newCallers = callers.slice(0);
        newCallers.push(this);

        for (var i = 0; i < this.neighbours.length; i++) {
            if (newCallers.indexOf(this.neighbours[i]) < 0) {
                var items = this.neighbours[i].getNeighbours(newCallers, steps - 1);

                for (var j = 0; j < items.length; j++) {
                    if(newCallers.indexOf(items[j]) < 0) {
                        tempNeighbours.push(items[j]);
                    }
                }
            }
        }

        return tempNeighbours;
    }

    debugMe() {
        var tmp = "";
        for (var i = 0; i < this.neighbours.length; i++) {
            tmp += this.neighbours[i].name + ", ";
        }
        console.log("I am " + this.name + ", my neighbours are " + tmp);
    }

    setClickListener(callback) {
        if(this.$el) {
            this.$el.addClass('clickable');
            this.$el.on('click', () => callback(this));
        }
    }

}






export default Field;