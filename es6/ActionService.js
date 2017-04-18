

class ActionService {

    changeSp(player, amount) {
        player.changeSp(amount);
    }

    changeHp(player, amount) {
        player.changeHp(amount);
    }
}

export default new ActionService();