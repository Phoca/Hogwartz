import Emitter from 'node-event-emitter';

// The class is pretty useless, to ensure every component is using the same EventBus instance, the wrapper class is needed though
class EventBus extends Emitter {
    on(type, listener) {
        if(type.indexOf(" ") >= 0) {
            const types = type.split(" ");
            for(let i in types) {
                super.on(types[i], listener);
            }
        }  else {
            super.on(type, listener);
        }
    }
}

export default new EventBus();