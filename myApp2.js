class Computer {
    constructor(cpu, memory, diskSpace) {
        this._cpu = cpu;
        this._memory = memory;
        this._diskSpace = diskSpace;
    }

    get cpu() { return this._cpu; }

    get memory() { return this._memory; }

    get diskSpace() { return this._diskSpace; }

    set cpu(value) { this.cpu = value;}
    set memory(value) { this.memory = value}
    set diskSpace(value) { this.diskSpace = value}

    upgradeMemory(upgrade) { 
        if(upgrade <= this.memory) {
            console.log('Not an upgrade');
        } else {
            this.memory = upgrade
        }
    }
}

class Mac extends Computer {
    constructor(memory, diskSpace) {
        super(memory, diskSpace);
        this._cpu = 'ARM';
        this._memory = memory;
        this._diskSpace = diskSpace;
        this._superiority = false;
    }

    get superiority() { return this._superiority}

    checkSuperiority() {
        if(this.superiority === true) {
            console.log('Congratulations, your computer is better!');
        }   else  {
            console.log('Why did you buy a Mac?')
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

    get superiority() { return this._superiority}

    checkSuperiority() {
        if(this.superiority === true) {
            console.log('Congratulations, your computer is better!');
        }   else  {
            console.log('Why did you buy a Mac?')
        }
    }
}

const iMac = new Mac(32, 500);
console.log(iMac);
iMac.checkSuperiority();

const myPc = new PC('AMD', 32, 1000);
console.log(myPc);
myPc.checkSuperiority();