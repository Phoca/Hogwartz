
export function randNumber(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 *
 * @param {Object.<*, number>} object the key is the one the will be returned, the values are the (numeric keys)
 */
export function weightedRandom(object) {
    var sum = 0;
    for(const key in object) {
        sum += object[key];
    }
    const random = randNumber(0, sum);

    sum = 0;
    for(const key in object) {
        sum += object[key];
        if(sum >= random) {
            return key;
        }
    }
    return key;
}

export function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}