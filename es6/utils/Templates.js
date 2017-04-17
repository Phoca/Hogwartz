class Templates {
    constructor() {
        this.templates = {
            match: `
                <div class="match">
                    <span class="teilnehmende">
                        <b>{{user11}}</b> und <b>{{user12}}</b> gegen <b>{{user21}}</b> und <b>{{user22}}</b> 
                    </span>
                    
                    <span class="input">
                        <input class="sets1" type="number" min="0" max="3" value="{{sets1}}"> : <input class="sets2" type="number" min="0" max="3" value="{{sets2}}">
                        <button class="save">Speichern</button>
                    </span>
                    <span class="result">
                        <span class="resultsSet1">{{sets1}}</span> : <span class="resultsSet2">{{sets2}}</span> <button class="editResult">Bearbeiten</button> <button class="deleteResult">Löschen</button>
                    </span>
                </div>
            `
        };
    }

    get(identifier, data) {
        let template = this.templates[identifier];

        for(var key in data) {
            if(data.hasOwnProperty(key)) {
                template = template.split('{{' + key + '}}').join(data[key]);
            }
        }
        return template;
    }
}

export default new Templates();