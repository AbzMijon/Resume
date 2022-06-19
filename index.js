/* class grandad {
    constructor(name) {
        this.name = name;
    }
    sayHi = () => {
        return `Hello, ${this.name}!`;
    }
}

const sayHi = () => {
    let name = new grandad('Alexy');
    return name.sayHi();
}
console.log(sayHi()); */

class Developer {
	constructor(name) {
		this.name = name;
	}
	startWork() {
		return `${this.name} start work ...`;
	};
	endtWork() {
		return `${this.name} end work ...`;
	};
}

class Frontend extends Developer {
    #siteName = 'Amazon';
    buildWebSite() {
        return `${this.name}  start build website ${this.#siteName}`;
	};
}

class Backend extends Developer {
	#buildServer = function() {
		return `${this.name} start build server`;
	};
}

let egor = new Frontend('Egor');
let hiddenMan = new Backend('Noname');
console.log(egor);
console.log(egor.startWork());
console.log(egor.buildWebSite());
console.log(egor.endtWork());
console.log(Backend.#buildServer());