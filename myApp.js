class Computer {
    constructor(cpu, memory, diskSpace) {
        this._cpu = cpu;
        this._memory = memory;
        this._diskSpace = diskSpace;
    }

    get cpu() { return this._cpu; }

    get memory() { return this._memory; }

    get diskSpace() { return this._diskSpace; }

    set memory(newMem) { this._memory = newMem; }

    set diskSpace(newDisk) { this._diskSpace = newDisk; }

    upgradeMemory(upgrade) {
        if (upgrade <= this.memory) {
            console.log("That's not an upgrade, you need to up your spending limit!");
        } else {
            this.memory = upgrade;
            console.log(`You are now rocking ${this.memory} MB of RAM!`);
        }
    }
    upgradeDisk(upgrade) {
        if (upgrade <= this.diskSpace) {
            console.log("That's not an upgrade, you need to up your spending limit!");
        } else {
            this.diskSpace = upgrade;
            console.log(`You are now rocking ${this.diskSpace} GB of HD space!`);
        }
    }
}

class PC extends Computer {
    constructor(cpu, memory, diskSpace) {
        super(cpu, memory, diskSpace);
        this._cpu = cpu;
        this._memory = memory;
        this._diskSpace = diskSpace;
        this._superiority = true;
    }
    
    get superiority() { return this._superiority; }

    set cpu(upgrade) { this._cpu = upgrade;}

    changeProccessor() {
        console.log('Changing processor...');
        if (this.cpu === 'Intel') {
            this._cpu = 'AMD';
            console.log('You are now rocking an AMD driven machine!');
        }   else {
            this.cpu = 'Intel'
            console.log('You are now rocking a machine with an Intel brain!');
        }
    }

    checkSuperiority() {
        if (this.superiority === true) {
            console.log('Congratulations, your computer is superior!')
        }   else {
            console.log('Sorry, you must have downgraded :(');
        }
    }
}

class MAC extends Computer {
    constructor(memory, diskSpace) {
        super(memory, diskSpace);
        this._cpu = 'ARM';
        this._memory = memory;
        this._diskSpace = diskSpace;
        this._superiority = false;
    }
    
    get superiority() { return this._superiority; }

    checkSuperiority() {
        if (this.superiority === true) {
            console.log('Congratulations, your computer is superior!')
        }   else {
            console.log('Sorry, you are subscribed to the cult of Apple');
        }
    }
}

const iMac = new MAC(32, 500);
const myComputer = new PC('AMD', 32, 1000);

console.log(iMac);
iMac.upgradeMemory(64);
iMac.upgradeDisk(1000);
console.log(iMac);
iMac.checkSuperiority();

console.log(myComputer);
myComputer.checkSuperiority();



myComputer.changeProccessor();
console.log(myComputer);