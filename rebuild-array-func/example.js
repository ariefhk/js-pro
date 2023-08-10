class OurArray {
    constructor() {
        this.items = [];
        this.count = this.items.length;
        if (arguments.length != 0) this.create_array(arguments);
    }

    create_array(items) {
        for (let x = 0; arguments[0].length > x; x++) {
            this.push(arguments[0][x]);
        }
    }

    push(element) {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`);
        this.count += 1;
        return this.count - 1;
    }

    shift() {
        delete this.items[0];
    }

    map(fn) {
        var newArray = new OurArray();
        for (let x = 0; this.count > x; x++) {
            newArray.push(fn(this.items[x], x, this.items));
        }
        return newArray;
    }

    filter(fn) {
        var newArray = new OurArray();
        for (let x = 0; this.count > x; x++) {
            if (fn(this.items[x], x, this.items)) {
                newArray.push(this.items[x]);
            }
        }
        return newArray;
    }

    reduce(fn, initialValue = this.items[0]) {
        for (let x = 0; x < this.count; x++) {
            sum = fn(sum, this.items[x], x, this.items);
        }
        return sum;
    }

    includes(element) {
        for (let x = 0; x < this.count; x++) {
            if (this.items[x] == element) return true;
        }
        return false;
    }

    size() {
        return this.count;
    }

    clear() {
        this.items = [];
        this.count = 0;
        return this.items;
    }
}
// To CLARIFY The JavaScript Array methods Array.Map and Array.Filter technically takes *two* arguments. The first being the callback function, and the second being 'thisArg', a value to use as 'this' when executing a callback. The callback function takes three arguments which are represented in the above code.

const array = [1, 2, 3, 4, 5];
const test = new OurArray(1, 2, 3, 4, 5).map((_, i) => i);
console.log(test);
