export default class Player {

    constructor(name) {
        this.name = name;
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



}