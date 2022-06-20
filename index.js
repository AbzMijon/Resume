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

/* class Developer {
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
console.log(Backend.#buildServer()); */



/* class dad {
	num() {
		return -1;
	}
	variable = 18;
	get logicNum() {
		if(this.num() > 10) {
			console.log(`Sorry, value ${this.num()} is biggest than 10`);
		}	else if(this.num() < 0) {
			console.log(`Sorry, value ${this.num()} is less than 0`);
		}	else {
			console.log(this.num());
		}
	}
	set changeValue(newValue) {
		newValue = this.num();
	}
}

let a = new dad();
console.log(a.logicNum);
console.log(a.changeValue = 214);
console.log(a); */




class Square {
	constructor(w, h) {
		this.w = w;
		this.h = h;
	}
	counter = 0;
	name = 'square';
	get isSquare() {
		if(this.w === this.h) {
			return `it is ${this.name}! and ${this.#padding()}`;
		}	else {
			throw new Error('sides are not equal..');
		}
	}
	#padding() {
		return this.counter++;
	}
}

let b = new Square(5, 5);
console.log(b.isSquare);
console.log(b.isSquare);
console.log(b.isSquare);
console.log(b.isSquare);
console.log(b.isSquare);