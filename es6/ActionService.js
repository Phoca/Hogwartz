

class ActionService {

    changeSp(player, amount) {
        player.changeHp(amount);
    }

    changeHp(player, amount) {
        player.changeHp(amount);
    }
}

export default new ActionService();