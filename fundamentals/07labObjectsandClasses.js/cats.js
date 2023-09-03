function cats(inputArray) {
    class Cat{
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (const info of inputArray) {
        // let catInfo = info.split(' ');
        // let name = catInfo[0];
        // let age = Number(catInfo[1]);
        let [name, age] = info.split(' ');

        let cat = new Cat(name, age);
        cat.meow();
    }
    
}
cats(["Mellow 2", "Tom 5"]);
cats(["Candy 1", "Poppy 3", "Nyx 2"]);