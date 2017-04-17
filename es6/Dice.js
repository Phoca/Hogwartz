import $ from 'jquery';


class Dice {

    constructor() {
        this.$el = $('.dice');
    }

    roll() {
        this.$el.off('click');
        this.rolling(Dice.ROLLS);
    }

    rolling(times) {
        this.removeClasses();
        var number = parseInt(Math.random() * 6) + 1;
        this.$el.addClass("number" + number);

        if(times == 0) {
            this.callback(number);
        } else {
            setTimeout(() => this.rolling(times - 1), Dice.ROLL_TIMEOUT);
        }
    }

    removeClasses() {
        this.$el.attr("class", "dice");
    }

    enableClick(callback) {
        this.$el.addClass("clickable");
        this.callback = callback;
        this.$el.on('click', this.roll.bind(this));
    }
}

Dice.ROLL_TIMEOUT = 50;
Dice.ROLLS = 10;

export default new Dice();